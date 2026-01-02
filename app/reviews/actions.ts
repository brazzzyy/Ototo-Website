'use server'

// In-memory cache to ensure only ONE API call is ever made
// This prevents duplicate calls even if the function is called multiple times
const apiCallCache = new Map<string, { success: true; data: ReviewsData } | { success: false; error: string }>();

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlaceDetails {
  result: {
    reviews?: GoogleReview[];
    rating?: number;
    user_ratings_total?: number;
  };
  status: string;
}

export interface Review {
  authorName: string;
  authorUrl?: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime: string;
  text: string;
  time: number;
}

export interface ReviewsData {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

/**
 * Makes exactly ONE API call to fetch Google Reviews
 * Results are cached in memory to prevent duplicate calls
 */
async function fetchGoogleReviewsAPI(placeId: string, apiKey: string): Promise<{ success: true; data: ReviewsData } | { success: false; error: string }> {
  // Check cache first - if we already made a call, return cached result
  const cacheKey = placeId;
  if (apiCallCache.has(cacheKey)) {
    console.log('✅ Using cached result (avoiding duplicate API call)');
    return apiCallCache.get(cacheKey)!;
  }

  console.log('📡 Making ONE API call to fetch reviews...');
  
  try {
    // Use legacy Places API (more reliable and widely supported)
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    
    const response = await fetch(url);
    const data: GooglePlaceDetails = await response.json();

    if (data.status !== 'OK') {
      const errorResult: { success: false; error: string } = {
        success: false,
        error: `Google Places API error: ${data.status}. Please verify your Place ID and API key.`
      };
      // Cache error too, so we don't keep retrying
      apiCallCache.set(cacheKey, errorResult);
      return errorResult;
    }

    if (!data.result.reviews || data.result.reviews.length === 0) {
      const errorResult: { success: false; error: string } = {
        success: false,
        error: 'No reviews found for this location.'
      };
      apiCallCache.set(cacheKey, errorResult);
      return errorResult;
    }

    const reviews: Review[] = data.result.reviews.map((review: GoogleReview) => ({
      authorName: review.author_name,
      authorUrl: review.author_url,
      profilePhotoUrl: review.profile_photo_url,
      rating: review.rating,
      relativeTime: review.relative_time_description,
      text: review.text,
      time: review.time * 1000 // Convert to milliseconds
    }));

    const successResult: { success: true; data: ReviewsData } = {
      success: true,
      data: {
        reviews,
        averageRating: data.result.rating || 0,
        totalReviews: data.result.user_ratings_total || reviews.length
      }
    };

    // Cache the successful result - this ensures we never make another API call
    apiCallCache.set(cacheKey, successResult);
    console.log(`✅ API call complete! Fetched ${reviews.length} reviews (cached to prevent future calls)`);
    
    return successResult;
  } catch (error) {
    console.error('❌ Error fetching Google Reviews:', error);
    const errorResult: { success: false; error: string } = {
      success: false,
      error: 'Failed to fetch reviews. Please check your API configuration.'
    };
    // Cache error to prevent retries
    apiCallCache.set(cacheKey, errorResult);
    return errorResult;
  }
}

/**
 * Fetches Google Reviews using the Places API
 * 
 * ⚠️ IMPORTANT: This function makes EXACTLY ONE API call per Place ID.
 * Results are cached in memory to prevent any duplicate calls, even if
 * this function is called multiple times.
 * 
 * NOTE: Your website uses static reviews data from reviews-data.ts.
 * This function is only needed if you want to programmatically fetch
 * reviews (e.g., for the fetch-reviews.ts script).
 * 
 * @param placeId - The Google Place ID for your restaurant
 * @returns Reviews data or error
 */
export async function fetchGoogleReviews(placeId?: string): Promise<{ success: true; data: ReviewsData } | { success: false; error: string }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const defaultPlaceId = process.env.GOOGLE_PLACE_ID;
  const finalPlaceId = placeId || defaultPlaceId;

  if (!apiKey) {
    console.error('GOOGLE_PLACES_API_KEY is not set in environment variables');
    return {
      success: false,
      error: 'Google Places API key is not configured. Please set GOOGLE_PLACES_API_KEY in your environment variables.'
    };
  }

  if (!finalPlaceId) {
    console.error('GOOGLE_PLACE_ID is not set in environment variables');
    return {
      success: false,
      error: 'Google Place ID is not configured. Please set GOOGLE_PLACE_ID in your environment variables.'
    };
  }

  // This makes exactly ONE API call and caches the result
  return await fetchGoogleReviewsAPI(finalPlaceId, apiKey);
}

