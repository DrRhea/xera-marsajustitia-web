"use client";

import { motion } from "framer-motion";
import { Scale, Award, Users } from "lucide-react";

const lawyers = [
  { name: "Maru Saerejen", title: "S. H." },
  { name: "Dr. Stepanus Hok", title: "S.H., M.H." },
  { name: "Fadhil Fu'ad", title: "S.H., M.H." },
  { name: "Asnil Abdillah", title: "S.H." },
  { name: "Raihan Edimara", title: "S. H." },
  { name: "Annisa Yunieva Rahmayanti Saerejen", title: "Paralegal" },
  { name: "Anggun Sasmita", title: "S.H." },
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
                  {/* Avatar dengan gradient elegant */}
                  <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a1f3a] via-[#1a1f3a] to-slate-700 group-hover:from-yellow-400 group-hover:via-yellow-400/80 group-hover:to-yellow-500 transition-all duration-300 flex items-center justify-center shadow-lg">
                      <span className="text-3xl md:text-4xl font-serif text-white font-bold">
                        {lawyer.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-300" />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-serif text-[#1a1f3a] mb-3 group-hover:text-[#1a1f3a] transition-colors">
                    {lawyer.name}
                  </h3>
                  
                  {/* Title dengan badge style */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-200 group-hover:bg-yellow-400/10 group-hover:border-yellow-400/30 transition-all duration-300">
                    {lawyer.title === "Paralegal" ? (
                      <Award className="w-4 h-4 text-yellow-400" />
                    ) : (
                      <Scale className="w-4 h-4 text-[#1a1f3a]" />
                    )}
                    <p className="text-sm md:text-base text-slate-700 font-semibold">
                      {lawyer.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
