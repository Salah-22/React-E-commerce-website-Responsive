import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCSS from "./LoginCSS.module.css";
import "../index.css";
import { useUser } from "../context/UserContext";

const Login = () => {
  const { setLogin } = useUser();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name === "user" && pass === "wic2") {
      setLogin(true);
      navigate("/Cart");
    } else {
      setLogin(false);
    }
  };
  return (
    <>
      <div className={LoginCSS.container}>
        <div className={LoginCSS.title}>
          <h1>Sign In</h1>
        </div>
        <div className={LoginCSS.contact_container}>
          <form role="form" className={LoginCSS.form}>
            <input
              type="text"
              className={LoginCSS.form_control}
              placeholder="NAME"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="PASSWORD"
              className={LoginCSS.form_control}
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
