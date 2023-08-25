"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const routes = {
  "/": "About",
  "/blog": "Blog",
  "/videos": "Videos",
  "/contact": "Contact Me",
};

type Routes = "/" | "/blog" | "/videos" | "/contact";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname() as Routes;

  return (
    <>
      <nav
        className={cn(
          "flex-1 items-center justify-center space-x-8 lg:space-x-12 hidden md:flex",
          className
        )}
        {...props}
      >
        <Link
          href="/"
          className={`text-sm ${
            pathname !== "/" && "text-muted-foreground"
          } font-medium transition-colors hover:text-primary`}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={`text-sm ${
            pathname.includes("/blog") === false && "text-muted-foreground"
          } font-medium transition-colors hover:text-primary`}
        >
          Blog
        </Link>
        <Link
          href="/videos"
          className={`text-sm ${
            pathname !== "/videos" && "text-muted-foreground"
          } font-medium transition-colors hover:text-primary`}
        >
          Videos
        </Link>
        {/*  <Link
          href="/contact"
          className={`text-sm ${
            pathname !== "/contact" && "text-muted-foreground"
          } font-medium transition-colors hover:text-primary`}
        >
          Contact Me
        </Link> */}
      </nav>
      <nav
        className={cn(
          "flex-1 items-center justify-center space-x-8 md:hidden",
          className
        )}
        {...props}
      >
        <h2> {routes[pathname]} </h2>
      </nav>
    </>
  );
}
