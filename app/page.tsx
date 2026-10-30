"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Quote, BookOpen, Laptop, Building2, Utensils, Bus, Calendar, Pin, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // ----------------------------------------------------
  // 1. HERO SLIDER LOGIC
  // ----------------------------------------------------
  const heroImages = [
    "/slider1.jpg", 
    "/slider2.jpg",
    "/slider3.jpg"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide(); 
    setTouchStart(0);
    setTouchEnd(0);
  };


  // ----------------------------------------------------
  // 2. SPORTS SECTION ADVANCED DRAG & AUTO-SCROLL LOGIC
  // ----------------------------------------------------
  
  // Yahan apni alag-alag photos ke naam daalo
  const sportsImages = [
    "/sport1.png", 
    "/sport2.png", 
    "/sport3.png", 
    "/sport4.png",
    "/sport5.png"
  ];

  const sportsRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto Scroll Engine
  useEffect(() => {
    const slider = sportsRef.current;
    if (!slider) return;
    let animationId: number;

    const scroll = () => {
      // Agar mouse dabaya nahi hai aur hover bhi nahi kar rahe, tabhi auto-scroll hoga
      if (!isDown && !isHovered) {
        slider.scrollLeft += 1; // Speed control
        if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 1)) {
          slider.scrollLeft = 0; // Reset smoothly
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isDown, isHovered]);

  // Mouse Drag Events (Laptop ke liye)
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    if (sportsRef.current) {
      setStartX(e.pageX - sportsRef.current.offsetLeft);
      setScrollLeftState(sportsRef.current.scrollLeft);
    }
  };
  const onMouseLeave = () => { setIsDown(false); setIsHovered(false); };
  const onMouseUp = () => setIsDown(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sportsRef.current) return;
    e.preventDefault();
    const x = e.pageX - sportsRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Hath se khinchne ki speed
    sportsRef.current.scrollLeft = scrollLeftState - walk;
  };
  const onMouseEnter = () => setIsHovered(true);

  // Touch Events (Mobile ke liye taaki swipe karte waqt auto-scroll ruk jaye)
  const onTouchStartScroll = () => { setIsDown(true); setIsHovered(true); };
  const onTouchEndScroll = () => { setIsDown(false); setIsHovered(false); };


  // ----------------------------------------------------
  // WEBSITE UI RENDER
  // ----------------------------------------------------
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HERO SLIDER SECTION */}
      <section 
        className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden bg-school-blue cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `url(${heroImages[currentSlide]})`,
              backgroundColor: '#0A3D62' 
            }}
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        {/* PERFECT FIXED WAVE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg viewBox="0 0 1440 150" className="block w-full h-[50px] md:h-[100px]" preserveAspectRatio="none">
            <path fill="#F39C12" d="M0,75 C240,140 480,10 720,75 C960,140 1200,10 1440,75 L1440,150 L0,150 Z"></path>
            <path fill="#ffffff" d="M0,87 C240,152 480,22 720,87 C960,152 1200,22 1440,87 L1440,150 L0,150 Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. RESULT BANNER IMAGE SECTION */}
      <section className="bg-white relative z-10 w-full">
        <div className="w-full">
          <img 
            src="/result-banner.png" 
            alt="TVS Results Banner" 
            className="w-full h-auto" 
          />
        </div>
      </section>

      {/* 3. ABOUT / INTRO SECTION */}
      <section className="pt-16 pb-4 bg-white overflow-hidden relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-start gap-8 lg:gap-4">
          
          <div className="w-full lg:w-[40%] relative flex justify-center items-center mt-8 lg:mt-0 min-h-[380px]">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] bg-[#29b6f6] rounded-full -z-10"></div>
            
            <div className="absolute top-0 sm:top-4 left-0 sm:-left-4 z-20">
              <h3 className="text-[26px] sm:text-[32px] font-bold leading-[1.2] drop-shadow-sm" style={{ fontFamily: "'Kalam', cursive", color: "#1e293b" }}>
                कुछ बनने की<br />
                सही जगह...
              </h3>
              <div className="w-12 h-[2px] bg-gray-500 mt-1"></div>
            </div>

            <img 
              src="/success-kids.png" 
              alt="Tapovan Students" 
              className="w-full max-w-[280px] sm:max-w-[380px] h-auto object-contain z-10 drop-shadow-xl mt-6" 
            />
          </div>

          <div className="w-full lg:w-[60%] relative mt-6 lg:mt-4 lg:pl-6">
            <div className="absolute top-0 right-2 lg:right-6 w-14 sm:w-16 opacity-90 transform rotate-[15deg]">
              <img src="/pencil-rocket.png" alt="Rocket" className="w-full h-auto object-contain" />
            </div>

            <h3 className="text-gray-900 text-sm md:text-base font-semibold mb-1 tracking-wide">Your Journey to Success Begins At</h3>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#1565C0] mb-4 tracking-tight leading-none">Tapovan Vidhya Sankul</h2>
            
            <div className="border-l-[4px] border-[#1565C0] pl-4 md:pl-5 mb-6">
              <p className="text-black font-medium text-sm md:text-[15px] leading-relaxed text-justify">
                <strong className="text-black font-black">Tapovan Vidhya Sankul</strong> is a premier educational institution located in Junagadh, Gujarat, offering education from kindergarten through 12th grade in both Gujarati and English mediums. The school provides hostel facilities and focuses on holistic development, including academics, sports, and extracurricular activities. Their faculty comprises experienced educators, including IIT and NIT graduates, dedicated to guiding students toward success in various professional fields.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start">
              <div className="flex flex-col items-center min-w-[130px]">
                <img src="/saraswati-logo.png" alt="Saraswati Mata" className="w-28 h-28 md:w-36 md:h-36 object-contain mb-2" />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <p className="text-black font-medium text-sm md:text-[14px] leading-relaxed mb-4 text-justify">
                  The school is committed to fostering a nurturing environment that encourages academic achievement, personal growth, and social responsibility.
                </p>
                <p className="text-gray-900 font-semibold text-xs md:text-sm mb-1">
                  For more information or to inquire about admissions, you can contact Tapovan Vidhya Sankul at
                </p>
                <a href="tel:+917096505050" className="block font-black text-[#1565C0] text-[22px] md:text-[26px] mb-4 hover:text-[#0D47A1] transition-colors tracking-wide">
                  +91 70 96 50 50 50
                </a>
                <Link href="/about" className="bg-[#1565C0] text-white font-semibold px-8 py-2.5 rounded-full hover:bg-[#0D47A1] transition-all shadow-md text-sm tracking-wide inline-block">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIRECTOR'S DESK SECTION */}
      <section className="pt-8 pb-20 md:pt-12 md:pb-32 bg-white overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative">
          
          <div className="flex justify-end mb-4 md:mb-6 pr-4 md:pr-10 relative z-20">
            <h2 className="text-3xl md:text-[42px] font-extrabold text-[#1565C0] tracking-tight">From The Desk of Directors</h2>
          </div>

          <div className="relative mt-4 md:mt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#29b6f6] to-[#1565C0] rounded-2xl md:rounded-3xl transform -skew-x-2 md:-skew-x-3 shadow-2xl z-0"></div>
            
            <div className="relative z-10 p-8 md:p-14 lg:p-16 text-white">
              <p className="text-sm md:text-lg leading-[1.8] md:leading-[2.2] text-justify font-medium mb-6">
                જીવન એક એવી અદ્ભુત સફર છે, જેમાં આપણે બધા એક પછી એક પડાવને પાર કરતા જઈએ છીએ. મુસાફર એમની મુસાફરી બાદ એમની અનોખી છાપ મૂકી જાય છે.
              </p>
              <p className="text-sm md:text-lg leading-[1.8] md:leading-[2.2] text-justify font-medium mb-6">
                એવી જ રીતે તપોવન પરિવારે પુરાની યાદો સાથે સફળતાના શિખરો ઉપર સુવર્ણ ઈતિહાસ રચ્યો છે. તપોવન પરિવારનો ધ્યેય એ છે કે અમારી સંપૂર્ણ મહેનત વિદ્યાર્થીની સફળતા માટે હોય છે. આપણે સર્વે જાણીએ છીએ કે શાળા એક મંદિર છે, જેમાં અભ્યાસ મેળવતું નાનું બાળક ભવિષ્યમાં ઉચ્ચ નાગરિક બની સમગ્ર દેશનું ગૌરવ બને છે. આ પ્રક્રિયા માત્ર શાળામાં જ નહી પરંતુ ઘરેથી પણ ચાલુ થાય છે. એટલે કહેવાય છે કે ઘર એ બાળક માટે પહેલું મંદિર છે અને માતા-પિતા એક ઉત્તમ શિક્ષક છે તેમજ શાળા એ બીજુ ઘર છે અને શિક્ષક એ બાળકના દ્વિતીય માતા-પિતા છે.
              </p>
              <p className="text-sm md:text-lg leading-[1.8] md:leading-[2.2] text-justify font-medium">
                વિદ્યાર્થી આપણો દેશ ઘડનારો ઘડવૈયો છે. તે ભવિષ્યના આવનારા સમયમાં સમાજના શ્રેષ્ઠ વિચારક, આયોજક અને નેતા છે. એમનું ભણતર અને ઘડતર એ જ અમારું એકમાત્ર લક્ષ્ય છે. તપોવન પરિવારમાં આપનું હૃદયની ઉર્મિઓ દ્વારા ભાવભર્યું સ્વાગત છે.!!
              </p>
            </div>

            <div className="absolute -top-12 -left-4 md:-top-20 md:-left-10 z-20 font-serif leading-none select-none pointer-events-none">
              <span className="text-[100px] md:text-[200px] text-white drop-shadow-md" style={{ WebkitTextStroke: '4px #29b6f6' }}>“</span>
            </div>
            <div className="absolute -bottom-6 -right-4 md:-bottom-12 md:-right-8 z-20 font-serif leading-none select-none pointer-events-none">
              <span className="text-[100px] md:text-[200px] text-white drop-shadow-md" style={{ WebkitTextStroke: '4px #1565C0' }}>”</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INFRASTRUCTURE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="inline-block text-3xl md:text-4xl font-extrabold text-white bg-school-blue px-6 py-2 rounded-md shadow-md">
              Our Infrastructure
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {[
              { title: "Canteen Facility", icon: Utensils, img: "/canteen.png" },
              { title: "Hostel Facility", icon: Building2, img: "/hostel.png" },
              { title: "Computer Lab", icon: Laptop, img: "/computer.png" },
              { title: "Science Lab", icon: BookOpen, img: "/science.png" },
              { title: "School Transport", icon: Bus, img: "/transport.png" },
              { title: "Seminar & Events", icon: Calendar, img: "/seminar.png" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform">
                <div className="h-40 w-full overflow-hidden rounded-t-2xl">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover bg-gray-200 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="relative flex justify-center -mt-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-gray-50 shadow-md">
                    <item.icon className="w-8 h-8 text-school-gold" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-school-blue mb-2">{item.title}</h3>
                  <Link href="/infrastructure" className="text-sm font-semibold text-gray-500 hover:text-school-gold flex items-center justify-center gap-1">
                    View More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ADMISSION FORM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-school-blue leading-tight mb-4">
              Start Your Dream Career <br/>
              <span className="text-school-blue">with <span className="text-school-gold">TAPOVAN</span></span>
            </h2>
            <h3 className="text-2xl text-gray-600 font-semibold mb-8 border-b-4 border-school-gold inline-block pb-2">
              Best School in Gujarat
            </h3>
            <img src="/kid-skate.png" alt="Happy Student" className="w-3/4 max-w-sm mx-auto md:mx-0 object-contain" />
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-t-8 border-school-gold p-8 md:p-10 w-full max-w-md mx-auto z-10 relative">
              <h3 className="text-2xl font-bold text-school-blue mb-8">Admissions Open....</h3>
              <form className="space-y-6">
                <div><input type="text" placeholder="Your Name" className="w-full border-b-2 border-gray-200 focus:border-school-blue py-2 px-1 outline-none transition-colors bg-transparent" /></div>
                <div><input type="email" placeholder="Email Address" className="w-full border-b-2 border-gray-200 focus:border-school-blue py-2 px-1 outline-none transition-colors bg-transparent" /></div>
                <div><input type="tel" placeholder="Phone Number" className="w-full border-b-2 border-gray-200 focus:border-school-blue py-2 px-1 outline-none transition-colors bg-transparent" /></div>
                <button type="submit" className="bg-school-blue text-white font-bold py-3 px-10 rounded-full hover:bg-school-gold transition-colors shadow-lg mt-4">
                  Admission
                </button>
              </form>
            </div>
            
            <div className="absolute -bottom-10 -right-4 md:-right-12 bg-[#D98A59] rounded-3xl p-6 shadow-xl z-20 hidden md:block">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24">
                 <img src="/monkey-mascot.png" alt="Mascot" className="w-full h-full object-contain" />
              </div>
              <p className="text-white font-bold text-xl mt-6 text-center">Click to<br/>Admissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SPORTS CAROUSEL SECTION (Perfect Drag + Auto-Scroll) */}
      <section className="relative pt-16 pb-24 bg-[#29b6f6] overflow-hidden">
        
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V105.8C59.71,128.43,144.1,123.84,213.3,105.8,251.84,95.68,289.4,80.52,321.39,66.44Z" fill="#ffffff"></path>
          </svg>
        </div>

        {/* Heading Area */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-12 mt-10 mb-12 flex items-center justify-between">
          <div className="flex items-baseline gap-3 md:gap-6">
            <h2 className="text-4xl md:text-[65px] font-bold text-white tracking-wide">Sports</h2>
            <h2 className="text-3xl md:text-[80px] font-black text-transparent tracking-widest" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)' }}>Play Game</h2>
          </div>
          
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-28 md:h-28 text-white/30 transform rotate-[15deg] hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="12" x2="10" y2="12"></line>
            <line x1="8" y1="10" x2="8" y2="14"></line>
            <line x1="15" y1="13" x2="15.01" y2="13"></line>
            <line x1="18" y1="11" x2="18.01" y2="11"></line>
            <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
          </svg>
        </div>

        {/* Scrolling Images Container */}
        <div 
          ref={sportsRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseEnter={onMouseEnter}
          onTouchStart={onTouchStartScroll}
          onTouchEnd={onTouchEndScroll}
          className="relative z-10 w-full overflow-x-auto flex gap-6 md:gap-12 px-4 md:px-12 pb-10 cursor-grab active:cursor-grabbing snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* Maine list ko 2 baar lagaya hai taaki endless loop wali feel aaye */}
          {[...sportsImages, ...sportsImages].map((imgPath, idx) => (
            <div key={idx} className="w-56 h-56 md:w-[350px] md:h-[350px] rounded-full overflow-hidden flex-shrink-0 shadow-2xl snap-center bg-blue-200">
              <img src={imgPath} alt={`Sport ${idx}`} className="w-full h-full object-cover pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* 8. SPORTS MEDALS ACHIEVEMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <div className="bg-[#1565C0] text-white rounded-2xl p-6 w-full max-w-xs shadow-lg mb-6">
                <h3 className="text-2xl font-black mb-4 tracking-wider">CRICKET</h3>
                <img src="/sport3.png" alt="CRICKET" className="w-full h-32 object-contain filter invert opacity-90" />
              </div>
              <div className="flex justify-center gap-4">
                <div className="text-center"><div className="w-14 h-14 bg-gray-300 rounded-full border-4 border-gray-400 flex items-center justify-center font-bold text-xl shadow-md">13</div><p className="text-xs font-bold mt-2">Silver</p></div>
                <div className="text-center"><div className="w-14 h-14 bg-yellow-300 rounded-full border-4 border-yellow-500 flex items-center justify-center font-bold text-xl shadow-md">6</div><p className="text-xs font-bold mt-2">Gold</p></div>
                <div className="text-center"><div className="w-14 h-14 bg-[#CD7F32] rounded-full border-4 border-[#8B4513] flex items-center justify-center font-bold text-white text-xl shadow-md">35</div><p className="text-xs font-bold mt-2">Bronze</p></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#1565C0] text-white rounded-2xl p-6 w-full max-w-xs shadow-lg mb-6">
                <h3 className="text-2xl font-black mb-4 tracking-wider">VOLLEYBALL</h3>
                <img src="/sport2.png" alt="Volleyball" className="w-full h-32 object-contain filter invert opacity-90" />
              </div>
              <div className="flex justify-center gap-4">
                <div className="text-center"><div className="w-14 h-14 bg-gray-300 rounded-full border-4 border-gray-400 flex items-center justify-center font-bold text-xl shadow-md">1</div><p className="text-xs font-bold mt-2">Silver</p></div>
                <div className="text-center"><div className="w-16 h-16 bg-yellow-300 rounded-full border-4 border-yellow-500 flex items-center justify-center font-bold text-2xl shadow-md scale-110">1</div><p className="text-xs font-bold mt-2">Gold</p></div>
                <div className="text-center"><div className="w-14 h-14 bg-[#CD7F32] rounded-full border-4 border-[#8B4513] flex items-center justify-center font-bold text-white text-xl shadow-md">1</div><p className="text-xs font-bold mt-2">Bronze</p></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#1565C0] text-white rounded-2xl p-6 w-full max-w-xs shadow-lg mb-6">
                <h3 className="text-2xl font-black mb-4 tracking-wider">HANDBALL</h3>
                <img src="/sport1.png" alt="Handball" className="w-full h-32 object-contain filter invert opacity-90" />
              </div>
              <div className="flex justify-center gap-4">
                <div className="text-center"><div className="w-14 h-14 bg-gray-300 rounded-full border-4 border-gray-400 flex items-center justify-center font-bold text-xl shadow-md">1</div><p className="text-xs font-bold mt-2">Silver</p></div>
                <div className="text-center"><div className="w-14 h-14 bg-yellow-300 rounded-full border-4 border-yellow-500 flex items-center justify-center font-bold text-xl shadow-md">3</div><p className="text-xs font-bold mt-2">Gold</p></div>
                <div className="text-center"><div className="w-14 h-14 bg-[#CD7F32] rounded-full border-4 border-[#8B4513] flex items-center justify-center font-bold text-white text-xl shadow-md">2</div><p className="text-xs font-bold mt-2">Bronze</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OUR ARTICLES (BLOGS) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="texlt-4xl md:text-5xl font-extrabold text-school-blue mb-12">Our Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
            {[1, 2, 3].map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <div className="relative h-48">
                  <img src={`/blog${card}.png`} alt="Blog" className="w-full h-full object-cover bg-gray-200" />
                  <span className="absolute top-4 left-4 bg-school-blue text-white text-xs font-bold px-3 py-1 rounded-full">Ipsum Lorem</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-400 font-semibold mb-2">March 4, 2026 | by Tapovan Vidhya Sankul</p>
                  <h3 className="text-xl font-bold text-school-blue mb-3 hover:text-school-gold cursor-pointer transition-colors">
                    The standard Lorem Ipsum passage, used since the 1500s
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    This is a normal paragraph. To add some length to it, let us mention that this page was primarily made for demonstration...
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/blogs" className="bg-[#1565C0] text-white font-bold px-10 py-3 rounded-full hover:bg-school-blue transition-colors shadow-lg inline-block">
            View All Blogs
          </Link>
        </div>
      </section>

      {/* 10. PREMIUM WAVEY FOOTER */}
      <footer className="relative pt-32 pb-6 bg-[#29b6f6] text-white overflow-hidden mt-20">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-full h-[80px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V105.8C59.71,128.43,144.1,123.84,213.3,105.8,251.84,95.68,289.4,80.52,321.39,66.44Z" fill="#F9FAFB"></path>
          </svg>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/education-icons-bg.png')] bg-repeat"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-2 shadow-xl border-4 border-white/20">
               <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-widest uppercase">TAPOVAN VIDHYA SANKUL</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-bold text-sm mb-16 tracking-wider">
            <Link href="/about" className="hover:text-school-gold transition-colors">ABOUT US</Link>
            <span>|</span>
            <Link href="/academics" className="hover:text-school-gold transition-colors">ACADEMICS</Link>
            <span>|</span>
            <Link href="/infrastructure" className="hover:text-school-gold transition-colors">OUR INFRASTRUCTURE</Link>
            <span>|</span>
            <Link href="/sports" className="hover:text-school-gold transition-colors">SPORTS</Link>
            <span>|</span>
            <Link href="/units" className="hover:text-school-gold transition-colors">UNITS</Link>
            <span>|</span>
            <Link href="/blogs" className="hover:text-school-gold transition-colors">BLOGS</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-school-gold transition-colors">CONTACT US</Link>
            <span>|</span>
            <Link href="/admissions" className="hover:text-school-gold transition-colors">ADMISSIONS</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/30 mb-16">
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <Pin className="w-10 h-10 text-red-500 fill-red-500 mb-4 transform -rotate-45" />
              <h3 className="text-2xl font-bold mb-1">Main Unit</h3>
              <p className="font-bold mb-1">Std. 1st - 10th</p>
              <p className="text-sm mb-4">(Eng. & Guj. Medium)</p>
              <p className="flex items-center gap-2 font-bold mb-2"><Phone size={16}/> +91 98765 43210</p>
              <p className="flex items-center gap-2 text-sm"><MapPin size={16}/> Ankolvadi-Gir, Junagadh</p>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <Pin className="w-10 h-10 text-red-500 fill-red-500 mb-4 transform -rotate-45" />
              <h3 className="text-2xl font-bold mb-1">Science Unit</h3>
              <p className="font-bold mb-1">Std. 11th - 12th</p>
              <p className="text-sm mb-4">(Eng. & Guj. Medium)<br/>(Science, Commerce, Arts)</p>
              <p className="flex items-center gap-2 font-bold mb-2"><Phone size={16}/> +91 98765 43211</p>
              <p className="flex items-center gap-2 text-sm"><MapPin size={16}/> Ankolvadi-Gir, Junagadh</p>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <Pin className="w-10 h-10 text-red-500 fill-red-500 mb-4 transform -rotate-45" />
              <h3 className="text-2xl font-bold mb-1">Girls Unit</h3>
              <p className="font-bold mb-1">Std. 6th - 12th</p>
              <p className="text-sm mb-4">(Eng. & Guj. Medium)<br/>(Science, Commerce, Arts)</p>
              <p className="flex items-center gap-2 font-bold mb-2"><Phone size={16}/> +91 98765 43212</p>
              <p className="flex items-center gap-2 text-sm"><MapPin size={16}/> Ankolvadi-Gir, Junagadh</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs font-medium">
            <p>Copyright © 2026 Tapovan Vidhya Sankul. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}