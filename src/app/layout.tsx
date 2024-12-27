import type { Metadata } from "next";

import { Roboto_Mono } from "next/font/google";

import "./globals.css";
import Footer from "@/components/common/Footer";

const RobotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minesweeper | Algorithmic game",
  description: "A simple algorithmic game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${RobotoMono.variable} ${RobotoMono.variable}`}>
        <div className="min-h-screen max-w-screen bg-gradient-to-tr from-indigo-900 to-indigo-950 grid grid-rows-[1fr_50px] ">
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
