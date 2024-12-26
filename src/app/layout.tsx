import type { Metadata } from "next";

import { Roboto_Mono } from "next/font/google";

import "./globals.css";

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
        <div className="min-h-screen max-w-screen bg-gradient-to-tr from-indigo-900 to-purple-900">
          {children}
        </div>
      </body>
    </html>
  );
}
