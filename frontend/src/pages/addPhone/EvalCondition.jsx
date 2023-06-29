import React from "react";

function EvalCondition({ condition, setCondition, price }) {
  return (
    <div>
      <label>État général:</label>
      <select value={condition} onChange={(e) => setCondition(e.target.value)}>
        <option value="">Sélectionner l'état général</option>
        <option value="Excellent">Excellent état</option>
        <option value="Good">Bon état</option>
        <option value="Mauvais">Mauvais état</option>
        <option value="Other">Autre</option>
      </select>
      <div>
        <label>Prix:</label>
        <span>{price} €</span>
      </div>
    </div>
  );
}
export default EvalCondition;