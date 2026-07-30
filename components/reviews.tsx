'use client'

import Image from 'next/image';
import { useRef } from 'react';
import { reviewsData } from '@/lib/reviews-data';
import type { ReviewsData } from '@/lib/reviews-types';

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=18e49b020ebfc0ba&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1RZIDQ7oe5OFyiltHGCBto0jtQeXBvAw3cQx2eA16eTyWApE5y613dobLdTydp7w_WJ11qGe8BzUSOXAEMNiIvR-Q2e&q=Ot%C5%8Dto+Reviews&sa=X&ved=2ahUKEwi8leCW7uuRAxXPw_ACHfIEOlsQ0bkNegQIMhAD&cshid=1767322725919210&biw=1512&bih=861&dpr=2";

const MAX_REVIEWS = 6;

export default function Reviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const data: ReviewsData = reviewsData;
  const reviews = data?.reviews.slice(0, MAX_REVIEWS) ?? [];

  function getCardElements(scroller: HTMLDivElement) {
    return Array.from(scroller.querySelectorAll<HTMLElement>('[data-review-card]'));
  }

  function getActiveCardIndex(scroller: HTMLDivElement, cards: HTMLElement[]) {
    const scrollLeft = scroller.scrollLeft;
    let activeIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        activeIndex = index;
      }
    });

    return activeIndex;
  }

  function scrollReviews(direction: 1 | -1) {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = getCardElements(scroller);
    if (cards.length === 0) return;

    const currentIndex = getActiveCardIndex(scroller, cards);
    const nextIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + direction));
    const target = cards[nextIndex];

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    scroller.scrollTo({
      left: target.offsetLeft,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-navy' : 'text-navy/15'} aria-hidden="true">
        ★
      </span>
    ));
  };

  if (!data || reviews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="font-lexend text-lg text-navy/70 mb-4">
          No reviews available at this time.
        </p>
        <p className="font-lexend text-sm text-navy/50">
          Run <code className="bg-sky-soft px-2 py-1 rounded">pnpm tsx scripts/fetch-reviews.ts</code> to fetch reviews.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      {/* Header: copy left, arrows right */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <span className="font-lexend text-xs md:text-sm tracking-[0.25em] uppercase text-navy/50">
            お客様の声 — Reviews
          </span>
          <h2 className="mt-3 font-league font-bold text-navy text-3xl md:text-4xl lg:text-5xl">
            What Our Guests Are Saying
          </h2>
          <p className="mt-4 max-w-xl font-lexend font-light text-navy/70 text-sm md:text-base leading-relaxed">
            Rated {data.averageRating.toFixed(1)} stars across {data.totalReviews} Google
            reviews — here&rsquo;s what people are saying.{' '}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy underline underline-offset-4 decoration-navy/30 hover:decoration-navy transition-colors whitespace-nowrap"
            >
              See all on Google
            </a>
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => scrollReviews(-1)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-navy/25 text-navy hover:bg-navy hover:text-white transition-colors"
            aria-label="Previous review"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollReviews(1)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-navy text-white hover:bg-navy-light transition-colors"
            aria-label="Next review"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Card carousel */}
      <div
        ref={scrollerRef}
        className="mt-10 md:mt-12 flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 max-sm:px-2 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <div
            key={`${review.authorName}-${review.time}`}
            data-review-card
            className="snap-start shrink-0 w-full sm:w-90 lg:w-96 bg-white border border-navy/10 rounded-2xl p-6 sm:p-7 flex flex-col shadow-[0_10px_30px_-18px_rgba(18,18,18,0.25)]"
          >
            {/* Reviewer */}
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                {review.profilePhotoUrl ? (
                  <Image
                    src={review.profilePhotoUrl}
                    alt={review.authorName}
                    width={64}
                    height={64}
                    className="rounded-full object-cover w-16 h-16"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-sky flex items-center justify-center">
                    <span className="font-lexend font-medium text-navy text-xl">
                      {review.authorName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <span
                  className="absolute -top-1.5 -left-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white font-league font-bold text-xl leading-none"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-league font-semibold text-navy text-lg truncate">
                  {review.authorName}
                </h3>
                <p className="font-lexend text-xs text-navy/50">{review.relativeTime}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-navy/10" aria-hidden="true"></div>

            {/* Rating */}
            <div className="flex items-center gap-2" role="img" aria-label={`${review.rating} out of 5 stars`}>
              <div className="flex text-sm tracking-wide">{renderStars(review.rating)}</div>
              <span className="font-lexend text-xs text-navy/45">({review.rating}.0)</span>
            </div>

            {/* Quote */}
            <p className="mt-3 font-lexend font-light italic text-sm text-navy/75 leading-relaxed line-clamp-5">
              &ldquo;{review.text}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
