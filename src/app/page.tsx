"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, Gavel, Handshake } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useEffect, useRef } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);
  const scale = useTransform(scrollY, [0, 800], [1.1, 1]);

  return (
    <>
      <section className="relative min-h-[110vh] w-full overflow-hidden flex items-center justify-center rounded-b-[4rem] md:rounded-b-[5rem] lg:rounded-b-[7rem] bg-[#1a1f3a]">
        {/* Background Image dengan Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, scale }}
        >
        <Image
            src="/hero-bg.webp"
            alt="Hero Background"
            fill
            className="object-cover"
          priority
            quality={90}
            sizes="100vw"
          />
          {/* Overlay Biru Dongker */}
          <div className="absolute inset-0 bg-[#1a1f3a]/70" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-tight">
              <span className="block">Your Trusted Partner</span>
              <span className="block">in Seeking Justice.</span>
          </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              <span className="block">Registered with the Ministry of Law and Human Rights of Indonesia</span>
              <span className="block">providing professional legal services with integrity and justice.</span>
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-base rounded-xl border-2 border-yellow-400 hover:border-yellow-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>Contact Us</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 md:mb-24"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1f3a] mb-4">
                Visi & Misi
              </h2>
              <div className="w-24 h-1 bg-[#1a1f3a] mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Visi - Left Side dengan accent */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Accent bar di kiri */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1a1f3a] rounded-full" />
                
                <div className="pl-8 md:pl-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#1a1f3a]/20 rounded-xl">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-[#1a1f3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif text-[#1a1f3a]">
                      Visi
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                    Menjadi kantor hukum terkemuka, strategis, unggul, dan berdaya saing global sebagai mitra kerja yang memberikan solusi terbaik dan terpercaya dengan menjunjung tinggi nilai-nilai keadilan, profesional dan berintegritas.
                  </p>
                </div>
              </motion.div>

              {/* Misi - Right Side dengan accent */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                {/* Accent bar di kanan */}
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#1a1f3a] rounded-full" />
                
                <div className="pr-8 md:pr-12">
                  <div className="flex items-center gap-4 mb-6 justify-end">
                    <h3 className="text-3xl md:text-4xl font-serif text-[#1a1f3a]">
                      Misi
                    </h3>
                    <div className="p-3 bg-[#1a1f3a]/20 rounded-xl">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-[#1a1f3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-right">
                    Memberikan layanan hukum berkualitas tinggi dan terpercaya bersama tim yang mempunyai sumber daya manusia yang berkualitas, berpengalaman, profesional, berintegritas dan memiliki inovasi tinggi dengan mengutamakan kepuasan klien serta menjunjung nilai-nilai keadilan dalam setiap solusi hukum, menjunjung etika profesi, memanfaatkan teknologi secara optimal, dan membangun kepercayaan klien secara berkelanjutan.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative w-full overflow-hidden bg-[#1a1f3a]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/about-us-bg.webp"
            alt="About Us Background"
            fill
            className="object-cover"
            quality={90}
            sizes="100vw"
          />
          {/* Overlay Navy */}
          <div className="absolute inset-0 bg-[#1a1f3a]/70" />
        </div>
        
        <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 md:mb-24"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                Tentang Kami
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto" />
            </motion.div>

            {/* Content Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                  Kantor Hukum Marsa Justitia berdiri dari kepedulian terhadap masyarakat kurang mampu yang menghadapi berbagai kasus, bahkan kasus kriminalisasi hukum akibat kekurang pahaman dan pengetahuan yang memadai tentang hukum.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                  Sebagai respons atas kondisi tersebut, pada tahun 2012 didirikan Lembaga Bantuan Hukum (LBH) dan Advokasi Marsa Justitia dengan tujuan memberikan advokasi dan pendampingan kasus-kasus dan perkara hukum bagi masyarakat pencari keadilan.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                  Berdasarkan perkembangan dan meningkatnya kepercayaan masyarakat, pada tahun 2016 Lembaga Bantuan Hukum dan Advokasi Marsa Justitia secara sah dan resmi terdaftar di Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia dengan Nomor AHU-0072982. AH.0107 Tahun 2016.
                </p>
              </div>

              {/* Read More Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-base rounded-xl border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300"
                >
                  <span>Baca Selengkapnya</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl hidden lg:block" />
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-screen gap-0">
          {/* Left: Image - Solid Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-100 overflow-hidden hidden lg:block"
          >
            <div className="relative w-full h-full min-h-[100px] lg:min-h-screen">
            <Image
                src="/images/backgrounds/our-service-image.webp"
                alt="Our Service"
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay Navy */}
              <div className="absolute inset-0 bg-[#1a1f3a]/70" />
            </div>
          </motion.div>

          {/* Right: Our Service Content - Solid Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white py-8 md:py-12 lg:py-16 px-8 md:px-12 lg:px-16 flex flex-col justify-center"
          >
            <div className="w-full overflow-hidden">
              {/* Header */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1f3a] mb-4">
                  Layanan Kami
                </h2>
                <div className="w-24 h-1 bg-yellow-400 mb-6" />
                <p className="text-lg md:text-xl text-slate-600">
                  Layanan hukum profesional dan terpercaya untuk berbagai kebutuhan hukum Anda
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                {[
                  { name: "Konsultasi dan Nasihat Hukum", icon: Scale },
                  { name: "Litigasi dan Non-Litigasi", icon: Gavel },
                  { name: "Penyelesaian Sengketa", icon: Handshake },
                ].map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-yellow-400 transition-all duration-300"
                    >
                      <div className="p-3 bg-yellow-400/10 rounded-xl w-fit mb-4">
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                      </div>
                      <h3 className="text-base md:text-lg font-serif text-[#1a1f3a]">{service.name}</h3>
                    </motion.div>
                  );
                })}
              </div>

              {/* View All Button */}
              <Link
                href="/service"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#1a1f3a] hover:bg-[#1a1f3a]/90 text-white font-semibold text-sm md:text-base rounded-xl border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300"
              >
                <span>Lihat Semua Layanan</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lawyers Preview Section */}
      <section className="relative w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-screen gap-0">
          {/* Left: Our Lawyers Content - Solid Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1a1f3a] via-[#1a1f3a] to-slate-900 py-8 md:py-12 lg:py-16 px-8 md:px-12 lg:px-16 flex flex-col justify-center"
          >
            <div className="w-full overflow-hidden">
              {/* Header */}
              <div className="mb-8 md:mb-12 text-right">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                  Pengacara Kami
                </h2>
                <div className="w-24 h-1 bg-yellow-400 mb-6 ml-auto" />
                <p className="text-lg md:text-xl text-white/90">
                  Tim profesional yang berpengalaman dan berdedikasi untuk memberikan layanan hukum terbaik
                </p>
              </div>

              {/* Lawyers Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 justify-end">
                {[
                  { name: "Maru Saerejen", title: "S.H.", image: "/images/lawyers/maru_saerejen.jpeg" },
                  { name: "Dr. Stepanus Hok", title: "S.H., M.H.", image: "/images/lawyers/stepanus_hok.jpeg" },
                  { name: "Fadhil Fu'ad", title: "S.H., M.H.", image: "/images/lawyers/fadil_fuad.jpeg" },
                  { name: "Asnil Abdillah", title: "S.H.", image: "/images/lawyers/asnil_abdillah.jpeg" },
                ].map((lawyer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:border-yellow-400 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-yellow-400/30">
                        {lawyer.image ? (
                          <Image
                            src={lawyer.image}
                            alt={lawyer.name}
                            fill
                            className="object-cover object-top"
                            style={{ transform: 'scale(1.3)' }}
                            sizes="(max-width: 768px) 64px, 80px"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                            <span className="text-xl md:text-2xl font-serif text-white font-bold">
                              {lawyer.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-base md:text-lg font-serif text-white mb-1">
                        {lawyer.name} {lawyer.title && <span className="ml-2 font-normal text-white/80"> {lawyer.title}</span>}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View All Button */}
              <div className="text-right">
                <Link
                  href="/lawyers"
                  className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-sm md:text-base rounded-xl border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300"
                >
                  <span>Lihat Semua Pengacara</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: Image - Solid Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-100 overflow-hidden hidden lg:block"
          >
            <div className="relative w-full h-full min-h-[100px] lg:min-h-screen">
              <Image
                src="/images/backgrounds/our-lawyers-image.webp"
                alt="Our Lawyers"
                fill
                className="object-cover"
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay Navy */}
              <div className="absolute inset-0 bg-[#1a1f3a]/70" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <GalleryBentoGrid />

      {/* Contact Preview Section */}
      <section className="relative w-full py-12 md:py-20 overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 md:mb-24"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1f3a] mb-4">
                Hubungi Kami
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Kami siap membantu Anda dengan layanan hukum profesional dan terpercaya
              </p>
            </motion.div>

            {/* Contact Cards Preview */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-50 rounded-xl p-8 border border-slate-100"
              >
                <div className="p-4 bg-yellow-400/10 rounded-xl w-fit mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-[#1a1f3a] mb-2">Alamat</h3>
                <p className="text-slate-600">Jl. Khatib Sulaiman No.66, Padang Utara, Padang</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-50 rounded-xl p-8 border border-slate-100"
              >
                <div className="p-4 bg-yellow-400/10 rounded-xl w-fit mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-[#1a1f3a] mb-2">Telepon</h3>
                <a href="tel:+62811660904" className="text-slate-600 hover:text-yellow-400 transition-colors">
                  +62 811-6609-04
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-50 rounded-xl p-8 border border-slate-100"
              >
                <div className="p-4 bg-yellow-400/10 rounded-xl w-fit mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-[#1a1f3a] mb-2">Email</h3>
                <a href="mailto:marsajustitia75@gmail.com" className="text-slate-600 hover:text-yellow-400 transition-colors break-all">
                  marsajustitia75@gmail.com
                </a>
              </motion.div>
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1f3a] hover:bg-[#1a1f3a]/90 text-white font-semibold text-base rounded-xl border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300"
              >
                <span>Kunjungi Halaman Kontak</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

// Gallery Bento Grid Component
function GalleryBentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header
            if (headerRef.current) {
              headerRef.current.style.opacity = "1";
              headerRef.current.style.transform = "translateY(0)";
            }

            // Grid items are now visible by default (opacity-100 class)
            // Animation removed to ensure items are visible in production
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-20 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: 0,
            transform: "translateY(32px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1f3a] mb-4">
            Galeri
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Dokumentasi kegiatan dan suasana kantor hukum Marsa Justitia
          </p>
        </div>

        <div ref={gridRef} className="max-w-6xl mx-auto">
          {/* Mobile: Simple Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-white border border-slate-200 aspect-square opacity-100"
              >
                {item.header}
              </div>
            ))}
          </div>
          
          {/* Desktop: Bento Grid */}
          <div className="hidden md:block">
            <BentoGrid className="md:auto-rows-[20rem]">
              {galleryItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                  icon={item.icon}
                />
              ))}
            </BentoGrid>
          </div>
        </div>
    </div>
    </section>
  );
}

