import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";
import Heading from "@/components/Heading";

export default async function SmashBrosUltimatePage() {
  const text = await readFile(
    "./content/reviews/smash-bros-ultimate.md",
    "utf8"
  );

  const {
    content,
    data: { title, date, image },
  } = matter(text);

  const html = marked(text, { headerIds: false, mangle: false });

  return (
    <>
      <Heading>{title}</Heading>
      <p className="pb-2 italic">{date}</p>
      <img
        src={image}
        className="mb-3 rounded max-w-screen-sm"
        alt="Super Smash Bros. Ultimate for the Nintendo Switch"
      />
      <article
        className="max-w-screen-sm prose prose-text-font-color"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
