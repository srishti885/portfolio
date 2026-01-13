import { Cpu, Layout, ShieldCheck, Zap, Globe, Github, ExternalLink, ArrowRight, CheckCircle, Code2, FileSearch, BarChart3 } from 'lucide-react';
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const CodeSentinelStudy = () => {
  const { isHackerMode } = useTheme();

  // --- Theme Variables ---
  const accentColor = isHackerMode ? '#00c4cc' : '#2563eb';
  const bgColor = isHackerMode ? '#000' : '#ffffff';
  const textColor = isHackerMode ? '#fff' : '#0f172a';
  const cardBg = isHackerMode ? '#050505' : '#f8fafc';
  const borderColor = isHackerMode ? '#111' : '#e2e8f0';

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px', 
        color: textColor,
        fontFamily: '"Syncopate", sans-serif',
        backgroundColor: isHackerMode ? 'transparent' : '#fff',
        borderRadius: '30px'
      }}
    >
      {/* Header Section */}
      <motion.div variants={item} style={{ marginBottom: '80px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
          <Code2 size={60} color={accentColor} />
          <h1 style={{ 
            fontSize: 'clamp(35px, 6vw, 70px)', 
            fontWeight: '900', 
            letterSpacing: '-3px', 
            color: textColor 
          }}>
            CodeSentinel <span style={{ color: accentColor }}>AI</span>
          </h1>
        </div>
        <p style={{ color: accentColor, fontSize: '12px', fontWeight: '900', letterSpacing: '8px', opacity: 0.8 }}>
          INTELLIGENT_CODE_AUDITOR_PRO
        </p>
      </motion.div>

      {/* IMPACT METRICS SECTION */}
      <motion.div variants={container} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '60px' }}>
        {[
          { label: "DEBUGGING SPEED", val: "30%+" },
          { label: "HEALTH ACCURACY", val: "95%" },
          { label: "REFACTORING", val: "INSTANT" },
          { label: "SYSTEM UPTIME", val: "100%" }
        ].map((m, i) => (
          <motion.div key={i} variants={item} whileHover={{ y: -5 }} style={{
            ...metricBoxStyle,
            backgroundColor: cardBg,
            borderColor: borderColor
          }}>
            <div style={{ fontSize: '42px', fontWeight: '900', color: accentColor }}>{m.val}</div>
            <div style={{ fontSize: '10px', color: isHackerMode ? '#fff' : '#64748b', fontWeight: '800', letterSpacing: '2px' }}>{m.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Description Card */}
      <motion.div variants={item} style={{ 
        ...bigCardStyle, 
        backgroundColor: isHackerMode ? 'rgba(0,196,204,0.03)' : '#f1f5f9',
        borderColor: borderColor
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
          <FileSearch size={20} color={accentColor} />
          <h3 style={labelStyle}>PROJECT DESCRIPTION</h3>
        </div>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: textColor, fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
          AI Code Critic Pro (CodeSentinel AI) is a professional-grade tool that analyzes source code to detect bugs, performance issues, and quality gaps. It provides real-time feedback, automated refactoring, and a "Health Score" to help developers write secure code.
        </p>
      </motion.div>

      {/* Key Capabilities & Utility Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
        <motion.div variants={item} style={{...smallCardStyle, backgroundColor: cardBg, borderColor: borderColor}}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <Zap size={20} color={accentColor} />
            <h3 style={labelStyle}>CORE CAPABILITIES</h3>
          </div>
          <ul style={{...listStyle, color: textColor}}>
            {["AI-powered deep logic scanning", "Percentage-based Health Score", "One-click corrected refactoring", "PDF audit report export"].map((text, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Inter, sans-serif' }}>
                <CheckCircle size={16} color={accentColor} /> {text}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div variants={item} style={{...smallCardStyle, backgroundColor: cardBg, borderColor: borderColor}}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <BarChart3 size={20} color={accentColor} />
            <h3 style={labelStyle}>THE UTILITY</h3>
          </div>
          <p style={{ color: isHackerMode ? '#fff' : '#475569', fontSize: '16px', fontWeight: '700', lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
            Acts as a virtual code reviewer, saving hours of manual review time. Helps teams maintain consistent standards and write cleaner, optimized code from day one.
          </p>
        </motion.div>
      </div>

      {/* SYSTEM ARCHITECTURE FLOW */}
      <motion.div variants={item} style={{ marginBottom: '80px', textAlign: 'center' }}>
        <h3 style={labelStyle}>SYSTEM ARCHITECTURE FLOW</h3>
        
        <div style={{ 
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', 
          background: isHackerMode ? '#050505' : '#f8fafc', 
          padding: '45px', borderRadius: '30px', 
          border: `1px dashed ${isHackerMode ? '#333' : '#cbd5e1'}`, marginTop: '30px' 
        }}>
          {["Code Input", "React SPA", "Node API", "AI Engine", "Scoring", "Vault"].map((step, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ fontSize: '11px', fontWeight: '900', color: idx % 2 === 0 ? textColor : accentColor }}>{step}</div>
              {idx !== 5 && <ArrowRight size={14} color={isHackerMode ? "#333" : "#cbd5e1"} />}
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Links */}
      <motion.div variants={item} style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '80px', flexWrap: 'wrap' }}>
        <motion.a whileHover={{ y: -5 }} href="https://github.com/srishti885/AI-Code-Critic" target="_blank" style={{...btnSecondary, color: textColor, borderColor: borderColor}}>
          <Github size={18} /> SOURCE_CODE
        </motion.a>
        <motion.a whileHover={{ y: -5 }} href="https://ai-code-critic.vercel.app" target="_blank" style={{...btnPrimary, backgroundColor: accentColor}}>
          <ExternalLink size={18} /> LIVE_DEPLOYMENT
        </motion.a>
      </motion.div>

    </motion.div>
  );
};

const metricBoxStyle = { padding: '30px', borderRadius: '25px', border: '1px solid', textAlign: 'center', transition: 'all 0.3s ease' };
const labelStyle = { color: '#64748b', fontSize: '11px', fontWeight: '900', letterSpacing: '4px' };
const bigCardStyle = { padding: '50px', borderRadius: '40px', border: '1px solid', marginBottom: '40px' };
const smallCardStyle = { padding: '40px', borderRadius: '35px', border: '1px solid' };
const listStyle = { listStyle: 'none', padding: 0, display: 'grid', gap: '18px', fontSize: '13px', fontWeight: '700' };
const btnPrimary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 45px', color: 'white', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '12px' };
const btnSecondary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 45px', border: '1px solid', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '12px' };

export default CodeSentinelStudy;