import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";

export default function NavBar() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex-col md:flex w-full">
        <div className="border-b flex w-full">
          <div className="flex flex-1 h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
