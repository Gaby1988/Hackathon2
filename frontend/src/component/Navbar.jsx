import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-containe">
      <nav>
        <p>Logo</p>
        <ul>
          <Link to="/add-article">
            <li>Ajouter un article</li>
          </Link>
          <Link to="/list-article">
            <li>Liste des articles</li>
          </Link>
          <Link to="/connection">
            <li>Connexion</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
