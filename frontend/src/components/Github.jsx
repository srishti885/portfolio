import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from "../context/ThemeContext";

const Github = () => {
  const { isHackerMode } = useTheme();

  // 300 boxes for a wider, fuller look
  const activityData = useMemo(() => {
    return Array.from({ length: 300 }, () => Math.floor(Math.random() * 5));
  }, []);

  const getColor = (level) => {
    if (isHackerMode) {
      return ['#0a0a0a', '#004447', '#007a7d', '#00b0b5', '#00f0f7'][level];
    }
    return ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'][level];
  };

  return (
    <div className="flex flex-col items-center w-full px-4 py-10">
      <h3 className="text-[12px] tracking-[10px] mb-8 font-bold uppercase opacity-60" 
          style={{ color: isHackerMode ? '#00c4cc' : '#2563eb' }}>
        {isHackerMode ? "> SYSTEM_CONTRIBUTION_MAP" : "Github Activity Archive"}
      </h3>
      
      <div className={`p-10 rounded-[40px] border ${isHackerMode ? 'border-[#111] bg-black/60' : 'border-slate-200 bg-white'} shadow-2xl w-full max-w-[1000px]`}>
        <div className="flex flex-wrap gap-[6px] justify-center">
          {activityData.map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.001 }}
              className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-[4px]"
              style={{ backgroundColor: getColor(level) }}
            />
          ))}
        </div>
        
        <div className="mt-10 flex justify-between items-center opacity-40 text-[9px] tracking-[4px]">
          <span>DATA_NODE: SRISHTI885</span>
          <div className="flex gap-2 items-center">
            <span>LOW</span>
            {[0, 1, 2, 3, 4].map(l => (
              <div key={l} className="w-3.5 h-3.5 rounded-[2px]" style={{ backgroundColor: getColor(l) }} />
            ))}
            <span>HIGH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;