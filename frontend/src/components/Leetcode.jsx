import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from "../context/ThemeContext";

const Leetcode = () => {
  const { isHackerMode } = useTheme();
  const username = "SrishtiGoenka"; 

  // New Reliable API URL
  const themeParam = isHackerMode ? "dark" : "light";
  // Added extra params for a cleaner, bigger look
  const statsUrl = `https://leetcard.jacoblin.cool/${username}?theme=${themeParam}&font=Syncopate&ext=activity`;

  return (
    <div className="flex flex-col items-center w-full px-4 py-16">
      <h3 className="text-[12px] tracking-[12px] mb-10 font-bold uppercase opacity-50"
          style={{ color: isHackerMode ? '#00c4cc' : '#2563eb' }}>
        {isHackerMode ? "> LEETCODE_CENTRAL_UNIT" : "LeetCode Solving Progress"}
      </h3>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -5 }}
        className="w-full max-w-[1000px] relative group" 
      >
        {/* Glow Effect for Hacker Mode */}
        {isHackerMode && (
          <div className="absolute -inset-4 bg-[#00c4cc] rounded-[40px] blur-2xl opacity-5 group-hover:opacity-15 transition-all duration-700"></div>
        )}
        
        <img 
          src={statsUrl} 
          alt="LeetCode Stats" 
          className="relative rounded-[30px] w-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/5 transition-all"
          style={{ minHeight: "300px", objectFit: 'contain' }}
          onError={(e) => {
            e.target.style.display = 'none'; // Hide if API fails
          }}
        />
        
        <div className="mt-8 flex justify-center">
            <a 
              href={`https://leetcode.com/u/${username}/`} 
              target="_blank" 
              className="text-[10px] tracking-[4px] opacity-40 hover:opacity-100 transition-all border-b border-current"
              style={{ color: isHackerMode ? '#00c4cc' : '#2563eb' }}
            >
              VISIT_OFFICIAL_PROFILE
            </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Leetcode;