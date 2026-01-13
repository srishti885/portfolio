import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Github as GithubIcon, Linkedin, ExternalLink, Code2, Terminal, Activity, ChevronDown, ChevronUp, UserPlus, Briefcase, Globe } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion"; 
import { useTheme } from "../context/ThemeContext";

import Github from "../components/Github";
import Leetcode from "../components/Leetcode";

const Dashboard = () => {
  const { isHackerMode } = useTheme();
  const [active, setActive] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null); 

  useEffect(() => { setActive(true); }, []);

  const accentColor = isHackerMode ? '#00c4cc' : '#2563eb'; 
  const bgColor = isHackerMode ? '#000' : '#f1f5f9'; 
  const textColor = isHackerMode ? '#fff' : '#0f172a';
  const subTextColor = isHackerMode ? '#666' : '#475569';
  const borderColor = isHackerMode ? '#222' : '#cbd5e1';
  const cardBg = isHackerMode ? 'rgba(255,255,255,0.02)' : '#ffffff';

  const portals = [
    {
      id: 'github',
      title: "GITHUB_ARCHIVE",
      desc: "Source code for MERN and AI API integration projects",
      link: "https://github.com/srishti885", 
      icon: <GithubIcon size={28} />,
      status: "ACTIVE_NODES",
      hasStats: true
    },
    {
      id: 'leetcode',
      title: "LEETCODE_PROFILE",
      desc: "200+ Problems solved in DSA and Problem Solving",
      link: "https://leetcode.com/u/SrishtiGoenka/", 
      icon: <Code2 size={28} />,
      status: "RANKED_NODE",
      hasStats: true
    },
    {
      id: 'linkedin',
      title: "LINKEDIN_SYNC",
      desc: "Professional network and career experience logs",
      link: "https://www.linkedin.com/in/srishti-goenka-5021aa24a/",
      icon: <Linkedin size={28} />,
      status: "VERIFIED",
      hasStats: true 
    }
  ];

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', color: textColor, fontFamily: '"Syncopate", sans-serif', transition: 'all 0.3s ease' }}>
      <Navbar />

      <motion.main 
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : {}}
        style={{ paddingTop: '180px', maxWidth: '1200px', margin: '0 auto', paddingLeft: '40px', paddingRight: '40px', paddingBottom: '100px' }}
      >
        <div style={{ borderBottom: `2px solid ${borderColor}`, paddingBottom: '30px', marginBottom: '50px' }}>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 55px)', fontWeight: '900', letterSpacing: '-3px' }}>
              SYSTEM <span style={{ color: accentColor }}>PORTALS</span>
            </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
          {portals.map((portal) => (
            <motion.div 
              key={portal.id}
              layout
              style={{
                background: cardBg,
                border: `1px solid ${expandedCard === portal.id ? accentColor : borderColor}`,
                borderRadius: '30px',
                overflow: 'hidden',
                boxShadow: expandedCard === portal.id ? `0 15px 50px ${accentColor}30` : 'none'
              }}
            >
              <div style={{ padding: '45px 55px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <div style={{ color: accentColor }}>{portal.icon}</div>
                    <div>
                        <h2 style={{ fontSize: '22px', margin: 0, letterSpacing: '3px', fontWeight: '900' }}>{portal.title}</h2>
                        <p style={{ fontSize: '14px', color: subTextColor, margin: '10px 0 0 0', fontFamily: 'Inter, sans-serif', maxWidth: '450px', lineHeight: '1.6' }}>{portal.desc}</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                    {portal.hasStats && (
                        <motion.button 
                            whileHover={{ scale: 1.08, boxShadow: `0 0 50px ${accentColor}` }}
                            whileTap={{ scale: 0.92 }}
                            onClick={() => setExpandedCard(expandedCard === portal.id ? null : portal.id)}
                            style={{
                                background: expandedCard === portal.id ? accentColor : 'transparent',
                                border: `4px solid ${accentColor}`, 
                                color: expandedCard === portal.id ? '#000' : accentColor,
                                padding: '18px 36px', 
                                borderRadius: '15px',
                                cursor: 'pointer',
                                fontSize: '13px', 
                                fontWeight: '900',
                                letterSpacing: '4px', 
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                transition: 'all 0.2s ease-in-out',
                                boxShadow: `0 0 20px ${accentColor}40`,
                                textTransform: 'uppercase'
                            }}
                          >
                            {expandedCard === portal.id ? 'TERMINATE' : 'ACCESS_DATA'}
                            {expandedCard === portal.id ? <ChevronUp size={22} strokeWidth={4}/> : <ChevronDown size={22} strokeWidth={4}/>}
                        </motion.button>
                    )}
                    <motion.a 
                        whileHover={{ color: accentColor, scale: 1.3 }}
                        href={portal.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ color: textColor, padding: '15px' }}
                    >
                        <ExternalLink size={28}/>
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
                    style={{ borderTop: `2px solid ${borderColor}`, background: isHackerMode ? 'rgba(0,0,0,0.6)' : '#fff' }}
                  >
                    <div style={{ padding: '60px 20px', display: 'flex', justifyContent: 'center' }}>
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
                                <div style={{ fontSize: '12px', letterSpacing: '4px', opacity: 0.5, marginBottom: '10px' }}>{stat.label}</div>
                                <div style={{ fontSize: '18px', fontWeight: '900' }}>{stat.value}</div>
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

      {/* --- FOOTER ADDED BELOW --- */}
      <footer style={{ 
        borderTop: `1px solid ${borderColor}`, 
        padding: '100px 60px 60px', 
        backgroundColor: isHackerMode ? '#000' : '#f8fafc',
        marginTop: '50px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '50px',
          textAlign: 'left'
        }}>
          <div>
            <h4 style={{ color: accentColor, fontSize: '11px', letterSpacing: '3px', marginBottom: '20px' }}>IDENTITY_LOG</h4>
            <p style={{ fontSize: '12px', lineHeight: '2', opacity: 0.7, fontFamily: 'Inter, sans-serif' }}>
              Srishti Goenka<br />
              Full Stack Developer & AI Enthusiast<br />
              Rajasthan, India.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: accentColor, fontSize: '11px', letterSpacing: '3px', marginBottom: '20px' }}>SYSTEM_STATUS</h4>
            <div style={{ fontSize: '20px', fontWeight: '900', color: textColor }}>ONLINE</div>
            <p style={{ fontSize: '9px', letterSpacing: '2px', marginTop: '10px', color: '#00ff00' }}>
              ● ALL_SYSTEMS_OPERATIONAL
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <h4 style={{ color: accentColor, fontSize: '11px', letterSpacing: '3px', marginBottom: '20px' }}>NETWORK_NODES</h4>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end' }}>
              <motion.a whileHover={{ color: accentColor }} href="https://github.com/srishti885" target="_blank" style={{ color: textColor }}><GithubIcon size={22}/></motion.a>
              <motion.a whileHover={{ color: accentColor }} href="https://www.linkedin.com/in/srishti-goenka-5021aa24a/" target="_blank" style={{ color: textColor }}><Linkedin size={22}/></motion.a>
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '80px', 
          paddingTop: '30px', 
          borderTop: `1px solid ${isHackerMode ? '#111' : '#e2e8f0'}`,
          textAlign: 'center' 
        }}>
          <p style={{ color: isHackerMode ? '#222' : '#94a3b8', fontSize: '10px', letterSpacing: '8px', fontWeight: '900' }}>
            © 2026 SRISHTI GOENKA // PORTAL_NODE_01
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;