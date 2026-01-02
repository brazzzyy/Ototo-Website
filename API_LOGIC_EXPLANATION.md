# API Request & Call Logic - Learning Guide

This document explains the API request patterns and logic used in your Ototo website.

## 📚 Table of Contents
1. [Server Actions Pattern](#server-actions-pattern)
2. [Google Places API Implementation](#google-places-api-implementation)
3. [Resend Email API Implementation](#resend-email-api-implementation)
4. [Caching Strategy](#caching-strategy)
5. [Error Handling Patterns](#error-handling-patterns)
6. [Environment Variables](#environment-variables)
7. [Data Transformation](#data-transformation)

---

## 1. Server Actions Pattern

### What are Server Actions?
Server Actions are Next.js functions that run **only on the server**. They're marked with `'use server'` at the top.

**Key Benefits:**
- ✅ Secure: API keys never exposed to the browser
- ✅ Direct: No need to create separate API routes
- ✅ Type-safe: Full TypeScript support

### Example Structure:
```typescript
'use server'  // ← This tells Next.js: "Run this ONLY on the server"

export async function myServerAction() {
  // Your API logic here
  // This code NEVER runs in the browser
}
```

---

## 2. Google Places API Implementation

### File: `app/reviews/actions.ts`

#### A. The Main Function: `fetchGoogleReviews()`

```typescript
export async function fetchGoogleReviews(placeId?: string)
```

**What it does:**
1. Gets API credentials from environment variables
2. Validates that credentials exist
3. Calls the internal API function
4. Returns results or errors

**Key Pattern: Environment Variable Validation**
```typescript
const apiKey = process.env.GOOGLE_PLACES_API_KEY;
const defaultPlaceId = process.env.GOOGLE_PLACE_ID;

if (!apiKey) {
  return { success: false, error: 'API key not configured' };
}
```

**Why this pattern?**
- Prevents runtime errors by checking early
- Provides clear error messages
- Uses environment variables (secure, not hardcoded)

---

#### B. The Internal API Call: `fetchGoogleReviewsAPI()`

```typescript
async function fetchGoogleReviewsAPI(placeId: string, apiKey: string)
```

**Step-by-Step Logic:**

**1. Cache Check (Prevents Duplicate Calls)**
```typescript
const cacheKey = placeId;
if (apiCallCache.has(cacheKey)) {
  return apiCallCache.get(cacheKey)!;  // Return cached result
}
```

**2. Build the API URL**
```typescript
const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
```

**Breaking down the URL:**
- Base: `https://maps.googleapis.com/maps/api/place/details/json`
- Query parameters:
  - `place_id`: The unique Google Place ID
  - `fields`: What data we want (only reviews, rating, total - saves bandwidth)
  - `key`: Your API key for authentication

**3. Make the HTTP Request**
```typescript
const response = await fetch(url);
const data: GooglePlaceDetails = await response.json();
```

**Why `await`?**
- `fetch()` is asynchronous (takes time)
- `await` pauses execution until the request completes
- Without `await`, you'd get a Promise object, not the actual data

**4. Check API Response Status**
```typescript
if (data.status !== 'OK') {
  // Handle error
  return { success: false, error: `API error: ${data.status}` };
}
```

**Common API Status Codes:**
- `OK`: Success ✅
- `REQUEST_DENIED`: API key issue or API not enabled
- `INVALID_REQUEST`: Bad Place ID or parameters
- `ZERO_RESULTS`: No data found

**5. Validate Data Exists**
```typescript
if (!data.result.reviews || data.result.reviews.length === 0) {
  return { success: false, error: 'No reviews found' };
}
```

**Why check?**
- API might return success but no reviews
- Prevents errors when trying to map over empty arrays

**6. Transform Data**
```typescript
const reviews: Review[] = data.result.reviews.map((review: GoogleReview) => ({
  authorName: review.author_name,        // snake_case → camelCase
  authorUrl: review.author_url,
  profilePhotoUrl: review.profile_photo_url,
  rating: review.rating,
  relativeTime: review.relative_time_description,
  text: review.text,
  time: review.time * 1000  // Convert seconds to milliseconds
}));
```

**Why transform?**
- Google API uses `snake_case` (Python style)
- Your app uses `camelCase` (JavaScript style)
- Standardizes data format across your app

**7. Cache the Result**
```typescript
apiCallCache.set(cacheKey, successResult);
```

**Why cache?**
- Prevents duplicate API calls (saves money & time)
- Faster subsequent requests
- Reduces API quota usage

---

## 3. Resend Email API Implementation

### File: `app/contact/actions.ts`

#### The Function: `submitContactForm()`

**Step-by-Step Logic:**

**1. Extract Form Data**
```typescript
const name = formData.get('name') as string;
const email = formData.get('email') as string;
const phone = formData.get('phone') as string;
const message = formData.get('message') as string;
```

**Why `FormData`?**
- Next.js passes form data as `FormData` object
- `.get()` retrieves values by field name
- `as string` tells TypeScript the type

**2. Validate Input**
```typescript
if (!name || !email || !message) {
  return { success: false, error: 'Please fill in all required fields.' };
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return { success: false, error: 'Please enter a valid email address.' };
}
```

**Why validate?**
- Prevents bad data from reaching the API
- Better user experience (immediate feedback)
- Saves API calls (and money)

**3. Initialize Resend Client**
```typescript
const resend = new Resend(RESEND_API_KEY);
```

**Pattern: Third-Party SDK**
- Resend provides a JavaScript SDK
- Initialize with API key
- SDK handles HTTP requests internally

**4. Send Email**
```typescript
await resend.emails.send({
  from: fromEmail,
  to: CONTACT_EMAIL,
  replyTo: email,
  subject: `New Contact Form Submission from ${name}`,
  html: `...`,  // HTML version
  text: `...`   // Plain text version
});
```

**Why both HTML and text?**
- HTML: Pretty formatting for email clients that support it
- Text: Fallback for clients that don't support HTML

**5. Return Success/Error**
```typescript
return { success: true, message: 'Thank you for your message!' };
```

**Consistent Return Pattern:**
- Always return `{ success: boolean, ... }`
- Makes it easy to handle in the UI
- Clear success/failure states

---

## 4. Caching Strategy

### In-Memory Cache Pattern

**Location:** `app/reviews/actions.ts`

```typescript
const apiCallCache = new Map<string, { success: true; data: ReviewsData } | { success: false; error: string }>();
```

**How it works:**
1. First call: Makes API request, stores result in Map
2. Subsequent calls: Returns cached result (no API call)

**Cache Key:**
```typescript
const cacheKey = placeId;  // Uses Place ID as unique identifier
```

**Why Map?**
- Fast lookups: `O(1)` time complexity
- Key-value storage: Perfect for caching
- Built into JavaScript (no dependencies)

**Important Notes:**
- ⚠️ **In-memory cache resets on server restart**
- ⚠️ **Only works within the same server instance**
- ✅ **Prevents duplicate calls during the same session**

**When to use:**
- ✅ Expensive API calls (costs money)
- ✅ Data that doesn't change frequently
- ✅ When you want to prevent duplicate requests

**When NOT to use:**
- ❌ Real-time data (stock prices, chat messages)
- ❌ User-specific data that changes
- ❌ Data that needs to persist across restarts

---

## 5. Error Handling Patterns

### Pattern 1: Early Returns

```typescript
if (!apiKey) {
  return { success: false, error: 'API key missing' };
}
// Continue with logic...
```

**Benefits:**
- Clear error messages
- Prevents nested if-else statements
- Easy to read and maintain

### Pattern 2: Try-Catch Blocks

```typescript
try {
  const response = await fetch(url);
  const data = await response.json();
  // Process data...
} catch (error) {
  console.error('Error:', error);
  return { success: false, error: 'Something went wrong' };
}
```

**Why try-catch?**
- Network requests can fail (timeout, no internet, etc.)
- API might be down
- Invalid responses can throw errors

**What to do in catch:**
1. Log the error (for debugging)
2. Return user-friendly message
3. Don't expose technical details to users

### Pattern 3: API Status Checking

```typescript
if (data.status !== 'OK') {
  return { success: false, error: `API error: ${data.status}` };
}
```

**Why check status?**
- APIs return different status codes
- `OK` means success, others mean different errors
- Handle each status appropriately

### Pattern 4: Consistent Error Format

```typescript
{ success: false, error: string }
```

**Benefits:**
- Easy to check: `if (result.success) { ... }`
- Consistent across all functions
- Type-safe with TypeScript

---

## 6. Environment Variables

### What are they?
Environment variables store sensitive or configuration data outside your code.

**File:** `.env.local` (not committed to git)

```bash
GOOGLE_PLACES_API_KEY=your_key_here
GOOGLE_PLACE_ID=ChIJ1RwAAQm3A4gRZaiCWXG8r8s
RESEND_API_KEY=your_key_here
```

### How to Access:
```typescript
process.env.GOOGLE_PLACES_API_KEY
```

### Why use them?
- ✅ **Security**: API keys never in code (can't be stolen from GitHub)
- ✅ **Flexibility**: Different keys for dev/production
- ✅ **Best Practice**: Industry standard

### Important Notes:
- ⚠️ Never commit `.env.local` to git
- ⚠️ Add `.env.local` to `.gitignore`
- ✅ Use `.env.example` to document required variables

---

## 7. Data Transformation

### Why Transform Data?

**Google API Format (snake_case):**
```typescript
{
  author_name: "John",
  author_url: "https://...",
  profile_photo_url: "https://...",
  relative_time_description: "2 months ago"
}
```

**Your App Format (camelCase):**
```typescript
{
  authorName: "John",
  authorUrl: "https://...",
  profilePhotoUrl: "https://...",
  relativeTime: "2 months ago"
}
```

### Transformation Pattern:

```typescript
const reviews: Review[] = data.result.reviews.map((review: GoogleReview) => ({
  authorName: review.author_name,           // Rename field
  authorUrl: review.author_url,             // Keep same
  profilePhotoUrl: review.profile_photo_url, // Rename field
  rating: review.rating,                    // Keep same
  relativeTime: review.relative_time_description, // Rename field
  text: review.text,                        // Keep same
  time: review.time * 1000                  // Convert units
}));
```

**Benefits:**
- ✅ Consistent naming in your app
- ✅ Type-safe with TypeScript interfaces
- ✅ Easy to use in components

---

## 🎯 Key Takeaways

### 1. **Server Actions Pattern**
- Use `'use server'` for server-only functions
- Secure, direct, type-safe

### 2. **API Request Flow**
```
Validate Input → Check Cache → Build URL → Fetch → Check Status → Transform Data → Cache Result → Return
```

### 3. **Error Handling**
- Always validate inputs
- Use try-catch for network requests
- Check API status codes
- Return consistent error format

### 4. **Caching**
- Use in-memory cache for expensive calls
- Prevents duplicate requests
- Saves money and improves performance

### 5. **Environment Variables**
- Store sensitive data in `.env.local`
- Never commit to git
- Access via `process.env.VARIABLE_NAME`

### 6. **Data Transformation**
- Convert external API format to your app's format
- Use `.map()` for arrays
- Keep transformations consistent

---

## 📖 Further Learning

### Practice Exercises:

1. **Add a new API call:**
   - Create a server action to fetch weather data
   - Implement caching
   - Add error handling

2. **Improve error messages:**
   - Add specific error messages for each API status code
   - Include helpful troubleshooting tips

3. **Add request logging:**
   - Log API calls (without sensitive data)
   - Track success/failure rates

### Resources:
- [Next.js Server Actions Docs](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [Google Places API Docs](https://developers.google.com/maps/documentation/places/web-service)
- [Resend API Docs](https://resend.com/docs)

---

## ❓ Common Questions

**Q: Why cache in memory instead of a database?**
A: Simpler, faster, and sufficient for this use case. Database caching is better for data that needs to persist or be shared across servers.

**Q: What if the API key is wrong?**
A: The API will return `REQUEST_DENIED` status, which we catch and return as an error.

**Q: Can I make the cache expire after some time?**
A: Yes! You could add a timestamp to cache entries and check if they're expired before using them.

**Q: Why use `as string` type assertion?**
A: `FormData.get()` returns `string | null`, but we know it's a string after validation. Type assertion tells TypeScript we're sure.

---

*Happy coding! 🚀*

