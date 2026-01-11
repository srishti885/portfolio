import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Github, Linkedin, ExternalLink, Code2, Terminal, Activity } from 'lucide-react';

const Dashboard = () => {
  const [active, setActive] = useState(false);
  useEffect(() => { setActive(true); }, []);

  const portals = [
    {
      title: "GITHUB_ARCHIVE",
      desc: "Source code for MERN and API integration projects",
      link: "https://github.com/srishtigoenka",
      icon: <Github size={22} />,
      status: "ACTIVE_NODES"
    },
    {
      title: "LEETCODE_PROFILE",
      desc: "200+ Problems solved in Data Structures and Algorithms",
      link: "https://leetcode.com/u/srishtigoenka305",
      icon: <Code2 size={22} />,
      status: "RANKED_NODE"
    },
    {
      title: "LINKEDIN_SYNC",
      desc: "Professional network and career experience logs",
      link: "https://linkedin.com/in/srishti-goenka-b5305925a",
      icon: <Linkedin size={22} />,
      status: "VERIFIED"
    }
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white', fontFamily: '"Syncopate", sans-serif' }}>
      {/* Navbar yahan se render hoga */}
      <Navbar />

      <main style={{ 
        paddingTop: '220px', 
        paddingBottom: '100px', 
        maxWidth: '1300px', 
        margin: '0 auto', 
        paddingLeft: '60px',
        paddingRight: '60px',
        opacity: active ? 1 : 0, 
        transform: active ? 'translateY(0)' : 'translateY(30px)', 
        transition: '1.2s cubic-bezier(0.19, 1, 0.22, 1)'
      }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', borderBottom: '1px solid #111', paddingBottom: '40px' }}>
          <div>
            <h3 style={labelStyle}>EXTERNAL_INTERFACE</h3>
            <h1 style={headerStyle}>SYSTEM <span style={{ color: '#00c4cc' }}>PORTAL</span></h1>
          </div>
          <div style={systemStatusStyle}>
            <Activity size={14} color="#00c4cc" />
            <span>ALL_SYSTEMS_OPERATIONAL</span>
          </div>
        </div>

        {/* Portals Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
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
                <h2 style={portalTitle}>{portal.title}</h2>
                <p style={portalDesc}>{portal.desc}</p>
              </div>

              <div style={accessLinkStyle}>
                ESTABLISH_CONNECTION <ExternalLink size={14} style={{ marginLeft: '10px' }} />
              </div>
            </a>
          ))}
        </div>

        <div style={terminalFooter}>
            <Terminal size={14} style={{ marginRight: '10px' }} />
            <span>TERMINAL_READY_FOR_HANDSHAKE_</span>
        </div>
      </main>

      <style>{`
        .portal-card {
          text-decoration: none;
          background: rgba(255,255,255,0.01);
          border: 1px solid #111;
          padding: 50px 40px;
          border-radius: 35px;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          display: block;
        }
        .portal-card:hover {
          background: rgba(0, 196, 204, 0.02) !important;
          border-color: #00c4cc !important;
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
};

// Styles
const headerStyle = { fontSize: 'clamp(35px, 6vw, 65px)', fontWeight: '900', letterSpacing: '-3px', margin: 0 };
const labelStyle = { color: '#333', fontSize: '10px', fontWeight: '900', letterSpacing: '5px', marginBottom: '12px' };
const portalTitle = { fontSize: '20px', fontWeight: '900', color: '#fff', marginBottom: '12px', letterSpacing: '1px' };
const portalDesc = { color: '#666', fontSize: '13px', lineHeight: '1.6', fontFamily: 'Inter, sans-serif' };
const statusTag = { fontSize: '8px', fontWeight: '900', color: '#444', border: '1px solid #222', padding: '5px 12px', borderRadius: '15px' };
const accessLinkStyle = { marginTop: '50px', fontSize: '10px', fontWeight: '900', color: '#00c4cc', display: 'flex', alignItems: 'center', letterSpacing: '2px' };
const systemStatusStyle = { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '9px', fontWeight: '900', color: '#333', letterSpacing: '2px', marginBottom: '10px' };
const terminalFooter = { marginTop: '100px', display: 'flex', alignItems: 'center', color: '#111', fontSize: '10px', fontWeight: '900', letterSpacing: '3px', justifyContent: 'center' };
const portalCardStyle = { position: 'relative' };

export default Dashboard;