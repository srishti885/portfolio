import { useState, useEffect } from "react";
import axios from "axios"; 
import Navbar from "../components/Navbar";
import myPhoto from "../assets/my-pic.jpeg"; 
import { User, BookOpen, Code, Zap, Send, Mail, MessageSquare, Lock, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion"; 
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isHackerMode } = useTheme();
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestData, setRequestData] = useState({ requesterName: "", requesterEmail: "" });
  
  // --- STATES FOR UNLOCK SYSTEM ---
  const [step, setStep] = useState(1); // 1: Info Form, 2: Access Code
  const [accessCode, setAccessCode] = useState("");

  useEffect(() => { setActive(true); }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset modal when closed
      setTimeout(() => { setStep(1); setAccessCode(""); setStatus(""); }, 300);
    }
  }, [isModalOpen]);

  const accentColor = isHackerMode ? '#00c4cc' : '#2563eb'; 
  const bgColor = isHackerMode ? '#000' : '#f1f5f9';
  const textColor = isHackerMode ? '#fff' : '#0f172a'; 
  const subTextColor = isHackerMode ? '#888' : '#475569';
  const borderColor = isHackerMode ? '#111' : '#cbd5e1';
  const cardBg = isHackerMode ? 'rgba(255,255,255,0.01)' : '#ffffff'; 

  // --- STEP 1: LOG REQUEST & SEND MAIL ---
  const handleResumeRequest = async (e) => {
    e.preventDefault();
    setStatus("LOGGING_IDENTITY...");
    try {
      await axios.post("http://localhost:5000/api/resume-request", requestData);
      setStatus("IDENTITY_VERIFIED_AWAITING_CODE");
      setStep(2); // Move to Access Code Screen
    } catch (err) {
      setStatus("CONNECTION_FAILED");
    }
  };

  // --- STEP 2: VERIFY CODE & DOWNLOAD ---
  const handleVerifyAndDownload = async (e) => {
    e.preventDefault();
    setStatus("VALIDATING_ACCESS_KEY...");
    try {
      const res = await axios.post("http://localhost:5000/api/resume/verify", { code: accessCode });
      
      if (res.data.success) {
        setStatus("ACCESS_GRANTED_DECRYPTING...");
        
        // --- UPDATED FILENAME HERE ---
        const link = document.createElement("a");
        link.href = "/Resume(11).pdf"; // MATCHING YOUR PUBLIC FOLDER FILENAME
        link.setAttribute("download", "Srishti_Goenka_Resume.pdf"); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
          setIsModalOpen(false);
          setStatus("");
        }, 3000);
      }
    } catch (err) {
      setStatus("INVALID_KEY_ACCESS_DENIED");
    }
  };

  const stats = [
    { label: "LEETCODE SOLVED", value: "200+", icon: <Code size={14} /> },
    { label: "ACADEMIC CGPA", value: "9.18", icon: <BookOpen size={14} /> },
    { label: "API EFFICIENCY", value: "+25%", icon: <Zap size={14} /> }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("ESTABLISHING_LINK...");
    try {
      const res = await axios.post("http://localhost:5000/api/contact/send", formData);
      if (res.data.status === "SUCCESS") {
        setStatus("DATA_SYNCHRONIZED_SUCCESSFULLY");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (err) {
      setStatus("LINK_FAILURE_RETRY_LATER");
    }
  };

  return (
    <div style={{ 
      backgroundColor: bgColor, minHeight: '100vh', color: textColor, 
      fontFamily: '"Syncopate", sans-serif', transition: 'all 0.5s ease',
      backgroundImage: !isHackerMode ? 'radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)' : 'none',
      backgroundSize: '32px 32px'
    }}>
      <Navbar />

      <main style={{ paddingTop: '180px', paddingBottom: '100px', maxWidth: '1300px', margin: '0 auto', padding: '0 60px' }}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            <motion.div whileHover={{ scale: 1.01 }} style={{...imageContainerStyle, borderColor: borderColor, boxShadow: !isHackerMode ? '0 20px 40px rgba(0,0,0,0.05)' : 'none'}}>
              <div style={{...glowOverlayStyle, boxShadow: isHackerMode ? `inset 0 0 100px ${accentColor}11` : 'none'}}></div>
              <img src={myPhoto} alt="Srishti Goenka" style={imgStyle} />
            </motion.div>
            
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }}
              style={{ ...floatingCardStyle, background: '#ffffff', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{...pulseDot, backgroundColor: accentColor}}></div>
                <span style={{ color: accentColor, fontWeight: '900', fontSize: '10px' }}>STATUS: </span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#000' }}>OPEN_TO_WORK</span>
              </div>
            </motion.div>
          </div>

          <div>
            <h3 style={{...labelStyle, color: isHackerMode ? '#333' : '#64748b'}}>IDENTITY_PROFILE</h3>
            <h1 style={headerStyle}>
              I AM <span style={{ color: accentColor }}>SRISHTI</span><br />
              <span style={{ fontSize: '0.4em', letterSpacing: '4px', color: isHackerMode ? '#444' : '#94a3b8' }}>[ MERN_DEVELOPER ]</span>
            </h1>
            <p style={{...bioTextStyle, color: subTextColor}}>
              Strategic Computer Science student at <span style={{ color: textColor, fontWeight: 'bold' }}>Poornima College</span>. 
              Specializing in the <span style={{ color: accentColor, fontWeight: 'bold' }}>MERN stack</span> and API-driven architectures.
            </p>

            <motion.div whileHover={{ x: 10 }} style={{ ...resumeActionBox, borderColor: borderColor, background: cardBg }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <span style={{ fontSize: '10px', color: isHackerMode ? '#333' : '#94a3b8', fontWeight: '900' }}>JAIPUR, RAJASTHAN</span>
                  <span style={{ fontSize: '14px', fontWeight: '700' }}>RESUME_V2.0.ENCRYPTED</span>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="resume-btn" 
                  style={{...downloadButtonStyle, color: accentColor, borderColor: accentColor, background: 'none', cursor: 'pointer'}}>
                  <Lock size={16} /> REQUEST_ACCESS
                </button>
            </motion.div>

            <div style={{ display: 'flex', gap: '50px', marginTop: '40px', borderTop: `1px solid ${borderColor}`, paddingTop: '30px' }}>
               {stats.map((s, i) => (
                 <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: accentColor, marginBottom: '5px' }}>
                       {s.icon} <span style={{ fontSize: '9px', fontWeight: '900', letterSpacing: '2px' }}>{s.label}</span>
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: '900', color: textColor }}>{s.value}</div>
                 </motion.div>
               ))}
            </div>
          </div>
        </motion.div>

        {/* WORKFLOW & CONTACT */}
        <section style={{ marginTop: '150px', borderTop: `1px solid ${borderColor}`, paddingTop: '80px' }}>
            <h3 style={{...sectionLabel, color: isHackerMode ? '#333' : '#64748b'}}>MERN_STACK_WORKFLOW</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                {[
                  {num: "01", title: "FRONTEND", skill: "REACT_JS", desc: "Crafting highly interactive and responsive interfaces..."},
                  {num: "02", title: "BACKEND", skill: "NODE_EXPRESS", desc: "Developing secure RESTful APIs with scalable logic..."},
                  {num: "03", title: "DATABASE", skill: "MONGODB", desc: "Architecting flexible and optimized NoSQL schemas..."}
                ].map((item, index) => (
                  <motion.div key={index} whileHover={{ y: -5, borderColor: accentColor }} style={{...workflowCard, background: cardBg, borderColor: borderColor}}>
                      <div style={{...cardNumber, color: isHackerMode ? `${accentColor}11` : 'rgba(0,0,0,0.05)'}}>{item.num}</div>
                      <h3 style={cardTitle}>{item.title}_DEVELOPMENT</h3>
                      <p style={{...cardDesc, color: subTextColor}}>{item.desc}</p>
                      <div style={{...skillTag, color: accentColor, borderColor: accentColor}}>{item.skill}</div>
                  </motion.div>
                ))}
            </div>
        </section>

        <motion.section style={{ marginTop: '150px', borderTop: `1px solid ${borderColor}`, paddingTop: '80px' }}>
          <h3 style={{...sectionLabel, color: isHackerMode ? '#333' : '#64748b'}}>CONTACT_INTERFACE</h3>
          <div style={{...formContainer, background: cardBg, borderColor: borderColor}}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{...inputGroup, background: isHackerMode ? '#080808' : '#fff', borderColor: borderColor}}>
                <User size={16} color={subTextColor} />
                <input type="text" placeholder="IDENTIFIER_NAME" style={{...inputStyle, color: textColor}} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div style={{...inputGroup, background: isHackerMode ? '#080808' : '#fff', borderColor: borderColor}}>
                <Mail size={16} color={subTextColor} />
                <input type="email" placeholder="COMMUNICATION_EMAIL" style={{...inputStyle, color: textColor}} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div style={{...inputGroup, background: isHackerMode ? '#080808' : '#fff', borderColor: borderColor}}>
                <MessageSquare size={16} color={subTextColor} style={{ marginTop: '12px' }} />
                <textarea placeholder="ENCRYPTED_MESSAGE" style={{ ...inputStyle, color: textColor, minHeight: '120px', paddingTop: '12px' }} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
              </div>
              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" className="send-btn" style={{...sendButtonStyle, color: isHackerMode ? accentColor : '#fff', background: isHackerMode ? 'none' : accentColor, borderColor: accentColor}}>
                <Send size={18} /> TRANSMIT_MESSAGE
              </motion.button>
              {status && <p style={{...statusText, color: accentColor}}>{status}</p>}
            </form>
          </div>
        </motion.section>
      </main>

      {/* --- UNLOCK MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div style={modalOverlayStyle} className="modal-override">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              style={{...modalContentStyle, background: isHackerMode ? '#080808' : '#fff', borderColor: accentColor}}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <h2 style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '4px' }}>
                  {step === 1 ? 'IDENTITY_VERIFICATION' : 'ACCESS_AUTHORIZATION'}
                </h2>
                <X size={20} onClick={() => setIsModalOpen(false)} style={{ cursor: 'pointer' }} />
              </div>

              {step === 1 ? (
                <form onSubmit={handleResumeRequest} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p style={{fontSize: '10px', color: subTextColor, marginBottom: '10px'}}>STRICT_PRIVACY_PROTOCOL: LOG YOUR IDENTITY TO PROCEED.</p>
                  <div style={{...inputGroup, background: isHackerMode ? '#000' : '#f8fafc', borderColor: borderColor}}>
                    <User size={16} color={subTextColor} />
                    <input type="text" placeholder="NAME / ORGANIZATION" style={{...inputStyle, color: textColor}} onChange={(e) => setRequestData({...requestData, requesterName: e.target.value})} required />
                  </div>
                  <div style={{...inputGroup, background: isHackerMode ? '#000' : '#f8fafc', borderColor: borderColor}}>
                    <Mail size={16} color={subTextColor} />
                    <input type="email" placeholder="OFFICIAL_EMAIL" style={{...inputStyle, color: textColor}} onChange={(e) => setRequestData({...requestData, requesterEmail: e.target.value})} required />
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} style={{...sendButtonStyle, color: isHackerMode ? accentColor : '#fff', background: isHackerMode ? 'none' : accentColor, borderColor: accentColor}}>
                    <Zap size={16} style={{marginRight: '8px'}} /> INITIATE_HANDSHAKE
                  </motion.button>
                </form>
              ) : (
                <form onSubmit={handleVerifyAndDownload} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{textAlign: 'center', marginBottom: '10px'}}>
                    <ShieldCheck size={40} color={accentColor} style={{margin: '0 auto 15px'}} />
                    <p style={{fontSize: '11px', color: textColor, fontWeight: 'bold'}}>HANDSHAKE_LOGGED_SUCCESSFULLY</p>
                    <p style={{fontSize: '9px', color: subTextColor, marginTop: '5px'}}>ENTER THE MASTER_KEY TO UNLOCK THE ENCRYPTED PDF.</p>
                  </div>
                  <div style={{...inputGroup, background: isHackerMode ? '#000' : '#f8fafc', borderColor: accentColor, borderWidth: '2px'}}>
                    <Lock size={16} color={accentColor} />
                    <input type="password" placeholder="ENTER_ACCESS_CODE" style={{...inputStyle, color: textColor, letterSpacing: '8px', fontWeight: 'bold'}} value={accessCode} onChange={(e) => setAccessCode(e.target.value)} required />
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} style={{...sendButtonStyle, color: '#fff', background: accentColor, borderColor: accentColor}}>
                    <Zap size={16} style={{marginRight: '8px'}} /> UNLOCK_RESUME
                  </motion.button>
                  <p style={{fontSize: '8px', textAlign: 'center', color: subTextColor}}>*Check your email or contact Srishti for the code.</p>
                </form>
              )}
              {status && <p style={{...statusText, color: accentColor}}>{status}</p>}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer style={{ borderTop: `1px solid ${borderColor}`, padding: '100px 60px 50px', textAlign: 'center' }}>
        <p style={{ color: isHackerMode ? '#1a1a1a' : '#94a3b8', fontSize: '10px', letterSpacing: '8px', fontWeight: '900' }}>SRISHTI GOENKA // B.TECH CS (AI & DS) // 2022-2026</p>
      </footer>

      <style>{`
        ${isModalOpen ? `
          .custom-cursor-dot, .custom-cursor-outline, [class*="cursor"] { 
            display: none !important; 
            opacity: 0 !important;
          }
          body, html, * { 
            cursor: default !important; 
          }
          button, input, textarea, a, svg {
            cursor: pointer !important;
          }
        ` : ''}

        .resume-btn:hover { background-color: ${accentColor} !important; color: #fff !important; }
        .send-btn:hover { filter: brightness(1.1); }
        input::placeholder, textarea::placeholder { color: ${isHackerMode ? '#333' : '#cbd5e1'}; }
        @keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 ${accentColor}b3; } 70% { transform: scale(1); box-shadow: 0 0 0 10px ${accentColor}00; } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 ${accentColor}00; } }
      `}</style>
    </div>
  );
};

// Styles (Original and untouched)
const headerStyle = { fontSize: 'clamp(40px, 6vw, 75px)', fontWeight: '900', letterSpacing: '-4px', lineHeight: '0.9', marginBottom: '30px' };
const bioTextStyle = { fontSize: '16px', lineHeight: '1.7', marginBottom: '30px', maxWidth: '600px', fontFamily: 'Inter, sans-serif' };
const labelStyle = { fontSize: '10px', fontWeight: '900', letterSpacing: '6px', marginBottom: '20px' };
const sectionLabel = { fontSize: '10px', fontWeight: '900', letterSpacing: '6px', marginBottom: '60px' };
const imageContainerStyle = { position: 'relative', overflow: 'hidden', borderRadius: '35px', border: '1px solid', transition: 'all 0.5s ease' };
const imgStyle = { width: '100%', height: '520px', objectFit: 'cover', borderRadius: '35px' };
const glowOverlayStyle = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' };
const floatingCardStyle = { position: 'absolute', bottom: '40px', right: '-15px', padding: '15px 30px', borderRadius: '15px', zIndex: 10 };
const pulseDot = { width: '8px', height: '8px', borderRadius: '50%', animation: 'pulse 2s infinite' };
const workflowCard = { border: '1px solid', padding: '45px', borderRadius: '30px', position: 'relative', transition: 'all 0.4s ease' };
const cardNumber = { fontSize: '40px', fontWeight: '900', position: 'absolute', top: '10px', right: '20px' };
const cardTitle = { fontSize: '18px', fontWeight: '900', marginBottom: '15px' };
const cardDesc = { fontSize: '14px', lineHeight: '1.6', fontFamily: 'Inter, sans-serif' };
const skillTag = { display: 'inline-block', marginTop: '20px', fontSize: '10px', fontWeight: '900', border: '1px solid', padding: '5px 12px', borderRadius: '10px' };
const resumeActionBox = { border: '1px solid', padding: '25px', borderRadius: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', maxWidth: '550px' };
const downloadButtonStyle = { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 25px', border: '1px solid', borderRadius: '12px', textDecoration: 'none', fontSize: '11px', fontWeight: '900', transition: '0.3s' };
const formContainer = { maxWidth: '850px', margin: '0 auto', padding: '60px', borderRadius: '40px', border: '1px solid' };
const inputGroup = { display: 'flex', alignItems: 'flex-start', gap: '15px', padding: '18px', borderRadius: '18px', border: '1px solid' };
const inputStyle = { background: 'none', border: 'none', outline: 'none', width: '100%', fontSize: '14px', fontFamily: 'Inter, sans-serif' };
const sendButtonStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', padding: '25px', borderRadius: '18px', border: '1px solid', fontWeight: '900', cursor: 'pointer', fontSize: '13px', letterSpacing: '3px' };
const statusText = { textAlign: 'center', fontSize: '10px', fontWeight: '900', letterSpacing: '2px', marginTop: '30px' };

const modalOverlayStyle = { 
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
  backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)', 
  display: 'flex', justifyContent: 'center', alignItems: 'center', 
  zIndex: 999999, 
  cursor: 'default'
};
const modalContentStyle = { 
  padding: '50px', borderRadius: '30px', border: '1px solid', 
  width: '100%', maxWidth: '450px', 
  cursor: 'default',
  zIndex: 1000000
};

export default About;