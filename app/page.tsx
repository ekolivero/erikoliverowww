import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Erik Olivero",
  description: "Erik Olivero website, portfolio, and blog",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex-col md:flex w-full">
        <div className="border-b flex w-full">
          <div className="flex flex-1 h-16 items-center px-4">
            <MainNav className="mx-6 hidden md:flex" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
