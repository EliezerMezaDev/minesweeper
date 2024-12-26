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
      <body
        className={`${RobotoMono.variable} ${RobotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
