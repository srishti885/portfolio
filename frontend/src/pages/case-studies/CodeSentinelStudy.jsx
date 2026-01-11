import { Cpu, Layout, ShieldCheck, Zap, Globe, Github, ExternalLink, ArrowRight, CheckCircle, Mail, MapPin, Code2, FileSearch, BarChart3 } from 'lucide-react';

const CodeSentinelStudy = () => (
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
        <Code2 size={60} color="#00c4cc" />
        <h1 style={{ fontSize: '80px', fontWeight: '900', letterSpacing: '-4px', background: 'linear-gradient(90deg, #fff, #00c4cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          CodeSentinel AI
        </h1>
      </div>
      <p style={{ color: '#00c4cc', fontSize: '14px', fontWeight: '900', letterSpacing: '10px', opacity: 0.8 }}>
        INTELLIGENT_CODE_AUDITOR_PRO
      </p>
    </div>

    {/* IMPACT METRICS SECTION */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '60px' }}>
      {[
        { label: "DEBUGGING SPEED", val: "30%+" },
        { label: "HEALTH ACCURACY", val: "95%" },
        { label: "REFACTORING", val: "INSTANT" },
        { label: "SYSTEM UPTIME", val: "100%" }
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
        <FileSearch size={20} color="#00c4cc" />
        <h3 style={labelStyle}>PROJECT DESCRIPTION</h3>
      </div>
      <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#fff', fontWeight: '700' }}>
        AI Code Critic Pro (CodeSentinel AI) is a professional-grade tool that analyzes source code to detect bugs, performance issues, and quality gaps. It provides real-time feedback, automated refactoring, and a "Health Score" to help developers write secure code.
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
          <li><CheckCircle size={16} color="#00c4cc" /> AI-powered code logic & deep logic scanning</li>
          <li><CheckCircle size={16} color="#00c4cc" /> Percentage-based Code Quality (Health Score)</li>
          <li><CheckCircle size={16} color="#00c4cc" /> One-click corrected code generation (Refactoring)</li>
          <li><CheckCircle size={16} color="#00c4cc" /> PDF audit report export via html2pdf.js</li>
          <li><CheckCircle size={16} color="#00c4cc" /> Admin dashboard for user & usage tracking</li>
          <li><CheckCircle size={16} color="#00c4cc" /> Historical code tracking for future reference</li>
        </ul>
      </div>
      <div className="glow-card" style={smallCardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <BarChart3 size={20} color="#00c4cc" />
          <h3 style={labelStyle}>THE UTILITY</h3>
        </div>
        <p style={{ color: '#fff', fontSize: '17px', fontWeight: '700', lineHeight: '1.6' }}>
          Acts as a virtual code reviewer, saving hours of manual review time. Helps teams maintain consistent standards and write cleaner, optimized code from day one.
        </p>
      </div>
    </div>

    {/* SYSTEM ARCHITECTURE FLOW */}
    <div style={{ marginBottom: '80px', textAlign: 'center' }}>
      <h3 style={labelStyle}>SYSTEM ARCHITECTURE FLOW</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#050505', padding: '45px', borderRadius: '30px', border: '1px dashed #333', marginTop: '30px' }}>
        {["Code Input", "React SPA", "Node/Express API", "AI Engine", "Health Scoring", "Reports Vault"].map((step, idx) => (
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
          { q: "Complex code analysis", a: "Implemented AI-based deep logic scanning for structural bugs" },
          { q: "Accurate refactoring", a: "Generated optimized code suggestions instead of just flags" },
          { q: "User-friendly UI", a: "Designed a clean sidebar-based React layout for complex metrics" },
          { q: "Report generation", a: "Integrated html2pdf.js for high-fidelity structured PDF exports" }
        ].map((item, i) => (
          <div key={i} className="glow-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '25px', borderRadius: '20px', border: '1px solid #111' }}>
            <span style={{ fontWeight: '900', color: '#fff', fontSize: '16px' }}>{item.q}</span>
            <span style={{ color: '#00c4cc', fontWeight: '800' }}>➔ {item.a}</span>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Links - FINAL ACTION SECTION */}
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '80px' }}>
      <a href="https://github.com/srishti885/AI-Code-Critic" target="_blank" rel="noreferrer" style={btnSecondary}>
        <Github size={18} /> SOURCE_CODE
      </a>
      <a href="https://ai-code-critic.vercel.app" target="_blank" rel="noreferrer" style={btnPrimary}>
        <ExternalLink size={18} /> LIVE_DEPLOYMENT
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

// CSS Logic Objects
const metricBoxStyle = { background: '#050505', padding: '30px', borderRadius: '25px', border: '1px solid #111', textAlign: 'center' };
const labelStyle = { color: '#666', fontSize: '11px', fontWeight: '900', letterSpacing: '4px' };
const bigCardStyle = { background: 'rgba(0,196,204,0.03)', padding: '50px', borderRadius: '40px', border: '1px solid #222', marginBottom: '40px' };
const smallCardStyle = { background: '#050505', padding: '40px', borderRadius: '35px', border: '1px solid #111' };
const listStyle = { listStyle: 'none', padding: 0, display: 'grid', gap: '18px', color: '#fff', fontSize: '15px', fontWeight: '700' };
const btnPrimary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 45px', backgroundColor: '#00c4cc', color: 'black', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '13px' };
const btnSecondary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 45px', border: '1px solid #333', color: 'white', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '13px' };

export default CodeSentinelStudy;