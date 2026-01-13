import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { GraduationCap, Briefcase, Zap, Code, Database, Brain, Terminal, Github, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Journey = () => {
  const { isHackerMode } = useTheme();
  const [active, setActive] = useState(false);
  useEffect(() => { setActive(true); }, []);

  // --- ALIGNED THEME COLORS ---
  const accentColor = isHackerMode ? '#00c4cc' : '#2563eb'; 
  const bgColor = isHackerMode ? '#000' : '#f1f5f9'; 
  const textColor = isHackerMode ? '#fff' : '#0f172a';
  const subTextColor = isHackerMode ? '#888' : '#475569';
  const borderColor = isHackerMode ? '#111' : '#cbd5e1';
  const cardBg = isHackerMode ? 'rgba(255,255,255,0.01)' : '#ffffff';
  const labelColor = isHackerMode ? '#333' : '#64748b';

  const skills = [
    { name: "React / Next.js", level: 95, icon: <Code size={18} /> },
    { name: "Node / Express", level: 90, icon: <Database size={18} /> },
    { name: "MongoDB / SQL", level: 85, icon: <Database size={18} /> },
    { name: "AI Integration (Groq/LLMs)", level: 88, icon: <Brain size={18} /> },
    { name: "System Architecture", level: 80, icon: <Zap size={18} /> }
  ];

  const timeline = [
    {
      year: "2024 - PRESENT",
      title: "Full Stack AI Developer",
      org: "Personal Labs / Freelance",
      desc: "Architecting high-performance neural apps like MeetingMind AI & CodeSentinel.",
      icon: <Briefcase size={20} />
    },
    {
      year: "2021 - 2025",
      title: "Bachelor of Technology",
      org: "Computer Science & Engineering",
      desc: "Deep diving into data structures, algorithms, and scalable web systems.",
      icon: <GraduationCap size={20} />
    }
  ];

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

      <main style={{ paddingTop: '180px', paddingBottom: '100px', maxWidth: '1300px', margin: '0 auto', padding: '0 60px' }}>
        
        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '120px', textAlign: 'left' }}
        >
          <h1 style={{ fontSize: 'clamp(50px, 10vw, 100px)', fontWeight: '900', letterSpacing: '-6px', lineHeight: '0.9', marginBottom: '30px' }}>
            THE <br /><span style={{ color: accentColor, textShadow: isHackerMode ? `0 0 30px ${accentColor}44` : 'none' }}>EVOLUTION.</span>
          </h1>
          <div style={{ display: 'flex', gap: '15px' }}>
             <motion.div whileHover={{ scale: 1.05 }} style={{...badgeStyle, background: cardBg, borderColor: borderColor}}><Terminal size={14} color={accentColor} /> LEETCODE: 250+</motion.div>
             <motion.div whileHover={{ scale: 1.05 }} style={{...badgeStyle, background: cardBg, borderColor: borderColor}}><Code size={14} color={accentColor} /> PROJECTS: 10+</motion.div>
          </div>
        </motion.section>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '100px', alignItems: 'start' }}>
          
          {/* NEURAL TIMELINE */}
          <section>
            <h3 style={{...sectionLabel, color: labelColor}}>PATHWAY_LOG</h3>
            <div style={{ borderLeft: `1px solid ${isHackerMode ? 'rgba(0,196,204,0.2)' : '#cbd5e1'}`, paddingLeft: '50px', marginLeft: '10px' }}>
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                  style={{ marginBottom: '80px', position: 'relative' }}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.3 }}
                    style={{...timelineNodeStyle, background: bgColor, borderColor: accentColor}}
                  ></motion.div>
                  <span style={{ color: accentColor, fontSize: '11px', fontWeight: '900', letterSpacing: '3px' }}>{item.year}</span>
                  <h4 style={{ fontSize: '28px', fontWeight: '900', margin: '15px 0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: textColor, fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px', opacity: 0.6 }}>{item.org}</p>
                  <p style={{ color: subTextColor, fontSize: '16px', lineHeight: '1.8', maxWidth: '450px', fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SKILL MATRIX */}
          <section>
            <h3 style={{...sectionLabel, color: labelColor}}>CORE_CAPABILITIES</h3>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ background: cardBg, padding: '50px', borderRadius: '40px', border: `1px solid ${borderColor}`, boxShadow: !isHackerMode ? '0 10px 30px rgba(0,0,0,0.03)' : 'none' }}
            >
              {skills.map((skill, index) => (
                <div key={index} style={{ marginBottom: '35px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '800', fontSize: '13px', color: textColor }}>
                      <span style={{ color: accentColor }}>{skill.icon}</span>
                      {skill.name}
                    </div>
                    <span style={{ color: subTextColor, fontSize: '11px', fontWeight: '900' }}>{skill.level}%</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: isHackerMode ? 'rgba(255,255,255,0.03)' : '#e2e8f0', borderRadius: '10px' }}>
                    <motion.div 
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                      style={{ 
                        height: '100%', 
                        background: isHackerMode ? `linear-gradient(90deg, ${accentColor}, #008a8f)` : `linear-gradient(90deg, ${accentColor}, #6366f1)`,
                        boxShadow: `0 0 15px ${accentColor}44`,
                        borderRadius: '10px'
                      }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </section>
        </div>

        {/* SYSTEM WORKFLOW */}
        <section style={{ marginTop: '150px', textAlign: 'center' }}>
          <h3 style={{...sectionLabel, textAlign: 'center', color: labelColor}}>SYSTEM_WORKFLOW</h3>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '50px' }}>
            {["PROBLEM", "LOGIC", "AI_AUDIT", "DEPLOY"].map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, borderColor: accentColor }}
                transition={{ delay: idx * 0.1 }}
                style={{...flowBoxStyle, background: cardBg, borderColor: borderColor}}
              >
                <span style={{ fontSize: '10px', color: accentColor, fontWeight: '900' }}>SYS_0{idx+1}</span>
                <div style={{ fontWeight: '900', fontSize: '18px', marginTop: '10px' }}>{step}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ borderTop: `1px solid ${borderColor}`, padding: '100px 60px 50px', textAlign: 'center' }}>
         <p style={{ color: labelColor, fontSize: '10px', letterSpacing: '8px', fontWeight: '900', marginBottom: '20px' }}>DESIGNED & ENGINEERED BY SRISHTI GOENKA</p>
         <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
            <motion.a whileHover={{ scale: 1.2, color: accentColor }} href="https://github.com/srishti885" target="_blank" rel="noreferrer"><Github size={20} color={labelColor} /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: accentColor }} href="https://www.linkedin.com/in/srishti-goenka-5021aa24a/" target="_blank" rel="noreferrer"><Linkedin size={20} color={labelColor} /></motion.a>
         </div>
      </footer>
    </div>
  );
};

const sectionLabel = { fontSize: '10px', fontWeight: '900', letterSpacing: '6px', marginBottom: '60px', textAlign: 'left' };
const badgeStyle = { padding: '12px 25px', borderRadius: '15px', border: '1px solid', fontSize: '11px', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '10px', letterSpacing: '1px', transition: '0.3s' };
const timelineNodeStyle = { position: 'absolute', left: '-61px', top: '5px', width: '20px', height: '20px', borderRadius: '50%', border: '2px solid', boxShadow: '0 0 20px rgba(0,196,204,0.1)' };
const flowBoxStyle = { padding: '40px', border: '1px solid', borderRadius: '30px', width: '220px', transition: '0.4s ease', cursor: 'default' };

export default Journey;