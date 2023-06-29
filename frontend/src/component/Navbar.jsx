import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pictures/Logo.png";

function Navbar() {
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
          <Link to="/connection">
            <li className="titleConnection">Connexion</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
