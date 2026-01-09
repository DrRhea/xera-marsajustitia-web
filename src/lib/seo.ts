import type { Metadata } from "next";

export const siteConfig = {
  name: "Marsajustitia Law Office",
  shortName: "Marsajustitia",
  description:
    "Kantor Hukum Marsa Justitia - Layanan hukum profesional di Padang, Sumatera Barat. Konsultasi hukum, litigasi, non-litigasi, pidana, perdata, dan berbagai layanan hukum lainnya. Terdaftar di Kemenkumham RI sejak 2016.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://xera-marsajustitia-web.vercel.app",
  ogImage: "/og-image.jpg", // Using JPEG for better compression and WhatsApp compatibility
  contact: {
    phone: "0811660904",
    email: "marsajustitia75@gmail.com",
    address: "Jl. Khatib Sulaiman No.66 Kecamatan Padang Utara Kota Padang Provinsi Sumatera Barat",
  },
  registration: {
    number: "AHU-0072982.AH.0107 Tahun 2016",
    institution: "Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia",
  },
  keywords: [
    "kantor hukum",
    "pengacara padang",
    "advokat sumatera barat",
    "konsultasi hukum",
    "litigasi",
    "non-litigasi",
    "hukum pidana",
    "hukum perdata",
    "bantuan hukum",
    "marsa justitia",
    "law office padang",
    "pengacara profesional",
    "kantor hukum padang",
    "advokat padang",
    "pengacara sumatera barat",
    "konsultasi hukum padang",
    "pendampingan hukum",
    "penyelesaian sengketa",
    "praperadilan",
    "hukum pidana umum",
    "hukum pidana khusus",
    "sengketa tanah",
    "hutang piutang",
    "pembagian harta warisan",
    "perceraian",
    "gono-gini",
    "PTUN",
  ],
};

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return process.env.NEXT_PUBLIC_SITE_URL || "https://xera-marsajustitia-web.vercel.app";
};

export const seoMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Kantor Hukum Profesional di Padang`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(getBaseUrl()),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Kantor Hukum Profesional di Padang`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage, // Next.js akan otomatis convert ke absolute URL menggunakan metadataBase
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Logo`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Kantor Hukum Profesional di Padang`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "contact:phone_number": siteConfig.contact.phone,
    "contact:email": siteConfig.contact.email,
    "contact:street_address": siteConfig.contact.address,
  },
};

