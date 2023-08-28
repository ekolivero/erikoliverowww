import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import { format } from "timeago.js";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  return (
    <main className="w-full">
      <div className="max-w-xl mt-10 mx-auto font-bold text-foreground text-2xl mb-8">
        My blog posts
      </div>

      {posts.map((post) => (
        <Link key={post._id} href={"/blog/" + post.slug.current}>
          <h2 className="text-primary">{post.title} </h2>
          <p className="text-muted-foreground">
            Last update: <span> </span>
            {format(post._updatedAt, "en_US")}
          </p>
        </Link>
      ))}
    </main>
  );
}
