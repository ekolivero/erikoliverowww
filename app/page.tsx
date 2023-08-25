import NavBar from "@/components/nav-bar";
// import { components } from "@/sanity/lib/components";
import { authorQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { SanityDocument } from "next-sanity";

export const metadata: Metadata = {
  title: "Erik Olivero",
  description: "Erik Olivero website, blog and portfolio",
};

const components = {
  block: {
    // Ex. 1: customizing common block types
    h3: ({ children }: any) => <h3 className="text-2xl mb-6">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
    normal: ({ children }: any) => <p className="py-2">{children}</p>,
    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;
      return (
        <a
          className="text-muted-foreground"
          href={value.href}
          rel={rel}
          target={target}
        >
          {children}
        </a>
      );
    },
  },
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
