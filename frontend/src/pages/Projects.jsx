import { useState } from "react";
import Navbar from "../components/Navbar";
import { Cpu, Code2, ImageIcon, ArrowRight, Mail, MapPin, Github, Linkedin, Terminal } from 'lucide-react';
import MeetingMindStudy from "./case-studies/MeetingMindStudy";
import CodeSentinelStudy from "./case-studies/CodeSentinelStudy";
import NeuroVisionStudy from "./case-studies/NeuroVisionStudy";

const Projects = () => {
  const [view, setView] = useState('grid'); 
  const [selectedProject, setSelectedProject] = useState(0);

  const projectData = [
    {
      id: 0,
      title: "MeetingMind AI",
      icon: <Cpu size={32} color="#00c4cc" />,
      tech: "Groq API • MERN • jsPDF",
      desc: "Neural Enterprise SaaS jo multimedia analysis ko automate karta hai.",
      component: <MeetingMindStudy />
    },
    {
      id: 1,
      title: "CodeSentinel AI",
      icon: <Code2 size={32} color="#00c4cc" />,
      tech: "React • Node.js • AI Auditor",
      desc: "Intelligent auditor jo real-time code health scores provide karta hai.",
      component: <CodeSentinelStudy />
    },
    {
      id: 2,
      title: "Visionary Nexus",
      icon: <ImageIcon size={32} color="#00c4cc" />,
      tech: "MERN • Cloudinary • RBAC",
      desc: "Neural asset management jisme 40% storage overhead kam kiya gaya hai.",
      component: <NeuroVisionStudy />
    }
  ];

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '40px',
    padding: '45px',
    width: '420px', 
    flexShrink: 0,
    cursor: 'pointer',
    transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white' }}>
      <Navbar />

      <main style={{ paddingTop: '180px', paddingBottom: '60px' }}>
        {view === 'grid' ? (
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 60px' }}>
            <h1 style={{ fontSize: '75px', fontWeight: '900', marginBottom: '60px', letterSpacing: '-3px' }}>
              THE <span style={{ color: '#00c4cc' }}>VAULT.</span>
            </h1>
            
            {/* Project Grid */}
            <div className="custom-scroll" style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '50px' }}>
              {projectData.map((project) => (
                <div 
                  key={project.id} 
                  className="project-card"
                  style={cardStyle}
                  onClick={() => { setSelectedProject(project.id); setView('detail'); window.scrollTo(0,0); }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
                    <div style={{ color: '#00c4cc', fontWeight: '900', fontSize: '14px' }}>0{project.id + 1}</div>
                    {project.icon}
                  </div>
                  <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '15px' }}>{project.title}</h2>
                  <p style={{ color: '#00c4cc', fontSize: '12px', fontWeight: '700', marginBottom: '20px', letterSpacing: '1px' }}>{project.tech}</p>
                  <p style={{ color: '#888', marginBottom: '40px', lineHeight: '1.6', fontSize: '15px' }}>{project.desc}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '900', fontSize: '12px', letterSpacing: '2px', color: '#fff' }}>
                    VIEW CASE STUDY <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Visual Bar */}
            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', position: 'relative', marginTop: '20px' }}>
                <div style={{ width: '30%', height: '2px', background: '#00c4cc', position: 'absolute', top: '-0.5px' }}></div>
            </div>
          </div>
        ) : (
          <div style={{ position: 'relative' }}>
            {/* Back Button */}
            <button 
              onClick={() => { setView('grid'); window.scrollTo(0,0); }}
              style={backButtonStyle}
            >
              ← BACK TO VAULT
            </button>
            <div style={{ animation: 'fadeIn 0.5s ease' }}>
              {projectData[selectedProject].component}
            </div>
          </div>
        )}
      </main>

      {/* FINAL UPDATED FOOTER SECTION */}
      <footer style={{ borderTop: '1px solid #111', background: '#050505', paddingTop: '80px', paddingBottom: '40px', marginTop: '100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '80px', marginBottom: '60px' }}>
            
            {/* Bio Column */}
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#00c4cc', marginBottom: '20px' }}>SRISHTI GOENKA</h3>
              <p style={{ color: '#666', lineHeight: '1.6', maxWidth: '300px' }}>
                Architecting neural interfaces and high-performance MERN applications with a focus on AI integration.
              </p>
            </div>

            {/* Links Column */}
            <div>
              <h4 style={footerLabelStyle}>RESOURCES</h4>
              <ul style={footerListStyle}>
                <li><a href="https://github.com/srishti885" target="_blank" rel="noreferrer" style={linkStyle}>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/srishti-goenka-5021aa24a/" target="_blank" rel="noreferrer" style={linkStyle}>LinkedIn</a></li>
                <li><a href="https://leetcode.com/u/SrishtiGoenka/" target="_blank" rel="noreferrer" style={linkStyle}>LeetCode</a></li>
              </ul>
            </div>

            {/* Hub Column */}
            <div>
              <h4 style={footerLabelStyle}>DEVELOPER HUB</h4>
              <div style={{ display: 'flex', gap: '25px', marginTop: '10px' }}>
                <a href="https://github.com/srishti885" target="_blank" rel="noreferrer">
                  <Github className="social-icon" size={24} color="#fff" />
                </a>
                <a href="https://www.linkedin.com/in/srishti-goenka-5021aa24a/" target="_blank" rel="noreferrer">
                  <Linkedin className="social-icon" size={24} color="#fff" />
                </a>
                <a href="https://leetcode.com/u/SrishtiGoenka/" target="_blank" rel="noreferrer">
                  <Terminal className="social-icon" size={24} color="#fff" />
                </a>
              </div>
              <div style={{ marginTop: '35px' }}>
                <p style={{ color: '#fff', fontSize: '13px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={14} color="#00c4cc" />
                  srishtigoenka305@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #111', paddingTop: '40px', textAlign: 'center' }}>
            <p style={{ color: '#222', fontSize: '10px', letterSpacing: '5px', fontWeight: '900' }}>
              DESIGNED & ENGINEERED BY SRISHTI GOENKA // 2024
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .custom-scroll::-webkit-scrollbar { height: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: #000; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #111; border-radius: 10px; }
        .project-card:hover { 
          background: rgba(0, 196, 204, 0.03) !important;
          border-color: #00c4cc !important; 
          transform: translateY(-10px); 
        }
        .social-icon { cursor: pointer; transition: 0.3s ease; }
        .social-icon:hover { color: #00c4cc !important; transform: scale(1.15); }
      `}</style>
    </div>
  );
};

// Internal Styles
const backButtonStyle = {
  position: 'fixed', top: '130px', left: '60px',
  background: 'rgba(255,255,255,0.05)', color: 'white',
  border: '1px solid rgba(255,255,255,0.1)', padding: '12px 24px',
  borderRadius: '12px', cursor: 'pointer', fontWeight: '900',
  fontSize: '11px', letterSpacing: '1px', zIndex: 100, backdropFilter: 'blur(10px)'
};
const linkStyle = { color: '#888', textDecoration: 'none', transition: '0.3s' };
const footerLabelStyle = { color: '#333', fontSize: '11px', fontWeight: '900', letterSpacing: '3px', marginBottom: '25px' };
const footerListStyle = { listStyle: 'none', padding: 0, color: '#888', fontSize: '14px', fontWeight: '700', display: 'grid', gap: '12px' };

export default Projects;