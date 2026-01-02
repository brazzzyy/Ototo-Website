'use client'

import Image from 'next/image';
import { reviewsData } from '../reviews/reviews-data';
import type { ReviewsData } from '../reviews/actions';

export default function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
        aria-label={`${rating} out of 5 stars`}
      >
        ★
      </span>
    ));
  };

  // Use static reviews data (no API calls needed!)
  const data: ReviewsData = reviewsData;

  if (!data || data.reviews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="font-lexend text-lg text-gray-600 mb-4">
          No reviews available at this time.
        </p>
        <p className="font-lexend text-sm text-gray-500">
          Run <code className="bg-gray-100 px-2 py-1 rounded">pnpm tsx scripts/fetch-reviews.ts</code> to fetch reviews.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Overall Rating Summary */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-5xl font-league font-semibold">
            {data.averageRating.toFixed(1)}
          </div>
          <div className="flex flex-col">
            <div className="flex text-2xl">
              {renderStars(Math.round(data.averageRating))}
            </div>
            <p className="font-lexend text-sm text-gray-600">
              Based on {data.totalReviews} {data.totalReviews === 1 ? 'review' : 'reviews'}
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
        {data.reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Review Header */}
            <div className="flex items-start gap-4 mb-4">
              {review.profilePhotoUrl ? (
                <Image
                  src={review.profilePhotoUrl}
                  alt={review.authorName}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-lexend font-medium text-gray-600">
                    {review.authorName.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-lexend font-semibold text-lg mb-1">
                  {review.authorName}
                </h3>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-sm">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="font-lexend text-xs text-gray-500">
                  {review.relativeTime}
                </p>
              </div>
            </div>

            {/* Review Text */}
            <p className="font-lexend font-light text-sm text-gray-700 leading-relaxed line-clamp-4">
              {review.text}
            </p>

            {/* Read More Link (if review is on Google) */}
            {review.authorUrl && (
              <a
                href={review.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-lexend text-xs text-gray-600 hover:text-black transition-colors"
              >
                View on Google →
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Google Reviews Link */}
      <div className="flex justify-center mt-12">
        <a
          href={`https://www.google.com/search?sca_esv=18e49b020ebfc0ba&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1RZIDQ7oe5OFyiltHGCBto0jtQeXBvAw3cQx2eA16eTyWApE5y613dobLdTydp7w_WJ11qGe8BzUSOXAEMNiIvR-Q2e&q=Ot%C5%8Dto+Reviews&sa=X&ved=2ahUKEwi8leCW7uuRAxXPw_ACHfIEOlsQ0bkNegQIMhAD&cshid=1767322725919210&biw=1512&bih=861&dpr=2`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-lexend font-medium text-sm text-gray-700 hover:text-black transition-colors underline"
        >
          See all reviews on Google
        </a>
      </div>
    </div>
  );
}
