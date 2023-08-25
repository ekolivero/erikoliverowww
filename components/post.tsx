"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";

const components = {
  block: {
    // Ex. 1: customizing common block types
    h2: ({ children }: any) => (
      <h2 className="text-2xl text-red">{children}</h2>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
};

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <main className="prose prose-lg">
      <h1 className="font-bold text-foreground mb-5 text-lg">{post.title}</h1>
      {post?.body ? (
        <PortableText value={post.body} components={components} />
      ) : null}
    </main>
  );
}
