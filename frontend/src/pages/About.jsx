import { useState, useEffect } from "react";
import axios from "axios"; // Axios import kijiye
import Navbar from "../components/Navbar";
import myPhoto from "../assets/my-pic.jpeg"; 
import { User, BookOpen, Code, Zap, ExternalLink, Send, Mail, MessageSquare } from 'lucide-react';

const About = () => {
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => { setActive(true); }, []);

  const stats = [
    { label: "LEETCODE SOLVED", value: "200+", icon: <Code size={14} /> },
    { label: "ACADEMIC CGPA", value: "9.18", icon: <BookOpen size={14} /> },
    { label: "API EFFICIENCY", value: "+25%", icon: <Zap size={14} /> }
  ];

  // Backend connection logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("ESTABLISHING_LINK...");
    try {
      const res = await axios.post("http://localhost:5000/api/contact/send", formData);
      if (res.data.success) {
        setStatus("DATA_SYNCHRONIZED_SUCCESSFULLY");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (err) {
      setStatus("LINK_FAILURE_RETRY_LATER");
    }
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white', fontFamily: '"Syncopate", sans-serif' }}>
      <Navbar />

      <main style={{ 
        paddingTop: '180px', paddingBottom: '100px', maxWidth: '1300px', margin: '0 auto', padding: '0 60px',
        opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(30px)', transition: '1.5s'
      }}>
        
        {/* IDENTITY SECTION */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={imageContainerStyle}>
              <div style={glowOverlayStyle}></div>
              <img src={myPhoto} alt="Srishti Goenka" style={imgStyle} />
            </div>
            <div style={floatingCardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={pulseDot}></div>
                <span style={{ color: '#00c4cc', fontWeight: '900', fontSize: '10px' }}>STATUS: </span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#000' }}>OPEN_TO_WORK</span>
              </div>
            </div>
          </div>

          <div>
            <h3 style={labelStyle}>IDENTITY_PROFILE</h3>
            <h1 style={headerStyle}>
              I AM <span style={{ color: '#00c4cc' }}>SRISHTI</span><br />
              <span style={{ fontSize: '0.4em', letterSpacing: '4px', color: '#444' }}>[ MERN_DEVELOPER ]</span>
            </h1>
            
            <p style={bioTextStyle}>
              Strategic Computer Science student at <span style={{ color: '#fff' }}>Poornima College</span>
              Specializing in the <span style={{ color: '#00c4cc' }}>MERN stack</span> and API-driven architectures
              Experienced in building scalable software solutions and integrating LLM APIs to improve application efficiency by 25%
            </p>

            <div style={resumeActionBox}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <span style={{ fontSize: '10px', color: '#555', fontWeight: '900' }}>JAIPUR, RAJASTHAN</span>
                  <span style={{ fontSize: '14px', fontWeight: '700' }}>SRISHTI_GOENKA_RESUME</span>
               </div>
               <a href="/Resume (11).pdf" target="_blank" rel="noopener noreferrer" className="resume-btn" style={downloadButtonStyle}>
                  <ExternalLink size={16} /> VIEW_RESUME
               </a>
            </div>

            <div style={{ display: 'flex', gap: '50px', marginTop: '40px', borderTop: '1px solid #111', paddingTop: '30px' }}>
               {stats.map((s, i) => (
                 <div key={i}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00c4cc', marginBottom: '5px' }}>
                       {s.icon}
                       <span style={{ fontSize: '9px', fontWeight: '900', letterSpacing: '2px' }}>{s.label}</span>
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: '900', color: '#fff' }}>{s.value}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* WORKFLOW SECTION */}
        <section style={{ marginTop: '150px', borderTop: '1px solid #111', paddingTop: '80px' }}>
           <h3 style={sectionLabel}>MERN_STACK_WORKFLOW</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              <div style={workflowCard}>
                 <div style={cardNumber}>01</div>
                 <h3 style={cardTitle}>FRONTEND_DEVELOPMENT</h3>
                 <p style={cardDesc}>Crafting interfaces with React.js and Tailwind CSS focusing on reducing page load times by 25%</p>
                 <div style={skillTag}>REACT_JS</div>
              </div>
              <div style={workflowCard}>
                 <div style={cardNumber}>02</div>
                 <h3 style={cardTitle}>BACKEND_SOLUTIONS</h3>
                 <p style={cardDesc}>Developing RESTful APIs with Node.js & Express managing high uptime on Vercel and Render</p>
                 <div style={skillTag}>NODE_EXPRESS</div>
              </div>
              <div style={workflowCard}>
                 <div style={cardNumber}>03</div>
                 <h3 style={cardTitle}>DATABASE_MANAGEMENT</h3>
                 <p style={cardDesc}>Architecting MongoDB Atlas schemas securing data with JWT and RBAC systems</p>
                 <div style={skillTag}>MONGODB</div>
              </div>
           </div>
        </section>

        {/* NEW CONTACT SECTION - Integrated with Backend */}
        <section style={{ marginTop: '150px', borderTop: '1px solid #111', paddingTop: '80px' }}>
          <h3 style={sectionLabel}>CONTACT_INTERFACE</h3>
          <div style={formContainer}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={inputGroup}>
                <User size={16} color="#444" />
                <input 
                  type="text" placeholder="IDENTIFIER_NAME" style={inputStyle}
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required
                />
              </div>
              <div style={inputGroup}>
                <Mail size={16} color="#444" />
                <input 
                  type="email" placeholder="COMMUNICATION_EMAIL" style={inputStyle}
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required
                />
              </div>
              <div style={inputGroup}>
                <MessageSquare size={16} color="#444" style={{ marginTop: '12px' }} />
                <textarea 
                  placeholder="ENCRYPTED_MESSAGE" style={{ ...inputStyle, minHeight: '120px', paddingTop: '12px' }}
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required
                />
              </div>
              <button type="submit" className="send-btn" style={sendButtonStyle}>
                <Send size={18} /> TRANSMIT_MESSAGE
              </button>
              {status && <p style={statusText}>{status}</p>}
            </form>
          </div>
        </section>

      </main>

      <footer style={{ borderTop: '1px solid #111', padding: '100px 60px 50px', textAlign: 'center' }}>
        <p style={{ color: '#1a1a1a', fontSize: '10px', letterSpacing: '8px', fontWeight: '900' }}>SRISHTI GOENKA // B.TECH CS (AI & DS) // 2022-2026</p>
      </footer>

      <style>{`
        .resume-btn:hover { background-color: #00c4cc !important; color: #000 !important; box-shadow: 0 0 20px rgba(0, 196, 204, 0.4); }
        .send-btn:hover { background: #00c4cc !important; color: #000 !important; box-shadow: 0 0 30px rgba(0, 196, 204, 0.4); }
        @keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 196, 204, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(0, 196, 204, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 196, 204, 0); } }
      `}</style>
    </div>
  );
};

// All Styles remain consistent
const headerStyle = { fontSize: 'clamp(40px, 6vw, 75px)', fontWeight: '900', letterSpacing: '-4px', lineHeight: '0.9', marginBottom: '30px' };
const bioTextStyle = { color: '#888', fontSize: '17px', lineHeight: '1.7', marginBottom: '30px', maxWidth: '600px', fontFamily: 'Inter, sans-serif' };
const labelStyle = { color: '#222', fontSize: '10px', fontWeight: '900', letterSpacing: '6px', marginBottom: '20px' };
const sectionLabel = { color: '#222', fontSize: '10px', fontWeight: '900', letterSpacing: '6px', marginBottom: '60px' };
const imageContainerStyle = { position: 'relative', overflow: 'hidden', borderRadius: '40px', border: '1px solid #111' };
const imgStyle = { width: '100%', height: '520px', objectFit: 'cover', borderRadius: '40px' };
const glowOverlayStyle = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', boxShadow: 'inset 0 0 100px rgba(0,196,204,0.05)', pointerEvents: 'none' };
const floatingCardStyle = { position: 'absolute', bottom: '40px', right: '-20px', background: '#fff', padding: '15px 30px', borderRadius: '15px', transform: 'rotate(5deg)', boxShadow: '0 20px 40px rgba(0,0,0,0.8)', zIndex: 10 };
const pulseDot = { width: '8px', height: '8px', backgroundColor: '#00c4cc', borderRadius: '50%', animation: 'pulse 2s infinite' };
const workflowCard = { background: 'rgba(255,255,255,0.01)', border: '1px solid #111', padding: '40px', borderRadius: '30px', position: 'relative' };
const cardNumber = { fontSize: '40px', fontWeight: '900', color: 'rgba(0,196,204,0.05)', position: 'absolute', top: '10px', right: '20px' };
const cardTitle = { fontSize: '18px', fontWeight: '900', marginBottom: '15px' };
const cardDesc = { color: '#666', fontSize: '14px', lineHeight: '1.6' };
const skillTag = { display: 'inline-block', marginTop: '20px', fontSize: '10px', fontWeight: '900', color: '#00c4cc', border: '1px solid #00c4cc', padding: '5px 12px', borderRadius: '10px' };
const resumeActionBox = { background: 'rgba(255,255,255,0.02)', border: '1px solid #111', padding: '25px', borderRadius: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', maxWidth: '550px' };
const downloadButtonStyle = { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 25px', border: '1px solid #00c4cc', borderRadius: '12px', color: '#00c4cc', textDecoration: 'none', fontSize: '11px', fontWeight: '900' };

// Form Styles
const formContainer = { maxWidth: '800px', margin: '0 auto', background: 'rgba(255,255,255,0.01)', padding: '60px', borderRadius: '40px', border: '1px solid #111' };
const inputGroup = { display: 'flex', alignItems: 'flex-start', gap: '15px', background: '#080808', padding: '20px', borderRadius: '20px', border: '1px solid #111' };
const inputStyle = { background: 'none', border: 'none', color: '#fff', outline: 'none', width: '100%', fontSize: '14px', fontFamily: 'Inter, sans-serif' };
const sendButtonStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', padding: '25px', borderRadius: '20px', border: '1px solid #00c4cc', background: 'none', color: '#00c4cc', fontWeight: '900', cursor: 'pointer', transition: '0.4s', fontSize: '14px', letterSpacing: '3px' };
const statusText = { textAlign: 'center', fontSize: '10px', fontWeight: '900', color: '#00c4cc', letterSpacing: '2px', marginTop: '30px' };

export default About;