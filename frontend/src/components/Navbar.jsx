import { Link, useLocation } from "react-router-dom";
import NeuralToggle from "./NeuralToggle"; // Toggle import kiya

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Journey", path: "/journey" },
    { name: "Projects", path: "/projects" },
    { name: "Portal", path: "/portal" }
  ];

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  };

  const getButtonStyle = (isActive) => ({
    padding: '12px 35px', 
    margin: '0 15px', 
    borderRadius: '25px',
    fontSize: '18px', 
    fontWeight: '800',
    textDecoration: 'none',
    transition: '0.4s all ease',
    backgroundColor: isActive ? '#00c4cc' : 'rgba(255, 255, 255, 0.05)',
    color: isActive ? 'black' : 'white',
    border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: isActive ? '0 0 30px rgba(0,196,204,0.4)' : 'none'
  });

  return (
    <nav style={{
      position: 'fixed',
      top: '50px',
      left: 0,
      width: '100%',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 60px'
    }}>
      {/* 1. Logo Section */}
      <div style={{ fontSize: '45px', fontWeight: '900', color: 'white', letterSpacing: '-2px' }}>
        SG<span style={{ color: '#00c4cc' }}>.</span>
      </div>
      
      {/* 2. Main Navigation Buttons */}
      <div style={buttonContainerStyle}>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link 
              key={link.path} 
              to={link.path} 
              style={getButtonStyle(isActive)}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* 3. Right Section: Neural Toggle + Exit Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <NeuralToggle /> {/* Yahan aapka wow feature add ho gaya! */}
        
        <Link 
          to="/" 
          style={{
            padding: '15px 35px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            color: 'white',
            fontSize: '14px',
            fontWeight: '900',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          EXIT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;