// import React from "react";

// function PhoneDistpacthViewAllWithPrice({ item }) {
//   console.info(item);
//   const [brand, setBrand] = useState("");
//   const [model, setModel] = useState("");
//   const [storageCapacity, setStorageCapacity] = useState("");
//   const [condition, setCondition] = useState("");
//   const [ram, setRam] = useState("");
//   const [price, setPrice] = useState(0);
//   const [basePrice, setBasePrice] = useState(0);

//   console.info(data);
//   const calculatePrice = () => {
//     setBasePrice(500); // Prix de base

//     switch (brand) {
//     case "Apple":
//       setBasePrice((prev) => (prev += 200));
//       break;
//     case "Samsung":
//       setBasePrice((prev) => (prev += 150));
//       break;
//     case "Huawei":
//       setBasePrice((prev) => (prev += 100));
//       break;
//     case "Oppo":
//       setBasePrice((prev) => (prev += 50));
//       break;
//     case "Other":
//       setBasePrice((prev) => (prev += 25));
//       break;
//     default:
//       break;
//     }

//     switch (model) {
//     case "'iPhone X' || model === 'Galaxy S9' || model === 'Oppo Reno 4' || model === 'Huawei P30'":
//       setBasePrice((prev) => (prev += 100));
//       break;
//     case "'iPhone XS' || model === 'Galaxy S10' || model === 'Oppo Find X2' || model === 'Huawei Mate 20 Pro":
//       setBasePrice((prev) => (prev += 80));
//       break;
//     case "Huawei P 20":
//       setBasePrice((prev) => (prev += 50));
//       break;
//     case "Oppo Find X2 Pro":
//       setBasePrice((prev) => (prev += 25));
//       break;
//     case "Other":
//       setBasePrice((prev) => (prev += 12));
//       break;
//     default:
//       break;
//     }
//     switch (storageCapacity) {
//     case "16GB":
//       setBasePrice((prev) => (prev += 6));
//       break;
//     case "32GB":
//       setBasePrice((prev) => (prev += 12));
//       break;
//     case "64GB":
//       setBasePrice((prev) => (prev += 25));
//       break;
//     case "128GB":
//       setBasePrice((prev) => (prev += 50));
//       break;
//     case "256GB":
//       setBasePrice((prev) => (prev += 100));
//       break;
//     default:
//       break;
//     }

//     switch (condition) {
//     case "Excellent":
//       setBasePrice((prev) => (prev += 100));
//       break;
//     case "Good":
//       setBasePrice((prev) => (prev += 50));
//       break;
//     case "Mauvais":
//       setBasePrice((prev) => (prev += 25));
//       break;
//     case "Other":
//       setBasePrice((prev) => (prev += 0));
//       break;
//     default:
//       break;
//     }

//     switch (ram) {
//     case "2GB":
//       setBasePrice((prev) => (prev += 25));
//       break;
//     case "4GB":
//       setBasePrice((prev) => (prev += 50));
//       break;
//     case "8GB":
//       setBasePrice((prev) => (prev += 100));
//       break;
//     case "16GB":
//       setBasePrice((prev) => (prev += 150));
//       break;
//     default:
//       break;
//     }

//     setPrice(basePrice);
//   };
//   return (
//     <div className="phoneDistpacthViewAllWithPrice">
//       <figure className="figureForImage">
//         <img
//           className="imagePhone"
//           src={item.picture}
//           alt={item.brandSpecification}
//         />
//       </figure>
//       <h3>
//         {item.brandSpecification} {item.modelSpecification}
//       </h3>
//       <h3>{item.storageSpecification}</h3>
//       <h2>Price</h2>
//     </div>
//   );
// }
// export default PhoneDistpacthViewAllWithPrice;

import React, { useState, useEffect } from "react";

function PhoneDistpacthViewAllWithPrice({ item }) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [storageCapacity, setStorageCapacity] = useState("");
  const [condition, setCondition] = useState("");
  const [ram, setRam] = useState("");
  const [price, setPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);

  useEffect(() => {
    calculatePrice();
  }, [
    item.brandSpecification,
    item.modelSpecification,
    item.storageSpecification,
    item.StateSpecification,
    item.ramSpecification,
  ]);

  const calculatePrice = () => {
    setBasePrice(300);

    switch (item.brandSpecification) {
      case "Iphone":
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

    switch (item.modelSpecification) {
      case "iPhone X" || "Galaxy S9" || "Oppo Reno 4" || "Huawei P30":
        setBasePrice((prev) => (prev += 100));
        break;
      case "iPhone XS" ||
        "Galaxy S10" ||
        "Oppo Find X2" ||
        "Huawei Mate 20 Pro":
        setBasePrice((prev) => (prev += 80));
        break;
      case "Huawei P20":
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

    switch (item.storageSpecification) {
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

    switch (item.StateSpecification) {
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

    switch (item.ramSpecification) {
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
  useEffect(() => {
    calculatePrice();
  }, []);
  return (
    <div className="phoneDistpacthViewAllWithPrice">
      <figure className="figureForImage">
        <img
          className="imagePhone"
          src={item.picture}
          alt={item.brandSpecification}
        />
      </figure>
      <h3>
        {item.brandSpecification} {item.modelSpecification}
      </h3>
      <h3>{item.storageSpecification}</h3>
      <h2>Price: {price}</h2>
    </div>
  );
}

export default PhoneDistpacthViewAllWithPrice;
