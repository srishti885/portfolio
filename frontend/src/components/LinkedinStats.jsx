import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from "../context/ThemeContext";
import { UserPlus, Briefcase, Globe } from 'lucide-react';

const LinkedinStats = () => {
  const { isHackerMode } = useTheme();
  const accentColor = isHackerMode ? '#00c4cc' : '#2563eb';

  const stats = [
    { label: "NETWORK", value: "500+", icon: <UserPlus size={16}/> },
    { label: "STATUS", value: "OPEN_TO_WORK", icon: <Briefcase size={16}/> },
    { label: "LOCATION", value: "REMOTE / IN", icon: <Globe size={16}/> }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '800px', padding: '20px' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px' 
      }}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              padding: '25px',
              borderRadius: '20px',
              background: isHackerMode ? 'rgba(0,196,204,0.03)' : '#f8fafc',
              border: `1px solid ${isHackerMode ? '#111' : '#e2e8f0'}`,
              textAlign: 'center'
            }}
          >
            <div style={{ color: accentColor, marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
              {s.icon}
            </div>
            <div style={{ fontSize: '9px', letterSpacing: '2px', opacity: 0.5, marginBottom: '5px' }}>{s.label}</div>
            <div style={{ fontSize: '14px', fontWeight: '900' }}>{s.value}</div>
          </motion.div>
        ))}
      </div>
      
      {/* Visual Badge Background */}
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        borderRadius: '15px', 
        border: `1px dashed ${isHackerMode ? '#222' : '#cbd5e1'}`,
        fontSize: '10px',
        textAlign: 'center',
        opacity: 0.6,
        fontFamily: 'Inter'
      }}>
        VERIFIED_PROFESSIONAL_IDENTITY_SECURED_VIA_OAUTH_2.0
      </div>
    </div>
  );
};

export default LinkedinStats;