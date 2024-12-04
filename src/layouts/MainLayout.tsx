import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
