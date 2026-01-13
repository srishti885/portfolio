import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isHackerMode, setIsHackerMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isHackerMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isHackerMode]);

  return (
    <ThemeContext.Provider value={{ isHackerMode, setIsHackerMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);