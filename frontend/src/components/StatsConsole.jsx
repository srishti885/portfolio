import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Github from "./Github";
import Leetcode from "./Leetcode";
import { useTheme } from "../context/ThemeContext";

const StatsConsole = () => {
  const [activeTab, setActiveTab] = useState("github");
  const { isHackerMode } = useTheme();
  
  const accentColor = isHackerMode ? '#00c4cc' : '#2563eb';
  const textColor = isHackerMode ? '#fff' : '#0f172a';

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* --- TAB BUTTONS --- */}
      <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
        {["github", "leetcode"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ 
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 20px',
              fontSize: '11px',
              letterSpacing: '5px',
              fontWeight: '900',
              color: activeTab === tab ? textColor : '#666',
              borderBottom: `2px solid ${activeTab === tab ? accentColor : 'transparent'}`,
              transition: 'all 0.3s ease',
              textTransform: 'uppercase'
            }}
          >
            {tab}_LOG
          </button>
        ))}
      </div>

      {/* --- CONTENT AREA (BIG VIEW) --- */}
      <div style={{ 
        width: '100%', 
        minHeight: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
          >
            {activeTab === "github" ? <Github /> : <Leetcode />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StatsConsole;