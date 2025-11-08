import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat UI",
  description: "A minimalist conversational UI",
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
