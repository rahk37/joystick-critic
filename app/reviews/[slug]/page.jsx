import Heading from "@/components/Heading";
import { getReview } from "@/lib/reviews";

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="pb-2 italic">{review.date}</p>
      <img
        src={review.image}
        className="mb-3 rounded max-w-screen-sm"
        alt="Super Smash Bros. Ultimate for the Nintendo Switch"
      />
      <article
        className="max-w-screen-sm prose prose-text-font-color"
        dangerouslySetInnerHTML={{ __html: review.body }}
      />
    </>
  );
}
