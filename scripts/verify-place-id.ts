/**
 * Script to verify your Google Place ID
 * 
 * Usage: pnpm tsx scripts/verify-place-id.ts
 */

import { config } from 'dotenv';
import { join } from 'path';
import { existsSync } from 'fs';

// Load environment variables from .env.local or .env
const envLocalPath = join(process.cwd(), '.env.local');
const envPath = join(process.cwd(), '.env');

let envFileUsed = '';
if (existsSync(envLocalPath)) {
  config({ path: envLocalPath });
  envFileUsed = '.env.local';
} else if (existsSync(envPath)) {
  config({ path: envPath });
  envFileUsed = '.env';
} else {
  console.warn('Warning: No .env.local or .env file found');
}

async function verifyPlaceId(placeId: string) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const envFile = envFileUsed || '.env or .env.local';

  if (!apiKey) {
    console.error(`Error: GOOGLE_PLACES_API_KEY not found in ${envFile}`);
    console.log(`\n Please add your API key to your .env file first:`);
    console.log('   GOOGLE_PLACES_API_KEY=your_api_key_here\n');
    return;
  }

  console.log(`🔍 Verifying Place ID: ${placeId}\n`);

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,rating,user_ratings_total,reviews&key=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      console.log('✅ Place ID is valid!\n');
      console.log('📍 Business Details:');
      console.log(`   Name: ${data.result.name}`);
      console.log(`   Address: ${data.result.formatted_address || 'N/A'}`);
      console.log(`   Rating: ${data.result.rating || 'N/A'} ⭐`);
      console.log(`   Total Reviews: ${data.result.user_ratings_total || 0}`);
      console.log(`   Reviews Available: ${data.result.reviews?.length || 0}\n`);
      
      if (data.result.reviews && data.result.reviews.length > 0) {
        console.log('Great! Reviews are available for this location.\n');
      } else {
        console.log('Warning: No reviews found for this location.\n');
      }
    } else if (data.status === 'INVALID_REQUEST') {
      console.error('Invalid Place ID format');
      console.log('   Please check that your Place ID is correct.\n');
    } else if (data.status === 'REQUEST_DENIED') {
      console.error('API request denied');
      console.log('   This usually means:');
      console.log('   1. Your API key is incorrect');
      console.log('   2. Places API is not enabled');
      console.log('   3. API key restrictions are blocking the request');
      console.log('\n   Error message:', data.error_message || 'Unknown error\n');
    } else {
      console.error(`Error: ${data.status}`);
      if (data.error_message) {
        console.log(`   ${data.error_message}\n`);
      }
    }
  } catch (error) {
    console.error('Error verifying Place ID:', error);
  }
}

// Get Place ID from command line argument or environment variable
const placeId = process.argv[2] || process.env.GOOGLE_PLACE_ID;

if (!placeId) {
  console.error('Please provide a Place ID');
  console.log('   Usage: pnpm tsx scripts/verify-place-id.ts [PLACE_ID]');
  console.log('   Or set GOOGLE_PLACE_ID in .env.local\n');
  process.exit(1);
}

verifyPlaceId(placeId);

