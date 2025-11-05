import Header from "@/components/Header/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen bg-white dark:bg-gray-900">
          <Header></Header>
          {children}
        </div>
      </body>
    </html>
  );
}
