import React from "react";
import BackArrow from "../component/BackArrow";
import BackgroundImg from "../assets/pictures/Bulles.png";
import PhoneImg from "../assets/phone-img/Iphone-11.jpg";

export default function PageRecap() {
  return (
    <div className="page-recap-container">
      <div className="dv-img">
        <img
          className="background-img"
          src={BackgroundImg}
          alt="backgroundImage"
        />
      </div>
      <div className="dv-backArrow">
        <BackArrow />
      </div>
      <div className="dv-title">
        <h2> Fiche Récapitulative </h2>
      </div>
      <div className="dv-phone">
        <figure className="figure-phone">
          <img className="phone-img" src={PhoneImg} alt="phone-image" />
        </figure>
        <div className="dv-phone-details">
          <h3>iPhone 14 - Noir</h3>
          <h4>RAM : </h4>
          <h4>Capacité de stockage : </h4>
          <h4>Etat général : </h4>
        </div>
      </div>
      <div className="prix">
        <h3>Prix conseillé : </h3>
      </div>
    </div>
  );
}
