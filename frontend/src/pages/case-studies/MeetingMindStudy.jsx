import { Cpu, Layout, ShieldCheck, Zap, Globe, Github, ExternalLink, ArrowRight, CheckCircle, Mail, MapPin, Search, FileText } from 'lucide-react';

const MeetingMindStudy = () => (
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '40px', 
    color: 'white',
    animation: 'fadeInUp 0.8s ease-out' 
  }}>
    
    {/* Header with Neon Icon */}
    <div style={{ marginBottom: '80px', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
        <Cpu size={60} color="#00c4cc" />
        <h1 style={{ fontSize: '80px', fontWeight: '900', letterSpacing: '-4px', background: 'linear-gradient(90deg, #fff, #00c4cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          MeetingMind AI
        </h1>
      </div>
      <p style={{ color: '#00c4cc', fontSize: '14px', fontWeight: '900', letterSpacing: '10px', opacity: 0.8 }}>
        NEURAL_ENTERPRISE_COLLABORATION
      </p>
    </div>

    {/* IMPACT METRICS SECTION */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '60px' }}>
      {[
        { label: "EFFORT REDUCTION", val: "70%" },
        { label: "DELIVERY SPEED", val: "40%" },
        { label: "DATA ISOLATION", val: "100%" },
        { label: "PAGE LOAD CUT", val: "25%" }
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
        <h3 style={labelStyle}>PROJECT OVERVIEW</h3>
      </div>
      <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#fff', fontWeight: '700' }}>
        MeetingMind AI is an AI-powered enterprise platform that automatically transcribes, summarizes, and converts meeting audio/video data into actionable insights. It prevents information loss and enables faster, structured decision-making for organizations.
      </p>
    </div>

    {/* Key Capabilities & Vision */}
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px', marginBottom: '50px' }}>
      <div className="glow-card" style={smallCardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <Zap size={20} color="#00c4cc" />
          <h3 style={labelStyle}>KEY CAPABILITIES</h3>
        </div>
        <ul style={listStyle}>
          <li><CheckCircle size={16} color="#00c4cc" /> Automated meeting transcription with multi-speaker detection</li>
          <li><CheckCircle size={16} color="#00c4cc" /> AI-based summarization using LLMs (Groq / Llama 3.3)</li>
          <li><CheckCircle size={16} color="#00c4cc" /> Sentiment analysis to understand meeting tone</li>
          <li><CheckCircle size={16} color="#00c4cc" /> Automatic task & action item extraction</li>
          <li><CheckCircle size={16} color="#00c4cc" /> Secure storage with role-based access (RBAC)</li>
          <li><CheckCircle size={16} color="#00c4cc" /> Export reports in PDF, PPT & Email format</li>
        </ul>
      </div>
      <div className="glow-card" style={smallCardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <Globe size={20} color="#00c4cc" />
          <h3 style={labelStyle}>THE UTILITY</h3>
        </div>
        <p style={{ color: '#fff', fontSize: '17px', fontWeight: '700', lineHeight: '1.6' }}>
          Retain critical knowledge, improve accountability with action items, and save time for managers. Designed for high-end enterprise collaboration.
        </p>
      </div>
    </div>

    {/* SYSTEM ARCHITECTURE FLOW */}
    <div style={{ marginBottom: '80px', textAlign: 'center' }}>
      <h3 style={labelStyle}>SYSTEM ARCHITECTURE FLOW</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#050505', padding: '45px', borderRadius: '30px', border: '1px dashed #333', marginTop: '30px' }}>
        {["AV Upload", "Neural Processing", "LLM Intelligence", "Task Extraction", "Secure Vault", "Report Export"].map((step, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '12px', fontWeight: '900', color: idx % 2 === 0 ? '#fff' : '#00c4cc' }}>{step}</div>
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
          { q: "Unstructured meeting data", a: "Solved using neural audio processing and speaker diarization" },
          { q: "Accurate summarization", a: "Implemented LLM-based contextual summarization" },
          { q: "Data security concerns", a: "Applied end-to-end encryption and RBAC" },
          { q: "User experience simplicity", a: "Built a clean React SPA with automated workflows" }
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
          { icon: <Zap size={18}/>, text: "Reduced manual effort" },
          { icon: <CheckCircle size={18}/>, text: "Clarity on decisions" },
          { icon: <Zap size={18}/>, text: "Faster follow-ups" },
          { icon: <ShieldCheck size={18}/>, text: "Searchable history" }
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
      <a href="https://github.com/srishti885/MeetingMind-AI" target="_blank" rel="noreferrer" style={btnSecondary}>
        <Github size={18} /> SOURCE_CODE
      </a>
      <a href="https://meetingmind-ai-frontend.vercel.app" target="_blank" rel="noreferrer" style={btnPrimary}>
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

// Styles
const metricBoxStyle = { background: '#050505', padding: '30px', borderRadius: '25px', border: '1px solid #111', textAlign: 'center' };
const labelStyle = { color: '#666', fontSize: '11px', fontWeight: '900', letterSpacing: '4px' };
const bigCardStyle = { background: 'rgba(0,196,204,0.03)', padding: '50px', borderRadius: '40px', border: '1px solid #222', marginBottom: '40px' };
const smallCardStyle = { background: '#050505', padding: '40px', borderRadius: '35px', border: '1px solid #111' };
const listStyle = { listStyle: 'none', padding: 0, display: 'grid', gap: '18px', color: '#fff', fontSize: '15px', fontWeight: '700' };
const outcomeBox = { padding: '30px', background: '#050505', border: '1px solid #111', borderRadius: '25px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const btnPrimary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 45px', backgroundColor: '#00c4cc', color: 'black', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '13px' };
const btnSecondary = { display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 45px', border: '1px solid #333', color: 'white', textDecoration: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '13px' };

export default MeetingMindStudy;