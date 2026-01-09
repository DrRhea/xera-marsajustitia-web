"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Service", href: "/service" },
  { name: "Our Lawyers", href: "/lawyers" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    // Di halaman selain home, langsung show background (computed, tidak perlu state)
    if (!isHomePage) {
      return;
    }

    // Di home page, cek scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Di halaman selain home, selalu show background
  const shouldShowBackground = isHomePage ? isScrolled : true;

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowBackground
          ? "fixed bg-slate-950/80 backdrop-blur-sm"
          : "absolute bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/logo/marsajustitialogo.png"
                alt="Marsajustitia Law Office Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-yellow-400 hover:text-yellow-300"
                      : "text-white hover:text-white/90"
                  }`}
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="block"
                  >
                    {item.name}
                  </motion.span>
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isActive ? "bg-yellow-400" : shouldShowBackground ? "bg-white" : "bg-white"
                    }`}
                    initial={{ scaleX: isActive ? 1 : 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              shouldShowBackground
                ? "text-white hover:text-white/90"
                : "text-white hover:text-slate-100"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden overflow-hidden ${
                shouldShowBackground 
                  ? "" 
                  : "bg-white/95 backdrop-blur-sm rounded-xl mx-2 mb-2"
              }`}
            >
              <div className="py-4 space-y-2 px-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-6 py-3 text-base font-semibold rounded-lg transition-colors ${
                          shouldShowBackground
                            ? isActive
                              ? "bg-yellow-400/20 text-white"
                              : "text-white hover:bg-white/10 hover:text-white"
                            : isActive
                            ? "bg-yellow-400/20 text-[#1a1f3a]"
                            : "text-[#1a1f3a] hover:bg-slate-50 hover:text-[#1a1f3a]"
                        }`}
                        style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

