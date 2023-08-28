"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";

const components = {
  block: {
    // Ex. 1: customizing common block types
    h3: ({ children }: any) => <h3 className="text-2xl">{children}</h3>,
    h4: ({ children }: any) => (
      <h3 className="text-xl text-foreground font-bold">{children}</h3>
    ),
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

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <main className="prose prose-lg">
      <h1 className="font-bold text-foreground mb-5 text-3xl">{post.title}</h1>
      {post?.body ? (
        <PortableText value={post.body} components={components} />
      ) : null}
    </main>
  );
}
