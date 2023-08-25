import NavBar from "@/components/nav-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <NavBar />
      <div className="container max-w-xl mt-12 mx-auto">{children}</div>
    </main>
  );
}
