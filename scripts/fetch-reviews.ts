/**
 * One-time script to fetch Google Reviews and save them to reviews-data.ts
 * 
 * Usage:
 * 1. Make sure you have .env with GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID
 * 2. Run: pnpm tsx scripts/fetch-reviews.ts
 * 3. Review the generated data in app/reviews/reviews-data.ts
 * 4. Manually edit the file to curate which reviews to display
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { config } from 'dotenv';

// Load environment variables from .env.local or .env
const envLocalPath = join(process.cwd(), '.env.local');
const envPath = join(process.cwd(), '.env');

let envFileUsed = '';
if (existsSync(envLocalPath)) {
  const result = config({ path: envLocalPath });
  envFileUsed = '.env.local';
  if (result.error) {
    console.warn(`Warning loading .env.local: ${result.error.message}`);
  }
} else if (existsSync(envPath)) {
  const result = config({ path: envPath });
  envFileUsed = '.env';
  if (result.error) {
    console.warn(`Warning loading .env: ${result.error.message}`);
  }
} else {
  console.warn('Warning: No .env.local or .env file found');
}

interface GoogleReview {
  author_name: string;
  author_url?: string;
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

interface Review {
  authorName: string;
  authorUrl?: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime: string;
  text: string;
  time: number;
}

interface ReviewsData {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

async function fetchReviews(): Promise<ReviewsData | null> {
  // Get raw values and trim any whitespace
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim().replace(/^["']|["']$/g, '') || '';
  const placeId = process.env.GOOGLE_PLACE_ID?.trim().replace(/^["']|["']$/g, '') || '';

  const envFile = envFileUsed || '.env or .env.local';

  // Debug output
  console.log(`📄 Looking for environment variables in: ${envFile}`);
  console.log(`   GOOGLE_PLACES_API_KEY: ${apiKey ? 'Found (' + apiKey.substring(0, 10) + '...)' : 'Not found'}`);
  console.log(`   GOOGLE_PLACE_ID: ${placeId ? 'Found (' + placeId + ')' : 'Not found'}\n`);

  if (!apiKey) {
    console.error(`Error: GOOGLE_PLACES_API_KEY not found in ${envFile}`);
    return null;
  }

  if (!placeId) {
    console.error(`Error: GOOGLE_PLACE_ID not found in ${envFile}`);
    return null;
  }

  console.log('🔍 Fetching reviews from Google Places API...');

  try {
    // Try legacy API first (more reliable)
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    
    const response = await fetch(url);
    const data: GooglePlaceDetails = await response.json();

    if (data.status !== 'OK') {
      console.error(`API Error: ${data.status}`);
      
      // Show detailed error information
      if ((data as any).error_message) {
        console.error(`   Error Message: ${(data as any).error_message}`);
      }
      
      return null;
    }

    if (!data.result.reviews || data.result.reviews.length === 0) {
      console.error('No reviews found for this location.');
      return null;
    }

    const reviews: Review[] = data.result.reviews.map((review: GoogleReview) => ({
      authorName: review.author_name,
      authorUrl: review.author_url,
      profilePhotoUrl: review.profile_photo_url,
      rating: review.rating,
      relativeTime: review.relative_time_description,
      text: review.text,
      time: review.time * 1000
    }));

    const reviewsData: ReviewsData = {
      reviews,
      averageRating: data.result.rating || 0,
      totalReviews: data.result.user_ratings_total || reviews.length
    };

    console.log(`Successfully fetched ${reviews.length} reviews!`);
    console.log(`   Average Rating: ${reviewsData.averageRating.toFixed(1)} ⭐`);
    console.log(`   Total Reviews: ${reviewsData.totalReviews}`);

    return reviewsData;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return null;
  }
}

function generateReviewsFile(reviewsData: ReviewsData): string {
  const reviewsString = reviewsData.reviews.map((review, index) => {
    return `    {
      authorName: "${review.authorName.replace(/"/g, '\\"')}",
      ${review.authorUrl ? `authorUrl: "${review.authorUrl}",` : ''}
      ${review.profilePhotoUrl ? `profilePhotoUrl: "${review.profilePhotoUrl}",` : ''}
      rating: ${review.rating},
      relativeTime: "${review.relativeTime}",
      text: ${JSON.stringify(review.text)},
      time: ${review.time}
    }${index < reviewsData.reviews.length - 1 ? ',' : ''}`;
  }).join('\n');

  return `/**
 * Static Reviews Data
 * 
 * This file contains your curated reviews. You can manually edit this file
 * to select which reviews to display, or use the fetch script to update it.
 * 
 * To fetch fresh reviews from Google, run:
 * pnpm tsx scripts/fetch-reviews.ts
 * 
 * Last updated: ${new Date().toISOString()}
 */

import { Review, ReviewsData } from './actions';

export const reviewsData: ReviewsData = {
  reviews: [
${reviewsString}
  ],
  averageRating: ${reviewsData.averageRating},
  totalReviews: ${reviewsData.totalReviews}
};
`;
}

async function main() {
  const reviewsData = await fetchReviews();
  
  if (!reviewsData) {
    process.exit(1);
  }

  const filePath = join(process.cwd(), 'app/reviews/reviews-data.ts');
  const fileContent = generateReviewsFile(reviewsData);
  
  writeFileSync(filePath, fileContent, 'utf-8');
  
  console.log(`\n Reviews saved to: ${filePath}`);
}

main().catch(console.error);

