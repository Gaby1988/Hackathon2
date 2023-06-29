import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import bulles from "../../assets/pictures/Bulles.png";
import { Link } from "react-router-dom";
function Login() {
  const [userName, setUserName] = useState("");

  const maxl = 250;

  const handleChangeMail = (event) => {
    if (event.target.value.length <= maxl) {
      setUserName(event.target.value);
    }
  };

  const [password, setPassword] = useState("");

  const handleChangePassword = (event) => {
    if (event.target.value.length <= maxl) {
      setPassword(event.target.value);
    }
    console.error(maxl);
  };
  return (
    <div className="login-container">
      <img src={bulles} alt="" />
      <h2>SE CONNECTER</h2>
      <form>
        <label>
          Email: <br />
          <InputText
            className="input-text"
            value={userName}
            onChange={handleChangeMail}
          />
        </label>
        <label>
          Mot de passe : <br />
          <Password
            value={password}
            onChange={handleChangePassword}
            feedback={false}
            toggleMask
          />
        </label>
        <Link to="/homepage">
          <button className="primary-button" type="submit">
            connexion
          </button>
        </Link>
      </form>
    </div>
  );
}
export default Login;
