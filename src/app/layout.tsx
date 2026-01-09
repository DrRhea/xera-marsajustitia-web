import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { seoMetadata } from "@/lib/seo";

const googleSans = Inter({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = seoMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${googleSans.variable} antialiased`}
        style={{ fontFamily: "'Inter', 'Google Sans', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
