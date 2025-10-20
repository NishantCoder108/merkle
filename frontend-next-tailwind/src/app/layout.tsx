import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  MuseoModerno,
  Roboto,
  Roboto_Mono,
} from "next/font/google";
import "./globals.css";

const geistSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const museoModerno = MuseoModerno({
  subsets: ["latin"],
  weight: ["400"], // or other weights if needed
  variable: "--font-museo-moderno",
  display: "swap",
});
export const metadata: Metadata = {
  title: "XCombinator",
  description: "X-combinator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${museoModerno.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
