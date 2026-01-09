"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Scale } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background dengan gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f3a] via-[#1a1f3a] to-slate-900" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1 pt-0">
              <Link href="/" className="flex items-center mb-1 mt-0">
                <div className="relative w-40 h-40">
                  <Image
                    src="/logo/marsajustitialogo.png"
                    alt="Marsajustitia Law Office Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                {siteConfig.description}
              </p>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <Scale className="w-4 h-4" />
                <span>{siteConfig.registration.number}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-serif text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Our Service", href: "/service" },
                  { name: "Our Lawyers", href: "/lawyers" },
                  { name: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-yellow-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-serif text-lg mb-6">Kontak</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm leading-relaxed">
                    {siteConfig.contact.address}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-white/70 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-white/70 hover:text-yellow-400 transition-colors text-sm break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Registration Info */}
            <div>
              <h3 className="text-white font-serif text-lg mb-6">Registrasi</h3>
              <div className="space-y-3">
                <p className="text-white/70 text-sm leading-relaxed">
                  {siteConfig.registration.institution}
                </p>
                <p className="text-white/70 text-sm font-medium">
                  {siteConfig.registration.number}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-12" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-white/60 text-sm text-center md:text-right">
              Terdaftar di {siteConfig.registration.institution}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

