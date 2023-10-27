import Link from "next/link";

export default function ReviewsPage() {
  return (
    <>
      <h1 className="font-bold text-2xl pb-3 text-font-color-dark">
        Reviews
      </h1>
      <ul className="flex gap-2">
        <li>
          <Link
            href="/reviews/smash-bros-ultimate"
            className="text-font-color hover:underline"
          >
            Super Smash Bros. Ultimate
          </Link>
        </li>
        <li>
          <Link
            href="/reviews/super-mario-odyssey"
            className="text-font-color hover:underline"
          >
            Super Mario Odyssey
          </Link>
        </li>
      </ul>
    </>
  );
}
