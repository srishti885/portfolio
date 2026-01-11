import { Cpu, Layout, ShieldCheck, Zap, Globe, Github, ExternalLink, ArrowRight, CheckCircle, Mail, MapPin, Image as ImageIcon, Database, Cloud } from 'lucide-react';

const NeuroVisionStudy = () => (
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '40px', 
    color: 'white',
    animation: 'fadeInUp 0.8s ease-out' 
  }}>
    
    {/* Header Section */}
    <div style={{ marginBottom: '80px', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
        <ImageIcon size={60} color="#00c4cc" />
        <h1 style={{ fontSize: '80px', fontWeight: '900', letterSpacing: '-4px', background: 'linear-gradient(90deg, #fff, #00c4cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Visionary Nexus
        </h1>
      </div>
      <p style={{ color: '#00c4cc', fontSize: '14px', fontWeight: '900', letterSpacing: '10px', opacity: 0.8 }}>
        NEURAL_ASSET_MANAGEMENT_SYSTEM
      </p>
    </div>

    {/* IMPACT METRICS SECTION */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '60px' }}>
      {[
        { label: "STORAGE OVERHEAD", val: "-40%" },
        { label: "RENDERING LATENCY", val: "-30%" },
        { label: "DATA ISOLATION", val: "100%" },
        { label: "UI RESPONSIVENESS", val: "ULTRA" }
      ].map((m, i) => (
        <div key={i} className="glow-card" style={metricBoxStyle}>
          <div style={{ fontSize: '48px', fontWeight: '900', color: '#00c4cc' }}>{m.val}</div>
          <div style={{ fontSize: '10px', color: '#fff', fontWeight: '800', letterSpacing: '2px' }}>{m.label}</div>
        </div>
      ))}
    </div>

    {/* Project Description Card */}
    <div className="glow-card" style={bigCardStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
        <Layout size={20} color="#00c4cc" />
        <h3 style={labelStyle}>PROJECT DESCRIPTION</h3>
      </div>
      <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#fff', fontWeight: '700' }}>
        Visionary Nexus is a full-stack digital asset management platform that enables users to generate, store, and manage high-quality graphical assets via AI-based neural prompts. Featuring secure authentication, cloud optimization, and a centralized hub for personal and community assets.
      </p>
    </div>

    {/* Key Capabilities & Utility Grid */}
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px', marginBottom: '50px' }}>
      <div className="glow-card" style={smallCardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <Zap size={20} color="#00c4cc" />
          <h3 style={labelStyle}>CORE CAPABILITIES</h3>
        </div>
        <ul style={listStyle}>
          <li><CheckCircle size={16} color="#00c4cc" /> AI image generation via neural synthesis prompts</li>
          <li><CheckCircle size={16} color="#00c4cc" /> Cloud-based storage optimization using Cloudinary</li>
          <li><CheckCircle size={16} color="#00c4cc" /> Secure JWT Auth & Role-Based Access Control (RBAC)</li>
          <li><CheckCircle size={16} color="#00c4cc" /> Community hub to explore and fork public assets</li>
          <li><CheckCircle size={16} color="#00c4cc" /> Personalized private asset archive for users</li>
          <li><CheckCircle size={16} color="#00c4cc" /> React Lazy Loading for high-speed rendering</li>
        </ul>
      </div>
      <div className="glow-card" style={smallCardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <Globe size={20} color="#00c4cc" />
          <h3 style={labelStyle}>THE UTILITY</h3>
        </div>
        <p style={{ color: '#fff', fontSize: '17px', fontWeight: '700', lineHeight: '1.6' }}>
          Eliminates local storage dependency for creators. Provides a collaborative platform for AI-driven content generation, suitable for creative professionals and enterprise design workflows.
        </p>
      </div>
    </div>

    {/* SYSTEM ARCHITECTURE FLOW */}
    <div style={{ marginBottom: '80px', textAlign: 'center' }}>
      <h3 style={labelStyle}>SYSTEM ARCHITECTURE FLOW</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#050505', padding: '45px', borderRadius: '30px', border: '1px dashed #333', marginTop: '30px' }}>
        {["User Prompt", "React/Tailwind", "Node Gateway", "Neural Engine", "Cloudinary", "MongoDB Atlas"].map((step, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: '900', color: idx % 2 === 0 ? '#fff' : '#00c4cc' }}>{step}</div>
            {idx !== 5 && <ArrowRight size={14} color="#222" />}
          </div>
        ))}
      </div>
    </div>

    {/* Challenges & Strategic Solutions */}
    <div style={{ marginBottom: '80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
        <ShieldCheck size={24} color="#00c4cc" />
        <h3 style={labelStyle}>CHALLENGES & STRATEGIC SOLUTIONS</h3>
      </div>
      <div style={{ display: 'grid', gap: '15px' }}>
        {[
          { q: "Handling large media files", a: "Integrated Cloudinary for real-time asset optimization and delivery" },
          { q: "Secure workspace access", a: "Implemented RBAC to manage secure user environments" },
          { q: "Asset rendering latency", a: "Applied React Lazy Loading, cutting load times by 30%" },
          { q: "Scalable UI design", a: "Built responsive, dark-themed dashboard using Tailwind CSS" }
        ].map((item, i) => (
          <div key={i} className="glow-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '25px', borderRadius: '20px', border: '1px solid #111' }}>
            <span style={{ fontWeight: '900', color: '#fff', fontSize: '16px' }}>{item.q}</span>
            <span style={{ color: '#00c4cc', fontWeight: '800' }}>➔ {item.a}</span>
          </div>
        ))}
      </div>
    </div>

    {/* OUTCOMES SECTION */}
    <div style={{ marginBottom: '80px' }}>
      <h3 style={labelStyle}>PROJECT OUTCOMES</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '30px' }}>
        {[
          { icon: <Cloud size={18}/>, text: "Optimized Cloud Storage" },
          { icon: <Zap size={18}/>, text: "Fast Asset Rendering" },
          { icon: <ShieldCheck size={18}/>, text: "RBAC Security" },
          { icon: <Globe size={18}/>, text: "Global Asset Gallery" }
        ].map((item, i) => (
          <div key={i} className="glow-card" style={outcomeBox}>
            <div style={{ color: '#00c4cc', marginBottom: '10px' }}>{item.icon}</div>
            <p style={{ fontSize: '14px', fontWeight: '800', color: '#fff' }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Links - FINAL ACTION SECTION */}
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '80px' }}>
      <a href="https://github.com/srishti885/Visionary-Nexus" target="_blank" rel="noreferrer" style={btnSecondary}>
        <Github size={18} /> GITHUB_REPO
      </a>
      <a href="https://visionary-nexus.vercel.app" target="_blank" rel="noreferrer" style={btnPrimary}>
        <ExternalLink size={18} /> VIEW_LIVE_STUDIO
      </a>
    </div>

    {/* FOOTER - CLEAN VERSION */}
    <footer style={{ borderTop: '1px solid #111', paddingTop: '40px', paddingBottom: '30px', textAlign: 'center' }}>
      <div style={{ color: '#333', fontSize: '10px', fontWeight: '900', letterSpacing: '5px' }}>
        DESIGNED & ENGINEERED BY SRISHTI GOENKA // 2026
      </div>
    </footer>

    <style>{`
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      .glow-card { transition: 0.4s all ease; cursor: default; }
      .glow-card:hover { border-color: #00c4cc !important; box-shadow: 0 0 30px rgba(0, 196, 204, 0.1) !important; transform: translateY(-5px); }
    `}</style>
  </div>
);

// CSS Styles
const metricBoxStyle = { background: '#050505', padding: '30px', borderRadius: '25px', border: '1px solid #111', textAlign: 'center' };
const labelStyle = { color: '#666', fontSize: '11px', fontWeight: '900', letterSpacing: '4px' };
const bigCardStyle = { background: 'rgba(0,196,204,0.03)', padding: '50px', borderRadius: '40px', border: '1px solid #222', marginBottom: '40px' };
const smallCardStyle = { background: '#050505', padding: '40px', borderRadius: '35px', border: '1px solid #111' };
const listStyle = { listStyle: 'none', padding: 0, display: 'grid', gap: '18px', color: '#fff', fontSize: '15px', fontWeight: '700' };
const outcomeBox = { padding: '30px', background: '#050505', border: '1px solid #111', borderRadius: '25px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const btnPrimary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 45px', backgroundColor: '#00c4cc', color: 'black', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '13px' };
const btnSecondary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 45px', border: '1px solid #333', color: 'white', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '13px' };

export default NeuroVisionStudy;