import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome | Visa Automation Agent",
  description: "Your personal visa journey starts here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
