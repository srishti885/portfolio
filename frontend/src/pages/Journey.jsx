import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { GraduationCap, Briefcase, Award, Zap, Code, Database, Brain, Terminal, Github, Linkedin } from 'lucide-react';

const Journey = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

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
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white', fontFamily: '"Syncopate", sans-serif' }}>
      <Navbar />

      <main style={{ paddingTop: '180px', paddingBottom: '100px', maxWidth: '1300px', margin: '0 auto', padding: '0 60px' }}>
        
        {/* HERO SECTION */}
        <section style={{ marginBottom: '120px', textAlign: 'left', opacity: isVisible ? 1 : 0, transition: '1.5s ease' }}>
          <h1 style={{ fontSize: 'clamp(50px, 10vw, 100px)', fontWeight: '900', letterSpacing: '-6px', lineHeight: '0.9', marginBottom: '30px' }}>
            THE <br /><span style={{ color: '#00c4cc', textShadow: '0 0 30px rgba(0,196,204,0.3)' }}>EVOLUTION.</span>
          </h1>
          <div style={{ display: 'flex', gap: '15px' }}>
             <div style={badgeStyle}><Terminal size={14} color="#00c4cc" /> LEETCODE: 250+</div>
             <div style={badgeStyle}><Code size={14} color="#00c4cc" /> PROJECTS: 10+</div>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '100px', alignItems: 'start' }}>
          
          {/* NEURAL TIMELINE */}
          <section>
            <h3 style={sectionLabel}>PATHWAY_LOG</h3>
            <div style={{ borderLeft: '1px solid rgba(0,196,204,0.2)', paddingLeft: '50px', marginLeft: '10px' }}>
              {timeline.map((item, index) => (
                <div key={index} style={{ marginBottom: '80px', position: 'relative' }}>
                  <div style={timelineNodeStyle}></div>
                  <span style={{ color: '#00c4cc', fontSize: '11px', fontWeight: '900', letterSpacing: '3px' }}>{item.year}</span>
                  <h4 style={{ fontSize: '28px', fontWeight: '900', margin: '15px 0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#fff', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px', opacity: 0.6 }}>{item.org}</p>
                  <p style={{ color: '#888', fontSize: '16px', lineHeight: '1.8', maxWidth: '450px' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SKILL MATRIX */}
          <section>
            <h3 style={sectionLabel}>CORE_CAPABILITIES</h3>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '50px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)' }}>
              {skills.map((skill, index) => (
                <div key={index} style={{ marginBottom: '35px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '800', fontSize: '13px', color: '#fff' }}>
                      <span style={{ color: '#00c4cc' }}>{skill.icon}</span>
                      {skill.name}
                    </div>
                    <span style={{ color: '#333', fontSize: '11px', fontWeight: '900' }}>{skill.level}%</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                    <div style={{ 
                      width: isVisible ? `${skill.level}%` : '0%', height: '100%', 
                      background: 'linear-gradient(90deg, #00c4cc, #008a8f)',
                      boxShadow: '0 0 15px rgba(0,196,204,0.4)',
                      transition: 'width 2s cubic-bezier(0.19, 1, 0.22, 1)' 
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* DEVELOPMENT FLOW */}
        <section style={{ marginTop: '150px', textAlign: 'center' }}>
          <h3 style={sectionLabel}>SYSTEM_WORKFLOW</h3>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '50px' }}>
            {["PROBLEM", "LOGIC", "AI_AUDIT", "DEPLOY"].map((step, idx) => (
              <div key={idx} className="flow-card" style={flowBoxStyle}>
                <span style={{ fontSize: '10px', color: '#00c4cc', fontWeight: '900' }}>SYS_0{idx+1}</span>
                <div style={{ fontWeight: '900', fontSize: '18px', marginTop: '10px' }}>{step}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid #111', background: '#050505', padding: '100px 60px 50px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
           <p style={{ color: '#222', fontSize: '10px', letterSpacing: '8px', fontWeight: '900', marginBottom: '20px' }}>DESIGNED & ENGINEERED BY SRISHTI GOENKA</p>
           <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
              <a href="https://github.com/srishti885" target="_blank" rel="noreferrer"><Github size={20} color="#333" /></a>
              <a href="https://www.linkedin.com/in/srishti-goenka-5021aa24a/" target="_blank" rel="noreferrer"><Linkedin size={20} color="#333" /></a>
           </div>
        </div>
      </footer>

      <style>{`
        .flow-card:hover { border-color: #00c4cc !important; transform: translateY(-10px); background: rgba(0,196,204,0.02) !important; }
      `}</style>
    </div>
  );
};

// Internal Styles
const sectionLabel = { color: '#222', fontSize: '10px', fontWeight: '900', letterSpacing: '6px', marginBottom: '60px', textAlign: 'left' };
const badgeStyle = { background: 'rgba(255,255,255,0.02)', padding: '12px 25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', fontSize: '11px', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '10px', letterSpacing: '1px' };
const timelineNodeStyle = { position: 'absolute', left: '-61px', top: '5px', width: '20px', height: '20px', borderRadius: '50%', background: '#000', border: '2px solid #00c4cc', boxShadow: '0 0 20px rgba(0,196,204,0.4)' };
const flowBoxStyle = { background: 'rgba(255,255,255,0.01)', padding: '40px', border: '1px solid #111', borderRadius: '30px', width: '220px', transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)', cursor: 'default' };

export default Journey;