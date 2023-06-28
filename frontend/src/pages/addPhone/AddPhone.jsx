import React, { useState } from "react";

function AddPhone() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [storageCapacity, setStorageCapacity] = useState("");
  const [condition, setCondition] = useState("");
  const [ram, setRam] = useState("");
  const [price, setPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
 

  console.info(data);
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
    <div>
      <h2>Phone Price Calculator</h2>
      <div>
        <label>Marque:</label>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="">Sélectionner une marque</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Huawei">Huawei</option>
          <option value="Oppo">Oppo</option>
          <option value="Other">Autre</option>
        </select>
      </div>
      {brand === "Apple" ||
      brand === "Samsung" ||
      brand === "Huawei" ||
      brand === "Oppo" ? (
          <div>
            <label>Modèle:</label>
            <select value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="">Sélectionner un modèle</option>
              {brand === "Apple" && (
                <>
                  <option value="iPhone X">iPhone X</option>
                  <option value="iPhone XS">iPhone XS</option>
                  <option value="iPhone 11">iPhone 11</option>
                </>
              )}
              {brand === "Samsung" && (
                <>
                  <option value="Galaxy S9">Galaxy S9</option>
                  <option value="Galaxy S10">Galaxy S10</option>
                  <option value="Galaxy S20">Galaxy S20</option>
                </>
              )}
              {brand === "Oppo" && (
                <>
                  <option value="Oppo Reno 4">Oppo Reno 4</option>
                  <option value="Oppo Find X2">Oppo Find X2</option>
                  <option value="Oppo A92">Oppo A92</option>
                </>
              )}
              {brand === "Huawei" && (
                <>
                  <option value="Huawei P30">Huawei P30</option>
                  <option value="Huawei Mate 20 Pro">Huawei Mate 20 Pro</option>
                  <option value="Huawei Nova 7i">Huawei Nova 7i</option>
                </>
              )}
            </select>
          </div>
        ) : (
          <div>
            <label>Modèle:</label>
            <select value={model} disabled>
              <option value="">Sélectionner un modèle</option>
            </select>
          </div>
        )}
      <div>
        <label>Capacité de stockage:</label>
        <select
          value={storageCapacity}
          onChange={(e) => setStorageCapacity(e.target.value)}
        >
          <option value="">Sélectionner une capacité de stockage</option>
          <option value="16GB">16GB</option>
          <option value="32GB">32GB</option>
          <option value="64GB">64GB</option>
          <option value="128GB">128GB</option>
          <option value="256GB">256GB</option>
        </select>
      </div>
      <div>
        <label>État général:</label>
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value="">Sélectionner l'état général</option>
          <option value="Excellent">Excellent état</option>
          <option value="Good">Bon état</option>
          <option value="Mauvais">Mauvais état</option>
          <option value="Other">Autre</option>
        </select>
      </div>
      <div>
        <label>RAM:</label>
        <select value={ram} onChange={(e) => setRam(e.target.value)}>
          <option value="">Sélectionner la RAM</option>
          <option value="2GB">2GB</option>
          <option value="4GB">4GB</option>
          <option value="8GB">8GB</option>
          <option value="16GB">16GB</option>
        </select>
      </div>
      <button onClick={calculatePrice}>Calculer le prix</button>
      <div>
        <label>Prix:</label>
        <span>{price} €</span>
      </div>
    </div>
  );
}

export default AddPhone;
