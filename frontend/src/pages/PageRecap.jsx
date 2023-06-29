import React from "react";
import BackArrow from "../component/BackArrow";
import BackgroundImg from "../assets/pictures/Bulles.png";

export default function PageRecap() {
  return (
    <div className="page-recap-container">
      <BackArrow />
      <div className="background-image">
        <h2> Fiche Récapitulative </h2>
        <img
          src={BackgroundImg}
          alt="backgroundImage"
          // style={{ bacgrounImage: BackgroundImg }}
        />
      </div>
    </div>
  );
}
