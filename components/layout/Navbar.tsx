"use client";

import Link from "next/link";
import { Phone, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col font-poppins">
      
      {/* 1. TOP BAR (White, Thin, Solid) */}
      <div className="bg-white text-[#1565C0] text-[13px] font-semibold py-1.5 px-4 sm:px-8 md:px-12 flex justify-between items-center border-b border-gray-200">
        
        {/* Social Icons (Left) */}
        <div className="flex gap-4 items-center">
          <Link href="#" className="hover:text-school-gold transition-colors"><Facebook size={16} fill="currentColor" /></Link>
          <Link href="#" className="hover:text-school-gold transition-colors"><Linkedin size={16} fill="currentColor" /></Link>
          <Link href="#" className="hover:text-school-gold transition-colors"><Instagram size={16} /></Link>
          <Link href="#" className="hover:text-school-gold transition-colors"><Youtube size={16} /></Link>
        </div>

        {/* Phone Number (Right) */}
        <div className="flex items-center gap-2">
          <Phone size={14} fill="currentColor" />
          <a href="tel:+917096505050" className="hover:text-school-gold transition-colors">
            +91 70 96 50 50 50
          </a>
        </div>

      </div>

      {/* 2. MAIN NAVBAR (Blue, Transparent/Glassmorphism) */}
      <div className="bg-[#1565C0]/85 backdrop-blur-md text-white py-3 px-4 sm:px-8 md:px-12 shadow-md flex justify-between items-center transition-all duration-300">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 shadow-sm overflow-hidden">
            <img src="/logo.png" alt="Tapovan Logo" className="w-full h-full object-contain scale-110" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wide leading-tight">TAPOVAN</h1>
            <h2 className="text-[10px] md:text-xs font-semibold tracking-widest text-blue-100">VIDHYA SANKUL</h2>
          </div>
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-bold text-[14px]">
          <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
          <Link href="/academics" className="hover:text-amber-400 transition-colors">Academics</Link>
          <Link href="/infrastructure" className="hover:text-amber-400 transition-colors">Our Infrastructure</Link>
          <Link href="/sports" className="hover:text-amber-400 transition-colors">Sports</Link>
          <Link href="/units" className="hover:text-amber-400 transition-colors">Units</Link>
          <Link href="/blogs" className="hover:text-amber-400 transition-colors">Blogs</Link>
          <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
        </nav>

        {/* Admissions Button */}
        <div className="hidden md:block">
          <Link href="/admissions" className="bg-[#333333] hover:bg-black text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors shadow-sm">
            Admissions
          </Link>
        </div>

      </div>
    </header>
  );
}