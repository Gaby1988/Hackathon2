import React from "react";
import Smartphone from "../../assets/pictures/smartphone.png";
import Tablette from "../../assets/pictures/tablette.png";
import Ordinateur from "../../assets/pictures/ordinateur.png";
import Accessoires from "../../assets/pictures/accessoires.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <h2>Choisissez votre appareil</h2>
      <div className="container-appareils">
        <Link to="/evaluation">
          <div className="smartphone">
            <h3>Smartphone</h3>
            <img
              className="smartphone-img"
              src={Smartphone}
              alt="photo de téléphone"
            />
          </div>
        </Link>
        <div className="tablette">
          <h3>Tablette</h3>
          <img className="tablette-img" src={Tablette} alt="" />
        </div>
        <div className="ordinateur">
          <h3>Ordinateur</h3>
          <img className="ordinateur-img" src={Ordinateur} alt="" />
        </div>
        <div className="accessoires">
          <h3>Accessoire</h3>
          <img className="accessoires-img" src={Accessoires} alt="" />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
