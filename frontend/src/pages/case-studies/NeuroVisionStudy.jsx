import { ShieldCheck, Zap, Globe, Github, ExternalLink, ArrowRight, CheckCircle, Image as ImageIcon, Cloud, Database, Layers } from 'lucide-react';
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const NeuroVisionStudy = () => {
  const { isHackerMode } = useTheme();

  // --- Dynamic Theme Variables ---
  const accentColor = isHackerMode ? '#00c4cc' : '#2563eb';
  const textColor = isHackerMode ? '#fff' : '#0f172a';
  const subTextColor = isHackerMode ? '#666' : '#64748b';
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
        fontFamily: '"Syncopate", sans-serif'
      }}
    >
      
      {/* 1. Header Section */}
      <motion.div variants={item} style={{ marginBottom: '80px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
          <ImageIcon size={60} color={accentColor} />
          <h1 style={{ 
            fontSize: 'clamp(35px, 7vw, 75px)', 
            fontWeight: '900', 
            letterSpacing: '-4px', 
            color: textColor 
          }}>
            Visionary <span style={{ color: accentColor }}>Nexus</span>
          </h1>
        </div>
        <p style={{ color: accentColor, fontSize: '12px', fontWeight: '900', letterSpacing: '8px', opacity: 0.8 }}>
          NEURAL_ASSET_MANAGEMENT_SYSTEM
        </p>
      </motion.div>

      {/* 2. IMPACT METRICS SECTION */}
      <motion.div variants={container} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '60px' }}>
        {[
          { label: "STORAGE OVERHEAD", val: "-40%" },
          { label: "RENDERING LATENCY", val: "-30%" },
          { label: "DATA ISOLATION", val: "100%" },
          { label: "UI RESPONSIVENESS", val: "ULTRA" }
        ].map((m, i) => (
          <motion.div key={i} variants={item} whileHover={{ y: -5 }} style={{
            ...metricBoxStyle,
            backgroundColor: cardBg,
            borderColor: borderColor
          }}>
            <div style={{ fontSize: '42px', fontWeight: '900', color: accentColor }}>{m.val}</div>
            <div style={{ fontSize: '10px', color: subTextColor, fontWeight: '800', letterSpacing: '2px' }}>{m.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* 3. Project Description Card */}
      <motion.div variants={item} style={{ 
        ...bigCardStyle, 
        backgroundColor: isHackerMode ? 'rgba(0,196,204,0.03)' : '#f1f5f9',
        borderColor: borderColor
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
          <Layers size={20} color={accentColor} />
          <h3 style={{...labelStyle, color: subTextColor}}>PROJECT DESCRIPTION</h3>
        </div>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: textColor, fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
          Visionary Nexus is a specialized digital asset management platform. It uses a neural-integrated backend to generate high-quality graphical assets, while leveraging cloud optimization to ensure 40% less storage overhead compared to traditional local hosting.
        </p>
      </motion.div>

      {/* 4. Core Capabilities & Utility Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
        <motion.div variants={item} style={{...smallCardStyle, backgroundColor: cardBg, borderColor: borderColor}}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <Zap size={20} color={accentColor} />
            <h3 style={{...labelStyle, color: subTextColor}}>CORE CAPABILITIES</h3>
          </div>
          <ul style={{...listStyle, color: textColor}}>
            {["AI Image Generation prompts", "Cloudinary storage optimization", "Secure JWT & RBAC Auth", "React Lazy Loading Optimization"].map((text, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'Inter, sans-serif' }}>
                <CheckCircle size={16} color={accentColor} /> {text}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div variants={item} style={{...smallCardStyle, backgroundColor: cardBg, borderColor: borderColor}}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <Globe size={20} color={accentColor} />
            <h3 style={{...labelStyle, color: subTextColor}}>THE UTILITY</h3>
          </div>
          <p style={{ color: isHackerMode ? '#fff' : '#475569', fontSize: '16px', fontWeight: '700', lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
            By moving asset logic to the cloud, it eliminates local storage dependency. It’s a hub for designers to generate and archive assets in a private, secure neural vault.
          </p>
        </motion.div>
      </div>

      {/* 5. SYSTEM ARCHITECTURE FLOW */}
      <motion.div variants={item} style={{ marginBottom: '80px', textAlign: 'center' }}>
        <h3 style={{...labelStyle, color: subTextColor}}>SYSTEM ARCHITECTURE FLOW</h3>
        
        <div style={{ 
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', 
          background: cardBg, padding: '45px', borderRadius: '30px', 
          border: `1px dashed ${isHackerMode ? '#333' : '#cbd5e1'}`, marginTop: '30px' 
        }}>
          {["User Prompt", "Tailwind UI", "Node Gateway", "Neural Engine", "Cloudinary", "Atlas DB"].map((step, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ fontSize: '11px', fontWeight: '900', color: idx % 2 === 0 ? textColor : accentColor }}>{step}</div>
              {idx !== 5 && <ArrowRight size={14} color={isHackerMode ? "#333" : "#cbd5e1"} />}
            </div>
          ))}
        </div>
      </motion.div>

      {/* 6. OUTCOMES SECTION */}
      <motion.div variants={item} style={{ marginBottom: '80px' }}>
        <h3 style={{...labelStyle, color: subTextColor, textAlign: 'center', marginBottom: '40px'}}>PROJECT OUTCOMES</h3>
        
        
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {[
            { icon: <Cloud size={20}/>, text: "Optimized Storage" },
            { icon: <Zap size={20}/>, text: "Fast Rendering" },
            { icon: <ShieldCheck size={20}/>, text: "RBAC Security" },
            { icon: <Globe size={20}/>, text: "Global Gallery" }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -8, borderColor: accentColor }} style={{
              ...outcomeBox,
              backgroundColor: cardBg,
              borderColor: borderColor
            }}>
              <div style={{ color: accentColor, marginBottom: '15px' }}>{item.icon}</div>
              <p style={{ fontSize: '13px', fontWeight: '800', color: textColor }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 7. Action Links */}
      <motion.div variants={item} style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '80px', flexWrap: 'wrap' }}>
        <motion.a whileHover={{ y: -5 }} href="https://github.com/srishtigoenka/Visionary-Nexus" target="_blank" style={{...btnSecondary, color: textColor, borderColor: borderColor}}>
          <Github size={18} /> GITHUB_REPO
        </motion.a>
        <motion.a whileHover={{ y: -5 }} href="https://visionary-nexus.vercel.app" target="_blank" style={{...btnPrimary, backgroundColor: accentColor}}>
          <ExternalLink size={18} /> VIEW_LIVE_STUDIO
        </motion.a>
      </motion.div>

    </motion.div>
  );
};

// Refined CSS Styles
const metricBoxStyle = { padding: '30px', borderRadius: '25px', border: '1px solid', textAlign: 'center', transition: 'all 0.3s ease' };
const labelStyle = { fontSize: '10px', fontWeight: '900', letterSpacing: '4px' };
const bigCardStyle = { padding: '50px', borderRadius: '40px', border: '1px solid', marginBottom: '40px' };
const smallCardStyle = { padding: '40px', borderRadius: '35px', border: '1px solid' };
const listStyle = { listStyle: 'none', padding: 0, display: 'grid', gap: '18px', fontSize: '13px', fontWeight: '700' };
const outcomeBox = { padding: '35px', border: '1px solid', borderRadius: '25px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'all 0.3s ease' };
const btnPrimary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 40px', color: 'white', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '12px' };
const btnSecondary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 40px', border: '1px solid', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '12px' };

export default NeuroVisionStudy;