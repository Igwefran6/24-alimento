import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  const menuVariant = {
    initial: { opacity: 0 }, // Start invisible
    animate: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }, // Smooth fade-in
    },
    exit: {
      opacity: 0, // Fade-out when exiting
      transition: { duration: 0.5, ease: "easeInOut" }, // Smooth fade-out
    },
  };

  return (
    <motion.div
      variants={menuVariant}
      initial="initial"
      animate="animate"
      exit="exit" // Apply the exit animation
      className="fixed top-0 right-0 w-screen h-screen z-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 215, 0, 0), rgba(255, 215, 0, 0.4)), url('/food/food-on-table.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur Overlay */}
      <div
        className="absolute inset-0 z-30"
        style={{
          backdropFilter: "blur(8px)", // Apply backdrop filter for blur effect
          WebkitBackdropFilter: "blur(8px)", // For Safari support
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent overlay
        }}
      />

      {/* Content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center text-white z-40">
        <h1 className="text-4xl font-bold mb-8 font-Gambarino">Menu</h1>
        <nav className="flex flex-col allura-regular space-y-6 text-center">
          <Link to="/" className="text-5xl hover:text-gold-light transition">
            Home
          </Link>
          <Link
            to="/our-story"
            className="text-5xl hover:text-gold-light transition"
          >
            Our Story
          </Link>
          <Link
            to="/menu"
            className="text-5xl hover:text-gold-light transition"
          >
            Menu
          </Link>
          <Link
            to="/gallery"
            className="text-5xl hover:text-gold-light transition"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-5xl hover:text-gold-light transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.div>
  );
};

const MenuWrapper = ({ showMenu }: { showMenu: boolean }) => {
  return (
    <AnimatePresence>
      {/* Menu will now wait for the exit animation before unmounting */}
      {showMenu && <Menu />}
    </AnimatePresence>
  );
};

export default MenuWrapper;
