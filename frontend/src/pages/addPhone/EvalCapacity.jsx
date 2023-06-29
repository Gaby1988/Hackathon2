import React from "react";

function EvalCapacity({ storageCapacity, setStorageCapacity, ram, setRam }) {
  return (
    <>
      <div>
        <label>Quelle est la capacité de stockage ?</label>
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
        <label>RAM:</label>
        <select value={ram} onChange={(e) => setRam(e.target.value)}>
          <option value="">Sélectionner la RAM</option>
          <option value="2GB">2GB</option>
          <option value="4GB">4GB</option>
          <option value="8GB">8GB</option>
          <option value="16GB">16GB</option>
        </select>
      </div>
    </>
  );
}
export default EvalCapacity;
