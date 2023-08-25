import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CaretSortIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Select a team"
          className={cn("w-[200px] justify-between")}
        >
          <Avatar className="mr-2 h-6 w-5">
            <AvatarImage src={`/profile_pic.png`} alt="Erik Olivero" />
            <AvatarFallback>EO</AvatarFallback>
          </Avatar>
          Erik Olivero
          <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">ekolivero</p>
            <p className="text-xs leading-none text-muted-foreground">
              ekolivero@pm.me
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/">
            <DropdownMenuItem className="md:hidden">
              About
              <DropdownMenuShortcut>Visit</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/blog">
            <DropdownMenuItem className="md:hidden">
              Blog
              <DropdownMenuShortcut>Visit</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/videos">
            <DropdownMenuItem className="md:hidden">
              Videos
              <DropdownMenuShortcut>Visit</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/contact">
            <DropdownMenuItem className="md:hidden">
              Contact Me
              <DropdownMenuShortcut>Visit</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator className="md:hidden" />
          <a
            href="https://github.com/ekolivero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownMenuItem>
              Github
              <DropdownMenuShortcut>Visit</DropdownMenuShortcut>
            </DropdownMenuItem>
          </a>
          <a
            href="https://www.linkedin.com/in/erikolivero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownMenuItem>
              Linkedin
              <DropdownMenuShortcut>Visit</DropdownMenuShortcut>
            </DropdownMenuItem>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <DropdownMenuItem>
              Curriculum
              <DropdownMenuShortcut>Download</DropdownMenuShortcut>
            </DropdownMenuItem>
          </a>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
