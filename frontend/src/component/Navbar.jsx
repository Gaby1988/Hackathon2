import React, { useState, useContext } from "react";
import { IsDesktopContext } from "../contexts/IsDesktopContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/pictures/Logo.png";

function Navbar() {
  const navigate = useNavigate();
  const { isAdmin, setIsAdmin } = useContext(IsDesktopContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    navigate("/login");
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <div className="navbar-container">
      <nav>
        <Link to="/">
          <img src={Logo} className="logo" alt="logo" />
        </Link>
        <ul>
          {isAdmin && (
            <Link to="/add-product">
              <li>Ajouter un article</li>
            </Link>
          )}
          <>
            <Link to="/evaluation">
              <li>Estimer des articles</li>
            </Link>
            <Link to="/list-article">
              <li>Liste des articles</li>
            </Link>
            {!isAdmin ? (
              <Link to="/login">
                <li className="titleConnection">Connexion</li>
              </Link>
            ) : (
              <Link to="/">
                <li className="titleConnection" onClick={handleLogout}>
                  Déconnexion
                </li>
              </Link>
            )}
          </>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
