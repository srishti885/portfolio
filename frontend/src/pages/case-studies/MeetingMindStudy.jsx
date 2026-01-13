import { Cpu, Layout, ShieldCheck, Zap, Globe, Github, ExternalLink, ArrowRight, CheckCircle, FileText, Database } from 'lucide-react';
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const MeetingMindStudy = () => {
  const { isHackerMode } = useTheme();

  // --- Dynamic Theme Tokens ---
  const accentColor = isHackerMode ? '#00c4cc' : '#2563eb';
  const textColor = isHackerMode ? '#fff' : '#1e293b';
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
      
      {/* 1. Header with Neon Icon */}
      <motion.div variants={item} style={{ marginBottom: '80px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
          <Cpu size={60} color={accentColor} />
          <h1 style={{ 
            fontSize: 'clamp(35px, 7vw, 75px)', 
            fontWeight: '900', 
            letterSpacing: '-4px', 
            color: textColor 
          }}>
            MeetingMind <span style={{ color: accentColor }}>AI</span>
          </h1>
        </div>
        <p style={{ color: accentColor, fontSize: '12px', fontWeight: '900', letterSpacing: '8px', opacity: 0.8 }}>
          NEURAL_ENTERPRISE_COLLABORATION
        </p>
      </motion.div>

      {/* 2. IMPACT METRICS SECTION */}
      <motion.div variants={container} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '60px' }}>
        {[
          { label: "EFFORT REDUCTION", val: "70%" },
          { label: "DELIVERY SPEED", val: "40%" },
          { label: "DATA ISOLATION", val: "100%" },
          { label: "PAGE LOAD CUT", val: "25%" }
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

      {/* 3. Project Overview Card */}
      <motion.div variants={item} style={{ 
        ...bigCardStyle, 
        backgroundColor: isHackerMode ? 'rgba(0,196,204,0.03)' : '#f1f5f9',
        borderColor: borderColor
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
          <Layout size={20} color={accentColor} />
          <h3 style={{...labelStyle, color: subTextColor}}>PROJECT OVERVIEW</h3>
        </div>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: textColor, fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
          MeetingMind AI is an AI-powered enterprise platform that automatically transcribes, summarizes, and converts meeting audio/video data into actionable insights. It prevents information loss and enables faster, structured decision-making for organizations.
        </p>
      </motion.div>

      {/* 4. Neural Pipeline Visualizer */}
      <motion.div variants={item} style={{ marginBottom: '80px', textAlign: 'center' }}>
        <h3 style={{...labelStyle, color: subTextColor, marginBottom: '30px'}}>NEURAL DATA PIPELINE</h3>
        
        

        <div style={{ 
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', 
          background: cardBg, padding: '45px', borderRadius: '30px', 
          border: `1px dashed ${isHackerMode ? '#333' : '#cbd5e1'}`, marginTop: '10px' 
        }}>
          {["AV Upload", "Whisper Core", "Llama 3.3", "Task Logic", "RBAC Vault", "PDF Export"].map((step, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ fontSize: '11px', fontWeight: '900', color: idx % 2 === 0 ? textColor : accentColor }}>{step}</div>
              {idx !== 5 && <ArrowRight size={14} color={isHackerMode ? "#333" : "#cbd5e1"} />}
            </div>
          ))}
        </div>
      </motion.div>

      {/* 5. Key Capabilities & Utility */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
        <motion.div variants={item} style={{...smallCardStyle, backgroundColor: cardBg, borderColor: borderColor}}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <Zap size={20} color={accentColor} />
            <h3 style={{...labelStyle, color: subTextColor}}>CORE CAPABILITIES</h3>
          </div>
          <ul style={{...listStyle, color: textColor}}>
            {["Multi-speaker diarization", "Groq-speed Summarization", "Sentiment Analysis", "Action Item Extraction"].map((text, idx) => (
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
            Designed for high-end enterprise collaboration, it ensures critical knowledge retention and improves accountability across management levels through structured AV data mining.
          </p>
        </motion.div>
      </div>

      {/* 6. Challenges */}
      <motion.div variants={item} style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
          <ShieldCheck size={24} color={accentColor} />
          <h3 style={{...labelStyle, color: subTextColor}}>CHALLENGES & STRATEGIC SOLUTIONS</h3>
        </div>
        <div style={{ display: 'grid', gap: '15px' }}>
          {[
            { q: "Unstructured meeting data", a: "Neural processing & speaker diarization" },
            { q: "Data security concerns", a: "End-to-end encryption & RBAC" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ x: 10, borderColor: accentColor }}
              style={{ 
                display: 'flex', justifyContent: 'space-between', padding: '25px', 
                borderRadius: '20px', border: `1px solid ${borderColor}`,
                backgroundColor: cardBg
              }}
            >
              <span style={{ fontWeight: '900', color: textColor, fontSize: '13px' }}>{item.q}</span>
              <span style={{ color: accentColor, fontWeight: '800', fontSize: '13px' }}>➔ {item.a}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 7. Action Links */}
      <motion.div variants={item} style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '80px', flexWrap: 'wrap' }}>
        <motion.a whileHover={{ y: -5 }} href="https://github.com/srishtigoenka/MeetingMind-AI" target="_blank" style={{...btnSecondary, color: textColor, borderColor: borderColor}}>
          <Github size={18} /> SOURCE_CODE
        </motion.a>
        <motion.a whileHover={{ y: -5 }} href="https://meetingmind-ai-frontend.vercel.app" target="_blank" style={{...btnPrimary, backgroundColor: accentColor}}>
          <ExternalLink size={18} /> LIVE_DEPLOYMENT
        </motion.a>
      </motion.div>

    </motion.div>
  );
};

// Styles
const metricBoxStyle = { padding: '30px', borderRadius: '25px', border: '1px solid', textAlign: 'center', transition: 'all 0.3s ease' };
const labelStyle = { fontSize: '10px', fontWeight: '900', letterSpacing: '4px' };
const bigCardStyle = { padding: '50px', borderRadius: '40px', border: '1px solid', marginBottom: '40px' };
const smallCardStyle = { padding: '40px', borderRadius: '35px', border: '1px solid' };
const listStyle = { listStyle: 'none', padding: 0, display: 'grid', gap: '18px', fontSize: '13px', fontWeight: '700' };
const btnPrimary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 40px', color: 'white', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '12px' };
const btnSecondary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 40px', border: '1px solid', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '12px' };

export default MeetingMindStudy;