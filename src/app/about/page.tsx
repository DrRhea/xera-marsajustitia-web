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
                Kantor Hukum Marsa Justitia berdiri dari kepedulian terhadap masyarakat kurang mampu yang menghadapi berbagai kasus, bahkan kasus kriminalisasi hukum tanpa pemahaman dan perlindungan yang memadai. Sebagai respons atas kondisi tersebut, pada tahun 2012 didirikan Lembaga Bantuan Hukum (LBH) dan Advokasi Marsa Justitia dengan tujuan memberikan advokasi dan pendampingan kasus-kasus dan perkara hukum bagi masyarakat pencari keadilan.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-slate-700 leading-relaxed mb-6"
              >
                Lembaga Bantuan Hukum dan Advokasi berkembang pesat dan memperoleh kepercayaan luas dari masyarakat, terutama dalam menangani kasus-kasus kriminalisasi dan perkara hukum yang melibatkan warga yang kurang memahami aspek hukum. Seiring banyaknya warga yang dikriminalisasi, adanya warga yang melakukan perbuatan hukum, tetapi akibat kurang memahami aspek hukum, melalui pendampingan hukum yang profesional, berbagai perkara berhasil diselesaikan oleh LBH Marsa, baik melalui mekanisme praperadilan maupun pemeriksaan pokok perkara di Pengadilan Negeri Padang.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-slate-700 leading-relaxed mb-6"
              >
                Berdasarkan perkembangan dan meningkatnya kepercayaan masyarakat, pada tahun 2016 Lembaga Bantuan Hukum dan Advokasi Marsa Justitia secara sah dan resmi terdaftar di Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia dengan Nomor LBHA Marsa Justitia SK Menkum HAM RI Nomor AHU-0072982. AH.0107 Tahun 2016.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-lg text-slate-700 leading-relaxed"
              >
                Kepercayaan dari masyarakat luas hingga badan, perusahaan, dan individu dari kalangan menengah, bersama Lembaga Bantuan Hukum dan Advokasi Marsa Justitia mengembangkan dan meningkatkan menjadi Kantor Hukum Marsa Justitia Padang yang terdaftar di Kantor Kementerian Hukum dengan Nomor: LBHA Marsa Justitia SK Menkum HAM RI Nomor AHU-0072982. AH.0107 Tahun 2016.
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

