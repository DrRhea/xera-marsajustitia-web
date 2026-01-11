"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function ContactPage() {
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
            Hubungi Kami
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Kami siap membantu Anda dengan layanan hukum profesional dan terpercaya
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 mb-12 md:mb-20">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 md:space-y-8 w-full min-w-0"
            >
              {/* Alamat */}
              <div className="bg-white rounded-4xl p-6 md:p-8 lg:p-10 border-2 border-slate-100 w-full overflow-hidden">
                <div className="flex items-start gap-4 md:gap-6 w-full">
                  <div className="p-3 md:p-4 bg-yellow-400/10 rounded-xl md:rounded-2xl flex-shrink-0">
                    <Building2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-serif text-[#1a1f3a] mb-3 md:mb-4 break-words">
                      Alamat Kantor
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed mb-2 md:mb-3 break-words">
                      Jl. Khatib Sulaiman No.66<br />
                      Kecamatan Padang Utara<br />
                      Kota Padang<br />
                      Provinsi Sumatera Barat
                    </p>
                    <p className="text-xs md:text-sm lg:text-base text-slate-500 leading-relaxed break-words">
                      (Kurang lebih 300-700 meter dari kantor OJK, Pengadilan Negeri Padang dan BPK Sumbar)
                    </p>
                  </div>
                </div>
              </div>

              {/* Nomor Kontak */}
              <div className="bg-white rounded-4xl p-6 md:p-8 lg:p-10 border-2 border-slate-100 w-full overflow-hidden">
                <div className="flex items-start gap-4 md:gap-6 w-full">
                  <div className="p-3 md:p-4 bg-yellow-400/10 rounded-xl md:rounded-2xl flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-serif text-[#1a1f3a] mb-3 md:mb-4 break-words">
                      Nomor Kontak
                    </h3>
                    <a
                      href="tel:+62811660904"
                      className="text-base md:text-lg lg:text-xl text-[#1a1f3a] hover:text-yellow-400 transition-colors font-medium break-all block"
                    >
                      +62 811-6609-04
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-4xl p-6 md:p-8 lg:p-10 border-2 border-slate-100 w-full overflow-hidden">
                <div className="flex items-start gap-4 md:gap-6 w-full">
                  <div className="p-3 md:p-4 bg-yellow-400/10 rounded-xl md:rounded-2xl flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-serif text-[#1a1f3a] mb-3 md:mb-4 break-words">
                      Email
                    </h3>
                    <a
                      href="mailto:marsajustitia75@gmail.com"
                      className="text-sm md:text-base lg:text-lg text-[#1a1f3a] hover:text-yellow-400 transition-colors font-medium break-all block"
                    >
                      marsajustitia75@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-4xl p-6 md:p-8 lg:p-10 border-2 border-slate-100 flex flex-col w-full overflow-hidden"
            >
              <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8 w-full">
                <div className="p-3 md:p-4 bg-yellow-400/10 rounded-xl md:rounded-2xl flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-yellow-400" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-serif text-[#1a1f3a] break-words min-w-0">
                  Lokasi Kantor
                </h3>
              </div>
              <div className="flex-1 aspect-video bg-slate-200 rounded-xl md:rounded-2xl overflow-hidden min-h-[250px] md:min-h-[300px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3156!2d100.3614!3d-0.9492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNTYnNTcuMSJTIDEwMMKwMjEnNDEuMSJF!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <p className="text-xs md:text-sm lg:text-base text-slate-500 mt-4 md:mt-6 text-center break-words w-full">
                Jl. Khatib Sulaiman No.66, Padang Utara, Padang, Sumatera Barat
              </p>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#1a1f3a] to-slate-900 rounded-4xl p-8 md:p-12 lg:p-16 text-center text-white w-full overflow-hidden"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif mb-4 md:mb-6 break-words">
              Siap Membantu Anda
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2 break-words">
              Tim profesional kami siap memberikan konsultasi dan layanan hukum terbaik untuk kebutuhan Anda
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
