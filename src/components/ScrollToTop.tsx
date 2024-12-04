import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top on route change
  }, [pathname]); // Run the effect whenever the path changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
