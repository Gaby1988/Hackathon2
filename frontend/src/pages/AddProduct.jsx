import React from "react" ;
import Bulles from "../assets/pictures/Bulles.png";
import Drop from "../component/Drop";
import BackArrow from "../component/BackArrow";

function AddProduct() {
  return (
    <>
      <div className="arrowBack">
        <BackArrow />
      </div>
      <h2 className="titleAddProduct">AJOUTER UN ARTICLE</h2>
      <div className="inputLogo">
        <div className="input-container">
          <label htmlFor="product-select"></label>
          <select name="product" className="product">
            <option value="">Insérer l'appareil</option>
            <option value="smartphone">Smartphone</option>
            <option value="tablet">Tablette</option>
            <option value="computer">Ordinateur</option>
            <option value="accessory">Accessoire</option>
          </select>
          <select name="brand" className="product">
            <option value="">Insérer la marque</option>
            <option value="iPhone">iPhone</option>
            <option value="samsung">Samsung</option>
            <option value="huawei">Huawei</option>
            <option value="oppo">Oppo</option>
            <option value="xiaomi">Xiaomi</option>
          </select>
          <select name="model" className="product">
            <option value="">Insérer le modèle</option>
            <option value="11">11</option>
            <option value="se">SE</option>
            <option value="x">X</option>
          </select>
          <select name="storage-capacity" className="product">
            <option value="">Insérer la capacité de stockage</option>
            <option value="16 Go">16 Go</option>
            <option value="32 Go">32 Go</option>
            <option value="64 Go">64 Go</option>
            <option value="128 Go">128 Go</option>
            <option value="256 Go">256 Go</option>
            <option value="512 Go Go">512 Go</option>
            <option value="1 To">1 To</option>
          </select>
          <select name="ram" className="product">
            <option value="">Insérer la ram</option>
            <option value="4 Go">4 Go</option>
            <option value="8 Go">8 Go</option>
            <option value="16 Go">16 Go</option>
          </select>
          <select name="condition" className="product">
            <option value="">Insérer l'état général</option>
            <option value="bon état">Bon état</option>
            <option value="très bon état">Très bon état</option>
            <option value="neuf">Neuf</option>
          </select>
          <Drop className="drop"/>
        </div>
        <img src={Bulles} className="bulleLogo" alt="décoration avec le logo" />
      </div>
    </>
  );
}
export default AddProduct;
