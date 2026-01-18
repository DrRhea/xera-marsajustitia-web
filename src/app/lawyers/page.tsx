"use client";

import { motion } from "framer-motion";
import { Scale, Award, Users } from "lucide-react";
import Image from "next/image";

const lawyers = [
  { name: "Maru Saerejen", degree: "S.H.", role: null, image: "/images/lawyers/maru_saerejen.jpeg" },
  { name: "Dr. Stepanus Hok", degree: "S.H., M.H.", role: null, image: "/images/lawyers/stepanus_hok.jpeg" },
  { name: "Fadhil Fu'ad", degree: "S.H., M.H.", role: null, image: "/images/lawyers/fadil_fuad.jpeg" },
  { name: "Asnil Abdillah", degree: "S.H.", role: null, image: "/images/lawyers/asnil_abdillah.jpeg" },
  { name: "Raihan Edimara", degree: "S.H.", role: null, image: "/images/lawyers/raihan_edimara.png" },
  { name: "Annisa Yunieva Rahmayanti Saerejen", degree: null, role: "Paralegal", image: "/images/lawyers/annisa_yunieva_rahmayanti_saerejen.png" },
  { name: "Febrian Anggun Sasmita", degree: "S.H.", role: "Paralegal dan admin", image: "/images/lawyers/febrian_anggun_sasmita.jpeg" },
];

export default function LawyersPage() {
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
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 bg-yellow-400/10 rounded-xl">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#1a1f3a] mb-4 md:mb-6 leading-tight">
            Pengacara Kami
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Tim profesional yang berpengalaman dan berdedikasi untuk memberikan layanan hukum terbaik
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {lawyers.map((lawyer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-[4rem] md:rounded-[4rem] p-8 md:p-10 border-2 border-slate-100 hover:border-[#1a1f3a] transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-center">
                  {/* Avatar dengan foto atau inisial */}
                  <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-6">
                    {lawyer.image ? (
                      <>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300 shadow-lg">
                          <Image
                            src={lawyer.image}
                            alt={lawyer.name}
                            fill
                            className="object-cover object-top"
                            style={{ transform: 'scale(1.3)' }}
                            sizes="(max-width: 768px) 112px, 128px"
                          />
                        </div>
                        {/* Decorative ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300 pointer-events-none" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a1f3a] via-[#1a1f3a] to-slate-700 group-hover:from-yellow-400 group-hover:via-yellow-400/80 group-hover:to-yellow-500 transition-all duration-300 flex items-center justify-center shadow-lg">
                          <span className="text-3xl md:text-4xl font-serif text-white font-bold">
                            {lawyer.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                        {/* Decorative ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300" />
                      </>
                    )}
                  </div>
                  
                  {/* Name dengan gelar */}
                  <h3 className="text-xl md:text-2xl font-serif text-[#1a1f3a] mb-3 group-hover:text-[#1a1f3a] transition-colors">
                    {lawyer.name}
                    {lawyer.degree && <span className="ml-2 font-normal"> {lawyer.degree}</span>}
                  </h3>
                  
                  {/* Role badge (hanya jika ada role) */}
                  {lawyer.role && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-200 group-hover:bg-yellow-400/10 group-hover:border-yellow-400/30 transition-all duration-300">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <p className="text-sm md:text-base text-slate-700 font-semibold">
                        {lawyer.role}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
