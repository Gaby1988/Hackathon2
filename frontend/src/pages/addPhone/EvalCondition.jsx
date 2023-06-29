import React from "react";

function EvalCondition({ condition, setCondition, price }) {
  return (
    <div className="inputEvalCondition">
      <label className="titleEvalCondition">État général du téléphone:</label>
      <select className="inputEvaluationCondition" value={condition} onChange={(e) => setCondition(e.target.value)}>
        <option value="">Sélectionner l'état général</option>
        <option value="Excellent">Excellent état</option>
        <option value="Good">Bon état</option>
        <option value="Mauvais">Mauvais état</option>
        <option value="Other">Autre</option>
      </select>
      <div>
      </div>
    </div>
  );
}
export default EvalCondition;
