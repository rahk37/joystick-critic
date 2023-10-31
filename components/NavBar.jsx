import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link href="/" className="text-nintendo-red font-orbitron font-bold hover:underline hover:transition-all">
              Riley's Reviews
            </Link>
          </li>
          <li className="ml-auto">
            <Link href="/reviews" className="text-nintendo-red font-semibold hover:underline hover:transition-all">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-nintendo-red font-semibold hover:underline hover:transition-all">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
