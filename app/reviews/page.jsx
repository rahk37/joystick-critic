import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-5">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="max-w-sm bg-background-white-light rounded-lg shadow hover:shadow-xl"
          >
            <Link
              href={`/reviews/${review.slug}`}
              className="text-font-color font-orbitron hover:underline"
            >
              <img
                src={review.image}
                className="mb-3 rounded-t-lg"
                alt={`${review.title} for the Nintendo Switch`}
              />
              <h2 className="py-1 text-center font-orbitron font-semibold">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
