import NavBar from "@/components/nav-bar";
import { components } from "@/sanity/lib/components";
import { authorQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { SanityDocument } from "next-sanity";

export const metadata: Metadata = {
  title: "Erik Olivero",
  description: "Erik Olivero website, blog and portfolio",
};

export default async function Home() {
  const author = await sanityFetch<SanityDocument>({ query: authorQuery });
  return (
    <main className="w-full">
      <NavBar />
      <div className="max-w-xl container aling-center text-left mt-12">
        {author.bio ? (
          <PortableText value={author.bio} components={components} />
        ) : null}
      </div>
    </main>
  );
}
