import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Github, Linkedin, ExternalLink, Code2, Terminal } from 'lucide-react';

const Portal = () => {
  const [active, setActive] = useState(false);
  useEffect(() => { setActive(true); }, []);

  const portals = [
    {
      title: "GITHUB_ARCHIVE",
      desc: "Source code for MERN & AI API projects",
      link: "https://github.com/srishtigoenka",
      icon: <Github size={22} />,
      status: "ACTIVE_REPOS"
    },
    {
      title: "LEETCODE_PROFILE",
      desc: "200+ Problems solved in Data Structures",
      link: "https://leetcode.com/u/srishtigoenka305",
      icon: <Code2 size={22} />,
      status: "RANKED_NODE"
    },
    {
      title: "LINKEDIN_SYNC",
      desc: "Professional network & experience log",
      link: "https://linkedin.com/in/srishti-goenka-b5305925a",
      icon: <Linkedin size={22} />,
      status: "VERIFIED"
    }
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white', fontFamily: '"Syncopate", sans-serif' }}>
      <Navbar />

      <main style={{ 
        paddingTop: '200px', // Navbar ke liye space
        paddingBottom: '100px', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        paddingLeft: '60px',
        paddingRight: '60px',
        opacity: active ? 1 : 0, 
        transform: active ? 'translateY(0)' : 'translateY(30px)', 
        transition: '1.5s'
      }}>
        
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ color: '#222', fontSize: '10px', fontWeight: '900', letterSpacing: '5px' }}>SYSTEM_PORTALS</h3>
          <h1 style={{ fontSize: '60px', fontWeight: '900', letterSpacing: '-3px' }}>ACCESS <span style={{ color: '#00c4cc' }}>POINTS</span></h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {portals.map((portal, index) => (
            <a 
              key={index} 
              href={portal.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="portal-card"
              style={portalCardStyle}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: '#00c4cc' }}>{portal.icon}</div>
                <div style={statusTag}>{portal.status}</div>
              </div>
              <div style={{ marginTop: '40px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '900', color: '#fff' }}>{portal.title}</h2>
                <p style={{ color: '#555', fontSize: '12px', marginTop: '10px' }}>{portal.desc}</p>
              </div>
              <div style={accessLink}>
                ESTABLISH_CONNECTION <ExternalLink size={14} style={{ marginLeft: '10px' }} />
              </div>
            </a>
          ))}
        </div>
      </main>

      <style>{`
        .portal-card {
          text-decoration: none;
          background: rgba(255,255,255,0.01);
          border: 1px solid #111;
          padding: 40px;
          border-radius: 30px;
          transition: 0.4s all;
        }
        .portal-card:hover {
          background: rgba(0, 196, 204, 0.02);
          border-color: #00c4cc;
          transform: translateY(-10px);
        }
      `}</style>
    </div>
  );
};

const portalCardStyle = { display: 'block' };
const statusTag = { fontSize: '8px', fontWeight: '900', color: '#444', border: '1px solid #222', padding: '5px 12px', borderRadius: '15px' };
const accessLink = { marginTop: '50px', fontSize: '10px', fontWeight: '900', color: '#00c4cc', display: 'flex', alignItems: 'center', letterSpacing: '2px' };

export default Portal;