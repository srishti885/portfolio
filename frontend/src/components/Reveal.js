import React from "react";
import { motion } from "framer-motion";

export const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }} // Shuruat mein niche aur invisible
      whileInView={{ opacity: 1, y: 0 }} // Scroll karte hi upar aur visible
      viewport={{ once: true }} // Sirf ek baar animate ho
      transition={{ duration: 0.5, delay: 0.25 }} // Speed aur thoda wait
    >
      {children}
    </motion.div>
  );
};