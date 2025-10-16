import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BalanceProvider } from "@/context/BalContext";
import { SolanaProvider } from "@/lib/solana/wallet";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Merkle Labs | Solana Program Integration",
  description: "Stake tokens with a clean UX built on Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <SolanaProvider>
          <BalanceProvider>
            {children}
          </BalanceProvider>
        </SolanaProvider>
      </body>
    </html>
  );
}
