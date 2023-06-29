import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IsDesktopContext } from "../../contexts/IsDesktopContext";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import bulles from "../../assets/pictures/Bulles.png";
import api from "../../services/api";

function Login() {
  const navigate = useNavigate();
  const { isAdmin, setIsAdmin } = useContext(IsDesktopContext);
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const maxl = 250;
  console.info(isAdmin);
  const handleChangeMail = (event) => {
    if (event.target.value.length <= maxl) {
      setUserName(event.target.value);
    }
  };
  useEffect(() => {
    api.get("/admin").then((response) => {
      setData(response.data);
    });
  }, []);

  const [password, setPassword] = useState("");

  const handleChangePassword = (event) => {
    if (event.target.value.length <= maxl) {
      setPassword(event.target.value);
    }
    console.error(maxl);
  };
  const dataMap = data.map((item) => item.email);
  const handleLogin = () => {
    if (userName === dataMap[0]) {
      navigate("/");
      setIsAdmin(true);
    } else {
      navigate("/ethrte");
    }
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
        <button className="primary-button" onClick={() => handleLogin()}>
          Connexion
        </button>
      </form>
    </div>
  );
}

export default Login;
