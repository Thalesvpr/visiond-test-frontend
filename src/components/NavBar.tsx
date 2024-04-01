import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/AuthService";
import {ButtonAction} from "./Button";

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    function handleLogout() {
        logout()
        navigate('/login');
    }
  return (
    <nav className=" shadow-sm h-16 flex items-center justify-between px-4">
      <h1 className="text-black font-semibold text-xl">Form Maker</h1>

      <ButtonAction onClick={handleLogout}>Sair</ButtonAction>
    </nav>
  );
};

export default NavBar;