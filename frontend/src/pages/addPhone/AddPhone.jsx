import React, { useState, useRef } from "react";
import EvalModel from "./EvalModel";
import EvalCapacity from "./EvalCapacity";
import EvalCondition from "./EvalCondition";
import ordiTabletPhone from "../../assets/pictures/ordi-tablet-tel.png";

import { Steps } from "primereact/steps";
import { Toast } from "primereact/toast";

function AddPhone() {
  const [page, setPage] = useState(0);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [storageCapacity, setStorageCapacity] = useState("");
  const [condition, setCondition] = useState("");
  const [ram, setRam] = useState("");
  const [price, setPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);

  const [activeIndex, setActiveIndex] = useState(1);
  const toast = useRef(null);

  const formTitle = ["model", "capacity", "condition"];

  const items = [
    {
      label: "Modèle",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "First Step",
          detail: event.item.label,
        });
      },
    },
    {
      label: "Capacité",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Second Step",
          detail: event.item.label,
        });
      },
    },
    {
      label: "Condition",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Last Step",
          detail: event.item.label,
        });
      },
    },
  ];

  //page display questions
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

  //calcul price
  const calculatePrice = () => {
    setBasePrice(500); // Prix de base
    switch (brand) {
      case "Apple":
        setBasePrice((prev) => (prev += 200));
        break;
      case "Samsung":
        setBasePrice((prev) => (prev += 150));
        break;
      case "Huawei":
        setBasePrice((prev) => (prev += 100));
        break;
      case "Oppo":
        setBasePrice((prev) => (prev += 50));
        break;
      case "Other":
        setBasePrice((prev) => (prev += 25));
        break;
      default:
        break;
    }
    switch (model) {
      case "'iPhone X' || model === 'Galaxy S9' || model === 'Oppo Reno 4' || model === 'Huawei P30'":
        setBasePrice((prev) => (prev += 100));
        break;
      case "'iPhone XS' || model === 'Galaxy S10' || model === 'Oppo Find X2' || model === 'Huawei Mate 20 Pro":
        setBasePrice((prev) => (prev += 80));
        break;
      case "Huawei P 20":
        setBasePrice((prev) => (prev += 50));
        break;
      case "Oppo Find X2 Pro":
        setBasePrice((prev) => (prev += 25));
        break;
      case "Other":
        setBasePrice((prev) => (prev += 12));
        break;
      default:
        break;
    }
    switch (storageCapacity) {
      case "16GB":
        setBasePrice((prev) => (prev += 6));
        break;
      case "32GB":
        setBasePrice((prev) => (prev += 12));
        break;
      case "64GB":
        setBasePrice((prev) => (prev += 25));
        break;
      case "128GB":
        setBasePrice((prev) => (prev += 50));
        break;
      case "256GB":
        setBasePrice((prev) => (prev += 100));
        break;
      default:
        break;
    }
    switch (condition) {
      case "Excellent":
        setBasePrice((prev) => (prev += 100));
        break;
      case "Good":
        setBasePrice((prev) => (prev += 50));
        break;
      case "Mauvais":
        setBasePrice((prev) => (prev += 25));
        break;
      case "Other":
        setBasePrice((prev) => (prev += 0));
        break;
      default:
        break;
    }
    switch (ram) {
      case "2GB":
        setBasePrice((prev) => (prev += 25));
        break;
      case "4GB":
        setBasePrice((prev) => (prev += 50));
        break;
      case "8GB":
        setBasePrice((prev) => (prev += 100));
        break;
      case "16GB":
        setBasePrice((prev) => (prev += 150));
        break;
      default:
        break;
    }
    setPrice(basePrice);
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
        <div className="card">
          <Toast ref={toast}></Toast>
          <Steps
            model={items}
            activeIndex={activeIndex}
            onSelect={(e) => setActiveIndex(e.index)}
            readOnly={false}
          />
        </div>
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
export default AddPhone;
