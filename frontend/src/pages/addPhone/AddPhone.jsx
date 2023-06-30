import React, { useState, useContext } from "react";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import { Link } from "react-router-dom";
import EvalModel from "./EvalModel";
import EvalCapacity from "./EvalCapacity";
import EvalCondition from "./EvalCondition";
import ordiTabletPhone from "../../assets/pictures/ordi-tablet-tel.png";

import { Steps } from "primereact/steps";

function AddPhone() {
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

  const [page, setPage] = useState(0);
  const [basePrice, setBasePrice] = useState(500);

  const formTitle = ["model", "capacity", "condition"];

  const [activeIndex, setActiveIndex] = useState(0); // Start with the first step (index 0)

  const items = [
    {
      label: "Step 1",
      component: (
        <EvalModel
          brand={brand}
          setBrand={setBrand}
          model={model}
          setModel={setModel}
        />
      ),
    },
    {
      label: "Step 2",
      component: (
        <EvalCapacity
          storageCapacity={storageCapacity}
          setStorageCapacity={setStorageCapacity}
          ram={ram}
          setRam={setRam}
        />
      ),
    },
    {
      label: "Step 3",
      component: (
        <EvalCondition
          condition={condition}
          setCondition={setCondition}
          price={price}
        />
      ),
    },
  ];

  const handlePriceWithBrand = (currentBrand) => {
    let result = price;
    switch (currentBrand) {
      case "Apple":
        result = result + 200;
        break;
      case "Samsung":
        result = result + 150;
        break;
      case "Huawei":
        result = result + 100;
        break;
      case "Oppo":
        result = result + 50;
        break;
      case "Other":
        result = result + 25;
        break;
      default:
        break;
    }
    return result;
  };

  const handlePriceWithModel = (currentModel, price) => {
    let result = price;
    switch (currentModel) {
      case "iPhone X" || "Galaxy S9" || "Oppo Reno 4" || "Huawei P30":
        result = result + 100;
        break;
      case "iPhone XS" ||
        "Galaxy S10" ||
        "Oppo Find X2" ||
        "Huawei Mate 20 Pro":
        result = result + 80;
        break;
      case "Huawei P 20":
        result = result + 50;
        break;
      case "Oppo Find X2 Pro":
        result = result + 25;
        break;
      case "Other":
        result = result + 12;
        break;
      default:
        break;
    }
    return result;
  };

  const handlePriceWithCapacity = (currentCapacity, price) => {
    let result = price;
    switch (currentCapacity) {
      case "16GB":
        result = result + 6;
        break;
      case "32GB":
        result = result + 12;
        break;
      case "64GB":
        result = result + 25;
        break;
      case "128GB":
        result = result + 50;
        break;
      case "256GB":
        result = result + 100;
        break;
      default:
        break;
    }
    return result;
  };

  const handlePriceWithCondition = (currentCondition, price) => {
    let result = price;
    switch (currentCondition) {
      case "Excellent":
        result = result + 100;
        break;
      case "Good":
        result = result + 50;
        break;
      case "Mauvais":
        result = result + 25;
        break;
      default:
        console.log("current", currentCondition);
        break;
    }
    return result;
  };

  const handlePriceWithRam = (currentRam, price) => {
    let result = price;
    switch (currentRam) {
      case "2GB":
        result = result + 25;
        break;
      case "4GB":
        result = result + 50;
        break;
      case "8GB":
        result = result + 100;
        break;
      case "16GB":
        result = result + 150;
        break;
      default:
        break;
    }
    return result;
  };

  //calcul price
  const calculatePrice = () => {
    const priceBrand = handlePriceWithBrand(brand);
    const priceModel = handlePriceWithModel(model, priceBrand);
    const priceCapacity = handlePriceWithCapacity(storageCapacity, priceModel);
    const priceRam = handlePriceWithRam(ram, priceCapacity);
    const priceCondition = handlePriceWithCondition(condition, priceRam);
    setPrice(priceCondition);
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
          <Steps
            model={items}
            activeIndex={activeIndex}
            onSelect={(e) => setActiveIndex(e.index)}
            readOnly={false}
          />
          <div className="step-content">{items[activeIndex].component}</div>
        </div>
        <div className="containerQuestionsAndStep">
          <div className="footerQuestions">
            <button
              className="primary-button"
              disabled={activeIndex === 0}
              onClick={() => {
                setActiveIndex((currPage) => currPage - 1);
              }}
            >
              prev
            </button>
            <button
              className="primary-button"
              disabled={activeIndex === formTitle.length - 1}
              onClick={() => {
                setActiveIndex((currPage) => currPage + 1);
              }}
            >
              next
            </button>
            <Link to="/phone-recap">
              <button onClick={calculatePrice} className="btn-calculate">
                Calculer le prix
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPhone;
