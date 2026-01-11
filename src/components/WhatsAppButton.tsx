"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
  // Format nomor: +62811660904 (hapus 0 di depan, tambah +62)
  const whatsappNumber = "62811660904";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce hover:animate-none"
      aria-label="Chat dengan kami via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      <span className="sr-only">WhatsApp</span>
    </Link>
  );
}

