import React, { useState, useEffect, useContext } from "react";
import { IsDesktopContext } from "../contexts/IsDesktopContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/pictures/Logo.png";
import api from "../services/api";

function Navbar() {
  const navigate = useNavigate();
  const { isAdmin, setIsAdmin } = useContext(IsDesktopContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  const handleLogin = () => {
    if (!isLoggedIn) {
      const adminUser = data.find((user) => user.email === "gabyOne@gmail.com");
      setIsAdmin(adminUser !== undefined);
      setIsLoggedIn(true);
    } else {
      setIsAdmin(false);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    api.get("/admin").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleLogout = () => {
    navigate("/login");
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <div className="navbar-container">
      <nav>
        <img src={Logo} className="logo" alt="logo" />
        <ul>
          {isAdmin && (
            <Link to="/add-product">
              <li>Ajouter un article</li>
            </Link>
          )}
          <>
            <Link to="/list-article">
              <li>Estimer des articles</li>
            </Link>
            <Link to="/list-article">
              <li>Liste des articles</li>
            </Link>
            {!isAdmin ? (
              <Link to="/login">
                <li className="titleConnection">
                  Connexion
                </li>
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
