import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex flex-1 items-center justify-center space-x-8 lg:space-x-12",
        className
      )}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        About
      </Link>
      <Link
        href="/blog"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Blog
      </Link>
      <Link
        href="/videos"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Videos
      </Link>
      <Link
        href="/contact"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}
