import { motion } from "framer-motion";
import React from "react";

const Button: React.FC<{
  label: string;
  labelColor: string;
  color: string;
  onPress: () => void;
}> = ({ label, labelColor, color, onPress }) => {
  return (
    <motion.button
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className={`relative py-4 px-8 border-${color} border-4 font-bold font-Gambarino overflow-hidden backdrop-blur-md`}
      onClick={onPress}
      style={{
        position: "relative",
        display: "inline-block",
        color: "black",
      }}
    >
      {/* Background Filling Animation */}
      <motion.div
        className={`absolute inset-0 bg-${color} z-0`}
        style={{
          scaleX: 0,
          transformOrigin: "left",
          position: "absolute",
        }}
        variants={{
          hover: { scaleX: 1, transition: { duration: 0.3 } },
          initial: { scaleX: 0 },
        }}
      />
      {/* Text Content */}
      <p className={`relative lg:text-2xl z-10 text-${labelColor}`}>{label}</p>
    </motion.button>
  );
};

export default Button;
