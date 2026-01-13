import { useState } from "react";
import Navbar from "../components/Navbar";
import { Cpu, Code2, ImageIcon, ArrowRight, Mail, Github, Linkedin, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import MeetingMindStudy from "./case-studies/MeetingMindStudy";
import CodeSentinelStudy from "./case-studies/CodeSentinelStudy";
import NeuroVisionStudy from "./case-studies/NeuroVisionStudy";

const Projects = () => {
  const { isHackerMode } = useTheme();
  const [view, setView] = useState('grid'); 
  const [selectedProject, setSelectedProject] = useState(0);

  // --- Dynamic Theme Styles ---
  const accentColor = isHackerMode ? '#00c4cc' : '#2563eb';
  const bgColor = isHackerMode ? '#000' : '#f1f5f9';
  const textColor = isHackerMode ? '#fff' : '#0f172a';
  const subTextColor = isHackerMode ? '#888' : '#64748b';
  const cardBg = isHackerMode ? 'rgba(255, 255, 255, 0.01)' : '#ffffff';
  const borderColor = isHackerMode ? '#111' : '#cbd5e1';

  const projectData = [
    {
      id: 0,
      title: "MeetingMind AI",
      icon: <Cpu size={32} color={accentColor} />,
      tech: "Groq API • MERN • jsPDF",
      desc: "Neural Enterprise SaaS jo multimedia analysis ko automate karta hai.",
      component: <MeetingMindStudy />
    },
    {
      id: 1,
      title: "CodeSentinel AI",
      icon: <Code2 size={32} color={accentColor} />,
      tech: "React • Node.js • AI Auditor",
      desc: "Intelligent auditor jo real-time code health scores provide karta hai.",
      component: <CodeSentinelStudy />
    },
    {
      id: 2,
      title: "Visionary Nexus",
      icon: <ImageIcon size={32} color={accentColor} />,
      tech: "MERN • Cloudinary • RBAC",
      desc: "Neural asset management jisme 40% storage overhead kam kiya gaya hai.",
      component: <NeuroVisionStudy />
    }
  ];

  return (
    <div style={{ 
      backgroundColor: bgColor, 
      minHeight: '100vh', 
      color: textColor, 
      fontFamily: '"Syncopate", sans-serif',
      transition: 'background 0.5s ease'
    }}>
      <Navbar />

      <main style={{ paddingTop: '180px', paddingBottom: '60px' }}>
        <AnimatePresence mode="wait">
          {view === 'grid' ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 60px' }}
            >
              <h1 style={{ fontSize: 'clamp(40px, 8vw, 75px)', fontWeight: '900', marginBottom: '60px', letterSpacing: '-3px' }}>
                THE <span style={{ color: accentColor }}>VAULT.</span>
              </h1>
              
              <div className="custom-scroll" style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '50px' }}>
                {projectData.map((project, index) => (
                  <motion.div 
                    key={project.id} 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ 
                      y: -15, 
                      borderColor: accentColor,
                      boxShadow: !isHackerMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.08)' : 'none'
                    }}
                    style={{
                      ...cardStyle,
                      backgroundColor: cardBg,
                      borderColor: borderColor
                    }}
                    onClick={() => { setSelectedProject(project.id); setView('detail'); window.scrollTo(0,0); }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
                      <div style={{ color: accentColor, fontWeight: '900', fontSize: '14px' }}>0{project.id + 1}</div>
                      {project.icon}
                    </div>
                    <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '15px', color: textColor }}>{project.title}</h2>
                    <p style={{ color: accentColor, fontSize: '11px', fontWeight: '800', marginBottom: '20px', letterSpacing: '1px' }}>{project.tech}</p>
                    <p style={{ color: subTextColor, marginBottom: '40px', lineHeight: '1.6', fontSize: '15px', fontFamily: 'Inter, sans-serif' }}>{project.desc}</p>
                    
                    <motion.div 
                      whileHover={{ x: 10 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '900', fontSize: '11px', letterSpacing: '2px', color: textColor }}
                    >
                      VIEW CASE STUDY <ArrowRight size={14} color={accentColor} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <div style={{ width: '100%', height: '1px', background: isHackerMode ? 'rgba(255,255,255,0.1)' : '#cbd5e1', position: 'relative', marginTop: '20px' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '35%' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{ height: '2px', background: accentColor, position: 'absolute', top: '-0.5px' }}
                  ></motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{ position: 'relative' }}
            >
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: accentColor, color: 'white' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setView('grid'); window.scrollTo(0,0); }}
                style={{
                  ...backButtonStyle,
                  backgroundColor: isHackerMode ? 'rgba(255,255,255,0.05)' : '#ffffff',
                  color: textColor,
                  borderColor: borderColor
                }}
              >
                ← BACK TO VAULT
              </motion.button>
              <div style={{ color: textColor }}>
                {projectData[selectedProject].component}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER SECTION */}
      <footer style={{ 
        borderTop: `1px solid ${borderColor}`, 
        background: isHackerMode ? '#050505' : '#f8fafc', 
        paddingTop: '80px', 
        paddingBottom: '40px', 
        marginTop: '100px' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', marginBottom: '60px' }}>
            
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: '900', color: accentColor, marginBottom: '20px' }}>SRISHTI GOENKA</h3>
              <p style={{ color: subTextColor, lineHeight: '1.6', maxWidth: '300px', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                Architecting neural interfaces and high-performance MERN applications with a focus on AI integration.
              </p>
            </div>

            <div>
              <h4 style={{...footerLabelStyle, color: isHackerMode ? '#333' : '#94a3b8'}}>RESOURCES</h4>
              <ul style={footerListStyle}>
                <li><motion.a whileHover={{ x: 5, color: accentColor }} href="https://github.com/srishtigoenka" target="_blank" style={{...linkStyle, color: subTextColor}}>GitHub</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: accentColor }} href="https://linkedin.com/in/srishti-goenka-b5305925a" target="_blank" style={{...linkStyle, color: subTextColor}}>LinkedIn</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: accentColor }} href="https://leetcode.com/u/srishtigoenka305" target="_blank" style={{...linkStyle, color: subTextColor}}>LeetCode</motion.a></li>
              </ul>
            </div>

            <div>
              <h4 style={{...footerLabelStyle, color: isHackerMode ? '#333' : '#94a3b8'}}>DEVELOPER HUB</h4>
              <div style={{ display: 'flex', gap: '25px', marginTop: '10px' }}>
                {[
                  { icon: <Github size={22} />, link: "https://github.com/srishtigoenka" },
                  { icon: <Linkedin size={22} />, link: "https://linkedin.com/in/srishti-goenka-b5305925a" },
                  { icon: <Terminal size={22} />, link: "https://leetcode.com/u/srishtigoenka305" }
                ].map((item, i) => (
                  <motion.a 
                    key={i}
                    href={item.link} 
                    target="_blank" 
                    whileHover={{ y: -5, color: accentColor }}
                    style={{ color: textColor }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
              <div style={{ marginTop: '35px' }}>
                <p style={{ color: textColor, fontSize: '13px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={14} color={accentColor} />
                  srishtigoenka305@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${borderColor}`, paddingTop: '40px', textAlign: 'center' }}>
            <p style={{ color: isHackerMode ? '#222' : '#94a3b8', fontSize: '10px', letterSpacing: '5px', fontWeight: '900' }}>
              DESIGNED & ENGINEERED BY SRISHTI GOENKA // 2026
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .custom-scroll::-webkit-scrollbar { height: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: ${isHackerMode ? '#222' : '#cbd5e1'}; border-radius: 10px; }
      `}</style>
    </div>
  );
};

const cardStyle = {
  border: '1px solid',
  borderRadius: '40px',
  padding: '45px',
  width: '420px', 
  flexShrink: 0,
  cursor: 'pointer',
  transition: 'all 0.4s ease'
};

const backButtonStyle = {
  position: 'fixed', top: '130px', left: '60px',
  border: '1px solid', padding: '12px 24px',
  borderRadius: '12px', cursor: 'pointer', fontWeight: '900',
  fontSize: '11px', letterSpacing: '1px', zIndex: 100, backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease'
};

const linkStyle = { textDecoration: 'none', transition: '0.3s', display: 'inline-block' };
const footerLabelStyle = { fontSize: '11px', fontWeight: '900', letterSpacing: '3px', marginBottom: '25px' };
const footerListStyle = { listStyle: 'none', padding: 0, fontSize: '14px', fontWeight: '700', display: 'grid', gap: '12px' };

export default Projects;