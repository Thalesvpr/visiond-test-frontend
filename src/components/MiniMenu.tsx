import React, { ReactNode, useState } from "react";
import { IconButton } from "./Button";
import { FaBars, FaXmark } from "react-icons/fa6";

interface Props {
  children: ReactNode;
}

const MiniMenu: React.FC<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 p-4 z-20">
      <IconButton onClick={toggleMenu}>
        {menuOpen ? <FaXmark /> : <FaBars />}
      </IconButton>
      <div
      onClick={toggleMenu}
        className={`fixed bottom-0 right-0 p-4 flex flex-col justify-center z-10 transition-transform duration-300 ${
          menuOpen ? "translate-y-0 bottom-10" : "translate-y-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default MiniMenu;
