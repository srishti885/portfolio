import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Spring animation for smooth "trailing" effect
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* 1. The Main Dot (Tezz move hoga) */}
      <motion.div
        style={{
          position: 'fixed',
          left: mousePos.x,
          top: mousePos.y,
          width: '8px',
          height: '8px',
          backgroundColor: '#00c4cc',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* 2. The Outer Ring (Dheere peeche aayega - Neural Look) */}
      <motion.div
        style={{
          position: 'fixed',
          left: cursorX,
          top: cursorY,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(0, 196, 204, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: 'rgba(0, 196, 204, 0.05)',
        }}
      />
    </>
  );
};

export default CustomCursor;