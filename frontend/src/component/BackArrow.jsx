import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/icons/backarrow-icon.svg";
import "../../styles/App.scss";

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
