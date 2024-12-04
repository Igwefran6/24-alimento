import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Goes back one step in the browser history
  };

  return (
    <button onClick={handleBack} className="">
      {children}
    </button>
  );
};

export default BackButton;
