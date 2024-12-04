import React from "react";
import { motion } from "framer-motion";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gold">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-gray-300 border-t-gold-dark rounded-full flex justify-center items-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <motion.div
            className="w-12 h-12 border-4 border-gray-300 border-t-gold-dark rounded-full flex justify-center items-center"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
          >
            {" "}
            <motion.div
              className="w-8 h-8 border-4 border-gray-300 border-t-gold-dark rounded-full "
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.25, ease: "linear" }}
            ></motion.div>
          </motion.div>
        </motion.div>
        <p className="mt-4 text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
