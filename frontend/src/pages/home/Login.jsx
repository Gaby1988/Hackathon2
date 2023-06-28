import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

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
      <form>
        <label>
          UserName: <br />
          <InputText value={userName} onChange={handleChangeMail} />
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
        <button type="submit">connexion</button>
      </form>
    </div>
  );
}
export default Login;
