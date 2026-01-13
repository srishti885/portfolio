import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import CustomCursor from "./components/CustomCursor"; 
import { ThemeProvider, useTheme } from "./context/ThemeContext";

// Pages Imports
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Journey from "./pages/Journey"; 
import About from "./pages/About";
import Admin from "./pages/Admin"; // --- ADDED ADMIN IMPORT ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- ThemeWrapper ---
const ThemeWrapper = ({ children }) => {
  const { isHackerMode } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = isHackerMode ? "#050505" : "#f8fafc";
    document.body.style.color = isHackerMode ? "#ffffff" : "#0f172a";
  }, [isHackerMode]);

  return (
    <div className={`
      w-full min-h-screen transition-all duration-700 ease-in-out
      ${isHackerMode 
        ? "bg-[#050505] text-white" 
        : "bg-[#f8fafc] text-slate-900"
      }
    `}>
      {children}
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
        {/* --- ADDED ADMIN ROUTE --- */}
        <Route path="/srishti-admin" element={<Admin />} /> 
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor /> 
        <ThemeWrapper>
          <AnimatedRoutes />
        </ThemeWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;