"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28 max-w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20 lg:mb-24"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#1a1f3a] mb-4 md:mb-6 leading-tight">
            Tentang Kami
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Sejarah dan perjalanan Kantor Hukum Marsa Justitia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Latar Belakang Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1a1f3a] mb-6">
              Latar Belakang
            </h2>
            <div className="prose prose-lg max-w-none">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base md:text-lg text-slate-700 leading-relaxed mb-6"
              >
                Kantor Hukum Marsa Justitia berdiri dari kepedulian terhadap masyarakat kurang mampu yang menghadapi berbagai kasus, bahkan kasus kriminalisasi hukum akibat kekurang pahaman dan pengetahuan yang memadai tentang hukum. Sebagai respons atas kondisi tersebut, pada tahun 2012 didirikan Lembaga Bantuan Hukum (LBH) dan Advokasi Marsa Justitia dengan tujuan memberikan advokasi dan pendampingan kasus-kasus dan perkara hukum bagi masyarakat pencari keadilan.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-slate-700 leading-relaxed mb-6"
              >
                Lembaga Bantuan Hukum dan Advokasi Marsa Justitia berkembang pesat dan memperoleh kepercayaan luas dari masyarakat, terutama dalam penanganan kasus-kasus kriminalisasi dan perkara hukum yang melibatkan warga yang kurang memahami aspek hukum. Seiring banyaknya warga yang dikriminalisasi, adanya warga yang melakukan perbuatan hukum, tetapi akibat kurang memahami aspek hukum, melalui pendampingan hukum yang profesional, berbagai perkara berhasil diselesaikan oleh LBH Marsa Justitia, baik melalui mekanisme praperadilan maupun pemeriksaan pokok perkara di Pengadilan hingga kasasi.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-slate-700 leading-relaxed mb-6"
              >
                Berdasarkan perkembangan dan meningkatnya kepercayaan masyarakat, pada tahun 2016 Lembaga Bantuan Hukum dan Advokasi Marsa Justitia secara sah dan resmi terdaftar di Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia dengan Nomor AHU-0072982. AH.0107 Tahun 2016.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-lg text-slate-700 leading-relaxed"
              >
                Kepercayaan dari masyarakat luas hingga badan, perusahaan, dan individu dari kalangan menengah, bersama Lembaga Bantuan Hukum dan Advokasi Marsa Justitia mengembangkan dan meningkatkan menjadi Kantor Hukum Marsa Justitia Padang yang terdaftar di Kementerian Hukum dengan Nomor AHU-0002313-AH.01.18 tahun 2025, Akta No 10 tanggal 17 Desember 2025.
              </motion.p>
            </div>
          </motion.div>

          {/* Visi & Misi Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1a1f3a] mb-6">
              Visi & Misi
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Visi - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
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
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    Menjadi kantor hukum terkemuka, strategis, unggul, dan berdaya saing global sebagai mitra kerja yang memberikan solusi terbaik dan terpercaya dengan menjunjung tinggi nilai-nilai keadilan, profesional dan berintegritas.
                  </p>
                </div>
              </motion.div>

              {/* Misi - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
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
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed text-right">
                    Memberikan layanan hukum berkualitas tinggi dan terpercaya bersama tim yang mempunyai sumber daya manusia yang berkualitas, berpengalaman, profesional, berintegritas dan memiliki inovasi tinggi dengan mengutamakan kepuasan klien serta menjunjung nilai-nilai keadilan dalam setiap solusi hukum, menjunjung etika profesi, memanfaatkan teknologi secara optimal, dan membangun kepercayaan klien secara berkelanjutan.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

