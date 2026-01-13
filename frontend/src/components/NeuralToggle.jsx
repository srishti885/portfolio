import { Zap, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const NeuralToggle = () => {
  const { isHackerMode, setIsHackerMode } = useTheme();

  return (
    <div 
      onClick={() => setIsHackerMode(!isHackerMode)}
      style={{ 
        zIndex: 99999, 
        position: 'relative',
        cursor: 'pointer',
        pointerEvents: 'auto'
      }}
      className="flex items-center"
    >
      {/* Main Container - Size Bada kiya hai (w-24 h-12) */}
      <div className={`
        relative w-24 h-12 rounded-full p-1 transition-all duration-500
        ${isHackerMode 
          ? 'bg-black border-2 border-[#00c4cc] shadow-[0_0_15px_rgba(0,196,204,0.5)]' 
          : 'bg-white border-2 border-[#7d2ae8] shadow-[0_0_15px_rgba(125,42,232,0.3)]'
        }
      `}>
        {/* Sliding Knob */}
        <motion.div 
          animate={{ x: isHackerMode ? 48 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`
            w-9 h-9 rounded-full flex items-center justify-center shadow-lg
            ${isHackerMode ? 'bg-[#00c4cc]' : 'bg-[#7d2ae8]'}
          `}
        >
          {isHackerMode ? (
            <Zap size={20} color="black" fill="black" />
          ) : (
            <Shield size={20} color="white" fill="white" />
          )}
        </motion.div>
        
        {/* Labels - Inka color mode ke hisaab se change hoga */}
        <span className={`
          absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-black tracking-tighter
          ${isHackerMode ? 'text-[#00c4cc] opacity-100' : 'text-gray-400 opacity-20'}
        `}>
          HACK
        </span>
        <span className={`
          absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-black tracking-tighter
          ${!isHackerMode ? 'text-[#7d2ae8] opacity-100' : 'text-gray-400 opacity-20'}
        `}>
          SAFE
        </span>
      </div>
    </div>
  );
};

export default NeuralToggle;