import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import bulles from "../../assets/pictures/Bulles.png";
import { Link } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const handleChangeMail = (event) => {
  //   if (event.target.value.length <= maxl) {
  //     setUserName(event.target.value);
  //   }
  // };
  // const handleChangePassword = (event) => {
  //   if (event.target.value.length <= maxl) {
  //     setPassword(event.target.value);
  //   }
  //   console.error(maxl);
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = { email, password };
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/admin`, body);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login-container">
      <img src={bulles} alt="" />
      <h2>SE CONNECTER</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email: <br />
          <InputText
            className="input-text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Mot de passe : <br />
          <Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            feedback={false}
            toggleMask
          />
        </label>
        <Link to="/homepage">
          <button
            className="primary-button"
            type="submit"
            onClick={handleSubmit}
          >
            connexion
          </button>
        </Link>
      </form>
    </div>
  );
}
export default Login;
