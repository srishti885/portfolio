import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronRight, Shield, Terminal, Activity } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { isHackerMode } = useTheme(); 
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const particles = useMemo(() => 
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
    })), []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 400);
      mouseY.set(e.clientY - 400);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const accentColor = isHackerMode ? '#00c4cc' : '#2563eb';
  const bgColor = isHackerMode ? 'bg-black' : 'bg-[#f8fafc]';

  return (
    <div className={`relative w-full h-screen flex flex-col items-center justify-center overflow-hidden font-sans cursor-none transition-colors duration-1000 ${bgColor}`}>
      
      {/* 1. NEON & GRID BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* THE NEON AURA (BACK!) */}
        <motion.div 
          style={{ translateX: springX, translateY: springY }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: isHackerMode ? [0.25, 0.4, 0.25] : [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className={`absolute w-[950px] h-[950px] blur-[160px] rounded-full z-0 transition-colors duration-1000 ${isHackerMode ? 'bg-[#00c4cc]' : 'bg-[#2563eb]'}`} 
        />

        {/* The Grid Overlay */}
        <div 
          className={`absolute inset-0 opacity-[0.12] ${!isHackerMode && 'invert'}`}
          style={{
            backgroundImage: `linear-gradient(${accentColor}20 1px, transparent 1px), linear-gradient(90deg, ${accentColor}20 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Floating Neural Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{ y: [0, -120, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute', left: p.left, top: p.top,
              width: p.size, height: p.size, backgroundColor: accentColor,
              borderRadius: '50%', filter: `blur(${p.size}px)`
            }}
          />
        ))}
      </div>

      {/* 2. TOP NAV (WITH STATS) */}
      <nav className="absolute top-0 w-full px-12 py-10 flex justify-between items-start z-50">
        <div className="flex flex-col gap-2">
            <span className={`text-2xl font-black tracking-tighter ${isHackerMode ? 'text-white' : 'text-slate-900'}`}>
                SG<span style={{ color: accentColor }}>.</span>
            </span>
            <div className={`h-[2px] w-8 ${isHackerMode ? 'bg-[#00c4cc]' : 'bg-slate-300'}`} />
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex flex-col items-end opacity-60">
             <span className="text-[9px] font-black tracking-widest text-zinc-500 uppercase">System_Load</span>
             <span className="text-[10px] font-bold" style={{ color: accentColor }}>Optimal_0.24s</span>
          </div>
          <div className="flex items-center gap-3 bg-zinc-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800">
            <div className={`w-2 h-2 rounded-full animate-pulse ${isHackerMode ? 'bg-[#00c4cc]' : 'bg-blue-500'}`} />
            <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase">
                {isHackerMode ? 'Hacker_Active' : 'Safe_Mode'}
            </span>
          </div>
          {isHackerMode ? <Terminal size={20} color={accentColor} /> : <Shield size={20} color={accentColor} />}
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <main className="relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
            <p className="text-[12px] md:text-[14px] font-black uppercase tracking-[1em]" style={{ color: accentColor }}>
                Digital Architect
            </p>
        </motion.div>
        
        <div className="mb-20 select-none">
            <motion.h1 
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`text-[17vw] md:text-[13vw] font-black leading-[0.75] tracking-tighter uppercase ${isHackerMode ? 'text-white' : 'text-slate-900'}`}
            >
              SRISHTI
            </motion.h1>
            <motion.h1 
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className={`text-[17vw] md:text-[13vw] font-black leading-[0.75] tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-b ${isHackerMode ? 'from-zinc-100 to-zinc-800' : 'from-slate-800 to-slate-200'}`}
            >
              GOENKA
            </motion.h1>
        </div>

        {/* 4. EXPLORE BUTTON (WITH GLOW & LIGHT) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="relative group"
        >
          {/* NEON OUTER GLOW */}
          <div className={`absolute -inset-1.5 rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition duration-700 ${isHackerMode ? 'bg-[#00c4cc]' : 'bg-[#2563eb]'}`} />
          
          <button 
            onClick={() => navigate("/about")}
            className={`relative px-16 py-6 md:px-24 md:py-8 rounded-full font-black text-[14px] md:text-[18px] tracking-[0.6em] flex items-center gap-6 transition-all duration-500 overflow-hidden
                       ${isHackerMode 
                         ? 'bg-black text-[#00c4cc] border-2 border-[#00c4cc] hover:bg-[#00c4cc] hover:text-black' 
                         : 'bg-white text-[#2563eb] border-2 border-[#2563eb] hover:bg-[#2563eb] hover:text-white'}`}
            style={{ boxShadow: isHackerMode ? '0 0 30px rgba(0, 196, 204, 0.4)' : '0 0 30px rgba(37, 99, 235, 0.2)' }}
          >
            <span className="relative z-10">EXPLORE</span>
            <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform relative z-10" />
          </button>
        </motion.div>
      </main>

      {/* 5. FOOTER (THE FULL STATS BAR) */}
      <footer className="absolute bottom-10 w-full px-16 flex justify-between items-end z-50">
        <div className="flex flex-col gap-2">
            <span className="text-[9px] font-black tracking-[0.5em] text-zinc-500 uppercase italic">MERN_CORE_V4</span>
            <div className={`h-[1px] w-32 ${isHackerMode ? 'bg-zinc-800' : 'bg-slate-200'}`} />
            <span className="text-[10px] font-bold tracking-widest text-zinc-600">Full-Stack Operational</span>
        </div>

        <div className="flex flex-col items-center">
            <motion.div 
                animate={{ height: [30, 60, 30] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`w-[1px] mb-4 ${isHackerMode ? 'bg-[#00c4cc]' : 'bg-blue-500'}`} 
            />
            <span className="text-[9px] font-black tracking-[0.8em] text-zinc-500 uppercase rotate-180 [writing-mode:vertical-lr]">SCROLL</span>
        </div>

        <div className="flex flex-col items-end gap-2 text-right">
            <div className="flex items-center gap-2">
                <Activity size={12} color={accentColor} className="animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase">Live_Session_2026</span>
            </div>
            <div className={`h-[1px] w-32 ${isHackerMode ? 'bg-zinc-800' : 'bg-slate-200'}`} />
            <span className="text-[10px] font-bold tracking-widest text-zinc-600">Encryption: AES-256</span>
        </div>
      </footer>

      {/* 6. MOUSE CURSOR */}
      <motion.div 
        style={{ translateX: springX, translateY: springY, x: 400, y: 400 }}
        className={`fixed top-0 left-0 w-12 h-12 border-2 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-colors duration-500 ${isHackerMode ? 'border-[#00c4cc]' : 'border-[#2563eb]'}`}
      />
    </div>
  );
};

export default LandingPage;