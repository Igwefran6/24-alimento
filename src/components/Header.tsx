import { ArrowLeft } from "lucide-react";
import BackButton from "./BackButton";
import { Cross } from "hamburger-react";
import Menus from "./Menus";
import { useState } from "react";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div>
      <Menus showMenu={showMenu} />
      <div className="flex justify-between items-center mb-8">
        <BackButton>
          <span className="text-2xl font-bold text-gray-950 flex items-center gap-2 hover:opacity-75">
            <ArrowLeft /> Go back
          </span>
        </BackButton>
        <div className="z-50 fixed top-12 right-0 -translate-x-1/2 -translate-y-1/2 bg-gray-50">
          <Cross onToggle={() => setShowMenu((prev) => !prev)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
