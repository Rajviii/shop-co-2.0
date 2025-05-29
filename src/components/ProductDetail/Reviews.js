'use client';
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { fetchReviews } from "../../app/api/products/reviews";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews().then(setReviews);
  }, []);

  return (
    <div className="bg-gray-50 px-6 py-12 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-black">All Reviews</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </div>
  );
}