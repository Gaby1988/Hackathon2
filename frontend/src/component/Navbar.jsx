import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pictures/Logo.png";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div className="navbar-containe">
      <nav>
        <img src={Logo} className="logo" alt="logo" />
        <ul>
          <Link to="/add-article">
            <li>Ajouter un article</li>
          </Link>
          <Link to="/list-article">
            <li>Liste des articles</li>
          </Link>
          <Link to="/list-article">
            <li>Estimer des articles</li>
          </Link>
          {!isLoggedIn && (
            <button
              className="button-connexion"
              type="button"
              onClick={handleLogin}
            >
              <Link to="/connection">
                <li className="titleConnection">Connexion</li>
              </Link>
            </button>
          )}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
