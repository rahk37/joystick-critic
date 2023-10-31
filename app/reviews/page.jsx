import Link from "next/link";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-5">
        <li className="max-w-sm bg-background-white-light rounded-lg shadow hover:shadow-xl">
          <Link
            href="/reviews/smash-bros-ultimate"
            className="text-font-color font-orbitron hover:underline"
          >
            <img
              src="/images/smash.jpg"
              className="mb-3 rounded-t-lg"
              alt="Super Smash Bros. Ultimate for the Nintendo Switch"
            />
            <h2 className="py-1 text-center font-orbitron font-semibold">
              Super Smash Bros. Ultimate
            </h2>
          </Link>
        </li>
        <li className="max-w-sm bg-background-white-light rounded-lg shadow hover:shadow-xl">
          <Link
            href="/reviews/super-mario-odyssey"
            className="text-font-color hover:underline"
          >
            <img
              src="/images/mario odyssey.jpg"
              className="mb-3 rounded-t-lg"
              alt="Super Smash Bros. Ultimate for the Nintendo Switch"
            />
            <h2 className="py-1 text-center font-orbitron font-semibold">
              Super Mario Odyssey
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
