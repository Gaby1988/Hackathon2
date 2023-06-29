import React from "react";
import BackArrow from "../component/BackArrow";
import { Link } from "react-router-dom";

export default function PageRecap() {
  return (
    <div className="page-recap-container">
      <Link to="/home">
        <BackArrow />
      </Link>
      <h2> Fiche Récapitulative </h2>
    </div>
  );
}
