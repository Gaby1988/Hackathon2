import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/pictures/arrow.png";

function BackArrow() {
  const navigate = useNavigate();
  return (
    <div className="back-arrow-container">
      <button
        className="back-arrow-button"
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        <p>Retour</p>
        <img
          className="arrow"
          src={backArrow}
          alt="back"
          style={{ cursor: "pointer" }}
        />
      </button>
    </div>
  );
}
export default BackArrow;
