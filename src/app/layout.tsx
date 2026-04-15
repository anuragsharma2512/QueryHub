import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QueryHub | Ask smarter. Build answers together.",
  description:
    "QueryHub is a modern Q&A platform for asking sharper questions, sharing answers, and building reputation through high-signal discussion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-[#040816] text-white antialiased")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
