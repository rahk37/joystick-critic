import Link from "next/link";

export default function ReviewsPage() {
  return (
    <>
      <h1>Reviews</h1>
      <ul>
        <li>
          <Link href="/reviews/smash-bros-ultimate">
            Super Smash Bros. Ultimate
          </Link>
        </li>
        <li>
          <Link href="/reviews/super-mario-odyssey">Super Mario Odyssey</Link>
        </li>
      </ul>
    </>
  );
}
