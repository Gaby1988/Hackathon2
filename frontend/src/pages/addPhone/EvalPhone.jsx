import React, { useState } from "react";
import EvalModel from "./EvalModel";
import EvalCapacity from "./EvalCapacity";
import EvalCondition from "./EvalCondition";
import ordiTabletPhone from "../../assets/pictures/ordi-tablet-tel.png";

function EvalPhone() {
  const [page, setPage] = useState(0);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [storageCapacity, setStorageCapacity] = useState("");
  const [condition, setCondition] = useState("");
  const [ram, setRam] = useState("");

  const formTitle = ["model", "capacity", "condition"];

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <EvalModel
          brand={brand}
          setBrand={setBrand}
          model={model}
          setModel={setModel}
        />
      );
    } else if (page === 1) {
      return (
        <EvalCapacity
          storageCapacity={storageCapacity}
          setStorageCapacity={setStorageCapacity}
          ram={ram}
          setRam={setRam}
        />
      );
    } else {
      return (
        <EvalCondition condition={condition} setCondition={setCondition} />
      );
    }
  };

  return (
    <div className="add-phone-container">
      <div className="left-side-page-container">
        <img src={ordiTabletPhone} alt="" />
        <div className="recap-value-tel">
          {brand ? <p> {brand}</p> : <p>marque</p>}
          {model ? <p> {model}</p> : <p>modèle</p>}
          {storageCapacity ? (
            <p> {storageCapacity}</p>
          ) : (
            <p>Capacité de stockage</p>
          )}
          {ram ? <p> {ram}</p> : <p>ram</p>}
          {condition ? <p> {condition}</p> : <p> condition</p>}
        </div>
      </div>
      <div className="right-side-page-container">
        <div className="containerQuestionsAndStep">
          <div className="questionsConatiner">
            <div className="headerQuestions">
              <h3>{formTitle[page]}</h3>
            </div>
            <div className="questions"> {pageDisplay()}</div>
            <div className="footerQuestions">
              <button
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                prev
              </button>
              <button
                disabled={page === formTitle.length - 1}
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EvalPhone;
