import React from "react";

function EvalModel({ brand, model, setBrand, setModel }) {
  const [showModelOptions, setShowModelOptions] = useState(false);
  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);
    setShowModelOptions(
      selectedBrand === "Apple" ||
        selectedBrand === "Samsung" ||
        selectedBrand === "Huawei" ||
        selectedBrand === "Oppo"
    );
  };
  return (
    <div>
      <div className="inputEvalModel">
        <label className="titleEvalModel">Quelle est la marque du téléphone ?</label>
        <select className="inputEvaluation" value={brand} onChange={handleBrandChange}>
          <option value="">Sélectionner une marque</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Huawei">Huawei</option>
          <option value="Oppo">Oppo</option>
          <option value="Other">Autre</option>
        </select>
      </div>
      {showModelOptions ? (
        <div className="inputEvalModel">
          <label className="titleEvalModel">Quel est le modèle du téléphone ?</label>
          <select className="inputEvaluation" value={model} onChange={(e) => setModel(e.target.value)}>
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
        <div className="inputEvalModel">
          <label className="titleEvalModel">Quel est le modèle du téléphone ?</label>
          <select className="inputEvaluation" value={model} disabled>
            <option value="">Sélectionner un modèle</option>
          </select>
        </div>
      )}
    </div>
  );
}
export default EvalModel;
