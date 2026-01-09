import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { seoMetadata, siteConfig } from "@/lib/seo";

const googleSans = Inter({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...seoMetadata,
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo/marsajustitialogo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/logo/marsajustitialogo.png" />
        
        {/* Open Graph untuk Social Media - Simple & Direct */}
        <meta property="og:image" content={`${siteConfig.url}${siteConfig.ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        
        {/* Twitter Card */}
        <meta name="twitter:image" content={`${siteConfig.url}${siteConfig.ogImage}`} />
        
        {/* Fonts */}
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
