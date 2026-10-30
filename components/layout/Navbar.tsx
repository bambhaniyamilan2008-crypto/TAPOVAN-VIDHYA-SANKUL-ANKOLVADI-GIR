"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Facebook, Linkedin, Instagram, Youtube, Menu, X } from "lucide-react";

export default function Header() {
  // Mobile menu ko open/close karne ke liye state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col font-poppins">
      
      {/* 1. TOP BAR (White, Thin, Solid) - Mobile pe thoda chota dikhega */}
      <div className="hidden md:flex bg-white text-[#1565C0] text-[13px] font-semibold py-1.5 px-4 sm:px-8 md:px-12 justify-between items-center border-b border-gray-200">
        <div className="flex gap-4 items-center">
          <Link href="#" className="hover:text-school-gold transition-colors"><Facebook size={16} fill="currentColor" /></Link>
          <Link href="#" className="hover:text-school-gold transition-colors"><Linkedin size={16} fill="currentColor" /></Link>
          <Link href="#" className="hover:text-school-gold transition-colors"><Instagram size={16} /></Link>
          <Link href="#" className="hover:text-school-gold transition-colors"><Youtube size={16} /></Link>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} fill="currentColor" />
          <a href="tel:+917096505050" className="hover:text-school-gold transition-colors">
            +91 70 96 50 50 50
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVBAR (Blue, Transparent/Glassmorphism) */}
      <div className="bg-[#1565C0]/85 backdrop-blur-md text-white py-3 px-4 sm:px-8 md:px-12 shadow-md flex justify-between items-center transition-all duration-300 relative">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center p-1 shadow-sm overflow-hidden">
            <img src="/logo.png" alt="Tapovan Logo" className="w-full h-full object-contain scale-110" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base md:text-2xl font-extrabold tracking-wide leading-tight">TAPOVAN</h1>
            <h2 className="text-[8px] md:text-xs font-semibold tracking-widest text-blue-100">VIDHYA SANKUL</h2>
          </div>
        </Link>

        {/* Navigation Links (Hidden on small screens, dikhega sirf Desktop par) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-bold text-[14px]">
          <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
          <Link href="/academics" className="hover:text-amber-400 transition-colors">Academics</Link>
          <Link href="/infrastructure" className="hover:text-amber-400 transition-colors">Our Infrastructure</Link>
          <Link href="/sports" className="hover:text-amber-400 transition-colors">Sports</Link>
          <Link href="/units" className="hover:text-amber-400 transition-colors">Units</Link>
          <Link href="/blogs" className="hover:text-amber-400 transition-colors">Blogs</Link>
          <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
        </nav>

        {/* Right Side: Admissions Button & 3-Line Mobile Menu */}
        <div className="flex items-center gap-3">
          
          {/* Admissions Button - Ab ye Mobile par bhi bahar dikhega */}
          <Link href="/admissions" className="bg-[#333333] hover:bg-black text-white font-bold text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-colors shadow-sm">
            Admissions
          </Link>

          {/* 3-Line (Hamburger) Menu Button - Sirf Mobile par dikhega */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-white hover:text-amber-400 focus:outline-none ml-1"
          >
            {/* Agar menu open hai to 'X' icon, warna 3-line 'Menu' icon */}
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* 3. MOBILE MENU DROPDOWN (Jab 3-line par click hoga tab khulega) */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1565C0]/95 backdrop-blur-md text-white shadow-xl flex flex-col font-bold border-t border-white/20 z-50">
          <Link href="/about" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-white/10 hover:bg-white/10">About Us</Link>
          <Link href="/academics" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-white/10 hover:bg-white/10">Academics</Link>
          <Link href="/infrastructure" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-white/10 hover:bg-white/10">Our Infrastructure</Link>
          <Link href="/sports" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-white/10 hover:bg-white/10">Sports</Link>
          <Link href="/units" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-white/10 hover:bg-white/10">Units</Link>
          <Link href="/blogs" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-white/10 hover:bg-white/10">Blogs</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b border-white/10 hover:bg-white/10">Contact Us</Link>
          
          {/* Mobile users ke liye direct call option */}
          <div className="px-6 py-4 bg-black/20 flex flex-col gap-2">
            <span className="text-xs text-blue-200 uppercase tracking-wider">Direct Contact</span>
            <a href="tel:+917096505050" className="flex items-center gap-2 text-sm">
              <Phone size={16} fill="currentColor" /> +91 70 96 50 50 50
            </a>
          </div>
        </div>
      )}
    </header>
  );
}