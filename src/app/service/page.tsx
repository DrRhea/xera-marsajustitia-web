"use client";

import { motion } from "framer-motion";
import { Scale, FileText, Users, Briefcase, Gavel, Handshake, FileCheck, AlertCircle, Building2, Shield } from "lucide-react";

const services = [
  { 
    name: "Konsultasi dan Nasihat Hukum", 
    icon: Scale,
    description: "Memberikan konsultasi dan nasihat hukum profesional untuk berbagai permasalahan hukum"
  },
  { 
    name: "Litigasi dan Non-Litigasi", 
    icon: Gavel,
    description: "Layanan penyelesaian sengketa melalui jalur litigasi maupun non-litigasi"
  },
  { 
    name: "Penyusunan dan Peninjauan Kontrak", 
    icon: FileText,
    description: "Penyusunan dan peninjauan kontrak untuk memastikan kepentingan hukum Anda terlindungi"
  },
  { 
    name: "Penyelesaian Sengketa", 
    icon: Handshake,
    description: "Pendampingan dalam penyelesaian berbagai jenis sengketa hukum"
  },
  { 
    name: "Pidana Umum dan Pidana Khusus", 
    icon: Shield,
    description: "Pendampingan hukum dalam kasus pidana umum maupun pidana khusus"
  },
  { 
    name: "Perdata", 
    icon: Briefcase,
    description: "Penyelesaian sengketa tanah, hutang piutang, dan berbagai kasus perdata lainnya"
  },
  { 
    name: "Pembagian Harta Warisan", 
    icon: Building2,
    description: "Pendampingan dalam proses pembagian harta warisan sesuai hukum yang berlaku"
  },
  { 
    name: "Perceraian dan Pembagian Harta Gono-Gini", 
    icon: Users,
    description: "Layanan hukum untuk proses perceraian dan pembagian harta bersama"
  },
  { 
    name: "Pendampingan Penetapan", 
    icon: FileCheck,
    description: "Pendampingan dalam proses penetapan hukum dan administrasi"
  },
  { 
    name: "Pelanggaran Administrasi/PTUN", 
    icon: AlertCircle,
    description: "Pendampingan dalam kasus pelanggaran administrasi dan Peradilan Tata Usaha Negara"
  },
  { 
    name: "Praperadilan", 
    icon: Scale,
    description: "Layanan praperadilan untuk memastikan proses hukum berjalan sesuai prosedur"
  },
  { 
    name: "Layanan Hukum Lainnya", 
    icon: Briefcase,
    description: "Berbagai layanan hukum lainnya sesuai kebutuhan Anda"
  },
];

export default function ServicePage() {
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
              <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#1a1f3a] mb-4 md:mb-6 leading-tight">
            Our Service
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Layanan hukum profesional dan terpercaya untuk berbagai kebutuhan hukum Anda
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group bg-white rounded-[4rem] md:rounded-[4rem] p-8 md:p-10 border-2 border-slate-100 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-yellow-400/10 group-hover:bg-yellow-400/20 flex items-center justify-center transition-all duration-300">
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-xl md:text-2xl font-serif text-[#1a1f3a] mb-4 group-hover:text-[#1a1f3a] transition-colors">
                      {service.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed flex-1">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

