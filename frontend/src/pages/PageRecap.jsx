import React, { useContext } from "react";
import BackArrow from "../component/BackArrow";
import { IsDesktopContext } from "../contexts/IsDesktopContext";
import PhoneImg from "../assets/phone-img/Iphone-11.jpg";

export default function PageRecap() {
  const {
    brand,
    setBrand,
    model,
    setModel,
    storageCapacity,
    setStorageCapacity,
    condition,
    setCondition,
    ram,
    setRam,
    price,
    setPrice,
  } = useContext(IsDesktopContext);
  console.info(price);
  return (
    <div className="page-recap-container">
      <div className="dv-backArrow">
        <BackArrow />
      </div>
      <div className="dv-title">
        <h2> Fiche Récapitulative </h2>
      </div>
      <div className="d-container">
        <div className="dv-phone">
          <figure className="figure-phone">
            <img className="phone-img" src={PhoneImg} alt="phone-image" />
          </figure>
          <div className="dv-phone-details">
            <h3>
              {brand} {model}
            </h3>
            <h4>RAM : {ram} </h4>
            <h4>Capacité de stockage :{storageCapacity} </h4>
            <h4>Etat général : {condition} </h4>
          </div>
        </div>
        <div className="prix">
          <h3>Prix conseillé : {price} </h3>
        </div>
      </div>
    </div>
  );
}
