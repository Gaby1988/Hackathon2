import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pictures/Logo.png";
import api from "../services/api";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get("/admin").then((response) => {
      setData(response.data);
    });
  }, []);

  console.info(data);

  return (
    <div className="navbar-container">
      <nav>
        <Link to="/home">
          <img src={Logo} className="logo" alt="logo" />
        </Link>
        <ul>
          <Link to="/add-product">
            <li>Ajouter un article</li>
          </Link>
          <Link to="/list-article">
            <li>Liste des articles</li>
          </Link>
          <Link to="/list-article">
            <li>Estimer des articles</li>
          </Link>
          {!isLoggedIn && (
            <Link to="/">
              <li className="titleConnection" onClick={handleLogin}>
                Connexion
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
