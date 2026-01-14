"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Format nomor: +62811660904 (hapus 0 di depan, tambah +62)
  const whatsappNumber = "62811660904";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  if (!mounted) {
    return null;
  }

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#1a1f3a] hover:bg-[#15192e] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Chat dengan kami via WhatsApp"
    >
      <div className="relative w-6 h-6 md:w-7 md:h-7">
        <Image
          src="/icons/whatsapp-icon.svg"
          alt="WhatsApp"
          fill
          className="object-contain brightness-0 invert"
        />
      </div>
      <span className="sr-only">WhatsApp</span>
    </Link>
  );
}

