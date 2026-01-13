import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Github as GithubIcon, Linkedin, ExternalLink, Code2, ChevronDown, ChevronUp, UserPlus, Briefcase, Globe } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

// --- COMPONENTS ---
import Github from "../components/Github";
import Leetcode from "../components/Leetcode";

const Portal = () => {
  const { isHackerMode } = useTheme();
  const [active, setActive] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null); 

  useEffect(() => { setActive(true); }, []);

  // --- THEME SYNC LOGIC ---
  const accentColor = isHackerMode ? '#00c4cc' : '#2563eb';
  const bgColor = isHackerMode ? '#000' : '#f1f5f9';
  const textColor = isHackerMode ? '#fff' : '#0f172a';
  const subTextColor = isHackerMode ? '#666' : '#64748b';
  const borderColor = isHackerMode ? '#222' : '#cbd5e1';
  const cardBg = isHackerMode ? 'rgba(255,255,255,0.02)' : '#ffffff';

  const portals = [
    {
      id: 'github',
      title: "GITHUB_ARCHIVE",
      desc: "Source code for MERN & AI API projects",
      link: "https://github.com/srishti885", 
      icon: <GithubIcon size={24} />,
      status: "ACTIVE_REPOS",
      hasStats: true
    },
    {
      id: 'leetcode',
      title: "LEETCODE_PROFILE",
      desc: "200+ Problems solved in Data Structures",
      link: "https://leetcode.com/u/SrishtiGoenka/", 
      icon: <Code2 size={24} />,
      status: "RANKED_NODE",
      hasStats: true
    },
    {
      id: 'linkedin',
      title: "LINKEDIN_SYNC",
      desc: "Professional network & experience log",
      link: "https://www.linkedin.com/in/srishti-goenka-5021aa24a/",
      icon: <Linkedin size={24} />,
      status: "VERIFIED",
      hasStats: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div style={{ 
      backgroundColor: bgColor, 
      minHeight: '100vh', 
      color: textColor, 
      fontFamily: '"Syncopate", sans-serif',
      transition: 'all 0.5s ease',
      backgroundImage: !isHackerMode ? 'radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)' : 'none',
      backgroundSize: '32px 32px'
    }}>
      <Navbar />

      <motion.main 
        initial="hidden"
        animate={active ? "visible" : "hidden"}
        variants={containerVariants}
        style={{ 
          paddingTop: '200px', 
          paddingBottom: '100px', 
          maxWidth: '1200px', 
          margin: '0 auto', 
          paddingLeft: '60px',
          paddingRight: '60px',
        }}
      >
        <motion.div variants={itemVariants} style={{ marginBottom: '60px' }}>
          <h3 style={{ color: isHackerMode ? '#222' : '#94a3b8', fontSize: '10px', fontWeight: '900', letterSpacing: '5px' }}>SYSTEM_PORTALS</h3>
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 60px)', fontWeight: '900', letterSpacing: '-3px' }}>
            ACCESS <span style={{ color: accentColor }}>POINTS</span>
          </h1>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {portals.map((portal, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              layout
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${expandedCard === portal.id ? accentColor : borderColor}`,
                borderRadius: '35px',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              }}
            >
              <div style={{ padding: '45px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                  <div style={{ color: accentColor }}>{portal.icon}</div>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: '900', color: textColor, margin: 0 }}>{portal.title}</h2>
                    <p style={{ color: subTextColor, fontSize: '12px', marginTop: '8px', fontFamily: 'Inter, sans-serif' }}>{portal.desc}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <motion.button 
                      whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${accentColor}60` }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setExpandedCard(expandedCard === portal.id ? null : portal.id)}
                      style={{
                        background: expandedCard === portal.id ? accentColor : 'transparent',
                        border: `4px solid ${accentColor}`,
                        color: expandedCard === portal.id ? '#000' : accentColor,
                        padding: '16px 32px',
                        borderRadius: '15px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '900',
                        letterSpacing: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {expandedCard === portal.id ? 'CLOSE_DATA' : 'EXPLORE_DATA'}
                      {expandedCard === portal.id ? <ChevronUp size={18} strokeWidth={4}/> : <ChevronDown size={18} strokeWidth={4}/>}
                    </motion.button>

                    <motion.a 
                      href={portal.link} target="_blank" rel="noreferrer"
                      whileHover={{ scale: 1.2, color: accentColor }}
                      style={{ color: textColor, textDecoration: 'none' }}
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                </div>
              </div>

              <AnimatePresence>
                {expandedCard === portal.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ borderTop: `1px solid ${borderColor}`, background: isHackerMode ? 'rgba(0,0,0,0.4)' : '#fff' }}
                  >
                    <div style={{ padding: '60px 40px', display: 'flex', justifyContent: 'center' }}>
                        {portal.id === 'github' && <Github />}
                        {portal.id === 'leetcode' && <Leetcode />}
                        {portal.id === 'linkedin' && (
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', width: '100%', maxWidth: '1100px' }}>
                            {[
                              { label: "NETWORK_STRENGTH", value: "500+ NODES", icon: <UserPlus size={24}/> },
                              { label: "AVAILABILITY_STATUS", value: "OPEN_FOR_COLLAB", icon: <Briefcase size={24}/> },
                              { label: "GEOLOCATION", value: "RAJASTHAN, IN", icon: <Globe size={24}/> }
                            ].map((stat, i) => (
                              <div key={i} style={{ padding: '40px', borderRadius: '25px', background: isHackerMode ? 'rgba(255,255,255,0.05)' : '#f8fafc', border: `1px solid ${borderColor}`, textAlign: 'center' }}>
                                <div style={{ color: accentColor, marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                                <div style={{ fontSize: '10px', letterSpacing: '4px', opacity: 0.5, marginBottom: '10px' }}>{stat.label}</div>
                                <div style={{ fontSize: '16px', fontWeight: '900' }}>{stat.value}</div>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.main>

      {/* --- NEW UPDATED FOOTER --- */}
      <footer style={{ 
        borderTop: `1px solid ${borderColor}`, 
        padding: '80px 60px 50px', 
        backgroundColor: isHackerMode ? '#000' : '#f8fafc',
        marginTop: '50px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '40px',
          textAlign: 'left'
        }}>
          <div>
            <h4 style={{ color: accentColor, fontSize: '11px', letterSpacing: '3px', marginBottom: '15px' }}>IDENTITY_LOG</h4>
            <p style={{ fontSize: '12px', lineHeight: '1.8', opacity: 0.6, fontFamily: 'Inter, sans-serif' }}>
              Srishti Goenka<br />
              Full Stack Developer & AI Enthusiast<br />
              Building digital experiences that matter.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: accentColor, fontSize: '11px', letterSpacing: '3px', marginBottom: '15px' }}>SYSTEM_STATUS</h4>
            <div style={{ fontSize: '18px', fontWeight: '900', color: textColor }}>ONLINE</div>
            <p style={{ fontSize: '9px', letterSpacing: '2px', marginTop: '8px', color: '#00ff00' }}>● ALL_NODES_ACTIVE</p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <h4 style={{ color: accentColor, fontSize: '11px', letterSpacing: '3px', marginBottom: '15px' }}>NETWORK_LINKS</h4>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end' }}>
              <motion.a whileHover={{ color: accentColor }} href="https://github.com/srishti885" target="_blank" style={{ color: textColor }}><GithubIcon size={20}/></motion.a>
              <motion.a whileHover={{ color: accentColor }} href="https://www.linkedin.com/in/srishti-goenka-5021aa24a/" target="_blank" style={{ color: textColor }}><Linkedin size={20}/></motion.a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '60px', textAlign: 'center', borderTop: `1px solid ${isHackerMode ? '#111' : '#e2e8f0'}`, paddingTop: '30px' }}>
          <p style={{ color: isHackerMode ? '#222' : '#94a3b8', fontSize: '10px', letterSpacing: '8px', fontWeight: '900' }}>
            SRISHTI GOENKA // PORTAL_NODE_2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portal;