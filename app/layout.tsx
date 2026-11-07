import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victory Ayobami Ojo | Product Manager",
  description:
    "Product Manager based in Lagos. Customer insight, product strategy, and digital banking.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
