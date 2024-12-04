import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

const AnimatedPresence: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Math.random()} // Ensure each child triggers animation
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPresence;
