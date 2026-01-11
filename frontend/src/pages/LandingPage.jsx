import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-[#000] text-white overflow-hidden font-sans">
      
      {/* 1. Cinematic Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Center Aura - Making it brighter for visibility */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] bg-[#00c4cc] blur-[180px] rounded-full pointer-events-none" 
      />

      {/* 2. Top Nav */}
      <nav className="absolute top-0 w-full px-12 py-10 flex justify-between items-center z-50">
        <span className="text-2xl font-black tracking-tighter text-white">
          SG<span className="text-[#00c4cc]">.</span>
        </span>
        <div className="h-[1px] w-32 bg-zinc-800" />
        <span className="text-[10px] font-black tracking-[0.5em] text-zinc-500 uppercase">
          System Online
        </span>
      </nav>

      {/* 3. Hero Section */}
      <main className="relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <p className="text-[#00c4cc] text-[22px] md:text-[28px] font-black uppercase tracking-[1.2em]">
            Digital Architect
          </p>
        </motion.div>
        
        {/* Name Display */}
        <div className="relative mb-32 overflow-hidden">
           <motion.h1 
             initial={{ y: 200, skewY: 10 }}
             animate={{ y: 0, skewY: 0 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="text-[16vw] md:text-[13vw] font-black leading-[0.75] tracking-tighter uppercase text-white"
           >
             SRISHTI
           </motion.h1>
           <motion.h1 
             initial={{ y: 200, skewY: 10 }}
             animate={{ y: 0, skewY: 0 }}
             transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             className="text-[16vw] md:text-[13vw] font-black leading-[0.75] tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-800 italic"
           >
             GOENKA
           </motion.h1>
        </div>

        {/* 4. THE BIG STYLISH BUTTON */}
        <motion.div 
          className="relative group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* Intense Neon Glow Outer Layer */}
          <div className="absolute -inset-2 bg-[#00c4cc] rounded-full blur-xl opacity-20 group-hover:opacity-60 transition duration-500"></div>
          
          <button 
            onClick={() => navigate("/about")}
            className="relative px-24 py-8 bg-white text-black font-black text-[20px] tracking-[0.6em] rounded-full transition-all duration-500 
                       hover:scale-110 hover:bg-[#00c4cc] hover:text-white
                       shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(0,196,204,0.8)] 
                       flex items-center justify-center gap-8 overflow-hidden"
          >
            <span className="relative z-10 ml-4">EXPLORE PROFILE</span>
            
            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black/5 group-hover:bg-white/20 transition-colors">
               <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </button>
        </motion.div>
      </main>

      {/* 5. Bottom Elements */}
      <div className="absolute bottom-12 w-full px-16 flex justify-between items-center">
        <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-600 border-l-2 border-[#00c4cc] pl-4">
          MERN_STACK_V4
        </div>

        <div className="flex flex-col items-center">
          <span className="text-[12px] font-black tracking-[0.8em] uppercase text-zinc-400">
            2026 Edition
          </span>
          <div className="h-[2px] w-16 bg-[#00c4cc] mt-2 shadow-[0_0_10px_#00c4cc]" />
        </div>

        <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-600 border-r-2 border-[#00c4cc] pr-4 text-right">
          Operational
        </div>
      </div>

    </div>
  );
};

export default LandingPage;