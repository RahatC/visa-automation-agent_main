import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat Interface",
  description: "Minimalist conversational UI",
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
