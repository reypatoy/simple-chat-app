
export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="h-20 w-full bg-blue-200 flex items-center">
          <h1 className="text-2xl font-serif font-semibold pl-10">APP NAME</h1>
        </div>
        <main className="flex h-[calc(100vh-80px)] w-full items-center">
            {children}
        </main>
    </>
  );
}
