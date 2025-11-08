import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat Interface",
  description: "A minimalist dark-mode chat interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
