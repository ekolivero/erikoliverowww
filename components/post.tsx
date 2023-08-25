"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

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
    <main className="container mx-auto prose prose-lg p-4">
      <h1>{post.title}</h1>
      {post?.mainImage ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post?.mainImage?.alt}
        />
      ) : null}
      {post?.body ? (
        <PortableText value={post.body} components={components} />
      ) : null}
    </main>
  );
}
