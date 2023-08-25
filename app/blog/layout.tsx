import NavBar from "@/components/nav-bar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full">
          <NavBar />
          <div className="container p-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
