/**
 * Static Reviews Data
 * 
 * To fetch fresh reviews from Google, run:
 * pnpm tsx scripts/fetch-reviews.ts
 * 
 * Last updated: 2026-01-02T02:54:27.434Z
 */

import { Review, ReviewsData } from './actions';

export const reviewsData: ReviewsData = {
  reviews: [
    {
      authorName: "Z",
      authorUrl: "https://www.google.com/maps/contrib/100240407358415084437/reviews",
      profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjU855b96wMTUgMztfLR8TaWg7M47kUhxvR6wmB5s8FYPTOsFQs=s128-c0x00000000-cc-rp-mo-ba4",
      rating: 5,
      relativeTime: "2 months ago",
      text: "Awesome\n\nJust an absolutely AWESOME experience\n\nWill definitely be returning in the near future\n\nTried the deep fried chicken appetizer and it came with a lemon wedge beautiful touch as it paired with the spicy mayo dip excellently, chicken was nice and tender and the flavors worked well with eachother.\n\nGot the pork buns as well so glad I got 2 of them cause the way everything melded together was extraordinary the pickle the sauce the ever so soft bun with the melt in your mouth pork 😫 sooo good\n\nMy girlfriend got the spicy miso ramen\nI got the classic tonkotsu\n\nBoth were phenomenal\n\nThis place is a must try\nAnd a must return in my book\n\nBravo folks\n👏",
      time: 1761752865000
    },
    {
      authorName: "Ren Wen",
      authorUrl: "https://www.google.com/maps/contrib/112481028732657499094/reviews",
      profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVeD3yn23E0SdAC8K0amFnCTkOmRre3ZuFPBppBJBLjc2lyBwUM=s128-c0x00000000-cc-rp-mo-ba2",
      rating: 5,
      relativeTime: "2 months ago",
      text: "Deliciously rich flavors, love the Japanese thai fusion menu. Telling everyone I know to come here, ordered more of what we were eating to take home, the vibes are chill and there are tables to fit parties around 4, more if you sit at the bar or bench. Prices are very good, we ordered a lot of appetizers so that’s why I’m rating it $30-$50 per person. They also have vegan options so you can have ramen.",
      time: 1761702808000
    },
    {
      authorName: "Tiffany He",
      authorUrl: "https://www.google.com/maps/contrib/114039829975780533042/reviews",
      profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocJxc3uhophm9zJ59YZ0rnneS11oUD9PQssm4sDwZ7y8omOq4g=s128-c0x00000000-cc-rp-mo",
      rating: 4,
      relativeTime: "3 months ago",
      text: "First time eating here — I usually go to Bowl 91. The flavors were pretty good and everything tasted fresh. The only downside was the temperature of the food. Most dishes came out lukewarm, and the pork buns in particular had cold bao, which was a bit disappointing. I definitely enjoy food more when it’s served hot. Other than that, everything else was on point and worth trying.",
      time: 1757545174000
    },
    {
      authorName: "Tristan Heitkemper",
      authorUrl: "https://www.google.com/maps/contrib/111862517476413385820/reviews",
      profilePhotoUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUZHj2_nibdrnB3ZsGJ9xodHpUlAbc9KMfc52CBFob8VYrc_fxQ=s128-c0x00000000-cc-rp-mo-ba4",
      rating: 4,
      relativeTime: "5 months ago",
      text: "First off, I absolutely love the food here, everything is always amazing. I always get the Khao Soi with an egg or two, and usually an appetizer as well. But where they really come up short is their social media and hours. At this point, 50% of the time I’ve tried going here, they are closed with a sign on the door, and absolutely no information posted about it on their facebook page. I recently tried going this 4th of July weekend and again, closed with no indication anywhere online. Do not trust the hours posted online.",
      time: 1751830367000
    },
    {
      authorName: "Frida Hamad",
      authorUrl: "https://www.google.com/maps/contrib/112843756929535163798/reviews",
      profilePhotoUrl: "https://lh3.googleusercontent.com/a/ACg8ocKvxUMAp4qK9rji4XsAe06P8UoH1zo9ASo56AbA4ZmxNDPWiufN=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relativeTime: "a month ago",
      text: "I went with four of my friends, it was incredible! The food was perfect and the staff were kind and personable. Quiet atmosphere and plenty of vegan options.",
      time: 1762732572000
    }
  ],
  averageRating: 4.7,
  totalReviews: 148
};