// Custom Image Component for Bento Grid
const GalleryImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={`relative overflow-hidden h-full ${className || ""}`}>
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover group-hover/bento:scale-105 transition-transform duration-500"
      quality={90}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
);

const galleryItems = [
  // Row 1: 2-1 layout
  {
    title: "",
    description: "",
    header: (
      <GalleryImage
        src="/images/gallery/mj1.webp"
        alt="Kantor Hukum Marsa Justitia"
        className="h-full"
      />
    ),
    className: "col-span-2 md:col-span-2",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <GalleryImage
        src="/images/gallery/mj4.webp"
        alt="Kantor Hukum Marsa Justitia"
        className="h-full"
      />
    ),
    className: "col-span-1 md:col-span-1",
    icon: null,
  },
  // Row 2: 1-1-1 layout
  {
    title: "",
    description: "",
    header: (
      <GalleryImage
        src="/images/gallery/mj3.webp"
        alt="Kantor Hukum Marsa Justitia"
        className="h-full"
      />
    ),
    className: "col-span-1 md:col-span-1",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <GalleryImage
        src="/images/gallery/ms1.webp"
        alt="Kantor Hukum Marsa Justitia"
        className="h-full"
      />
    ),
    className: "col-span-1 md:col-span-1",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <GalleryImage
        src="/images/gallery/mj2.webp"
        alt="Kantor Hukum Marsa Justitia"
        className="h-full"
      />
    ),
    className: "col-span-1 md:col-span-1",
    icon: null,
  },
  // Row 3: 1-2 layout
  {
    title: "",
    description: "",
    header: (
      <GalleryImage
        src="/images/gallery/ms2.webp"
        alt="Kantor Hukum Marsa Justitia"
        className="h-full"
      />
    ),
    className: "col-span-1 md:col-span-1",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <GalleryImage
        src="/images/gallery/ms3.webp"
        alt="Kantor Hukum Marsa Justitia"
        className="h-full"
      />
    ),
    className: "col-span-2 md:col-span-2",
    icon: null,
  },
];
