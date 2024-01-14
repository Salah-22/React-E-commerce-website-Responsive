import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCSS from "./LoginCSS.module.css";
import "../index.css";
import { useUser } from "../context/UserContext";

const Login = () => {
  const handleValidation = () => {
    return name && pass.length >= 8;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (name === "user" && pass === "12345678") {
      setLogin(true);
      navigate("/Cart");
    } else {
      setLogin(false);
    }
  };

  const { setLogin } = useUser();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className={LoginCSS.container}>
        <div className={LoginCSS.title}>
          <h1>Sign In</h1>
        </div>
        <div className={LoginCSS.contact_container}>
          <form className={LoginCSS.form} onSubmit={handleLogin}>
            <label htmlFor="name">name : user</label>
            <input
              id="name"
              type="text"
              className={LoginCSS.form_control}
              placeholder="NAME"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <label htmlFor="pass">pass: 12345678</label>
            <input
              id="pass"
              type="password"
              placeholder="PASSWORD"
              className={LoginCSS.form_control}
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <button type="submit" disabled={!handleValidation()}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
