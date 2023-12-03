import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import HeaderCSS from "./Header.module.css";
import "../index.css";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [navVisible, setNavVisible] = useState(true);
  const totalProduct = cartItems.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  const handleNavOpen = () => {
    setNavVisible(true);
  };

  const handleNavClose = () => {
    setNavVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setNavVisible(window.innerWidth > 654);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={HeaderCSS.header}>
        <Link to="/">
          <div className={HeaderCSS.logo}>
            <img src="logo.svg" alt="logo" />
          </div>
        </Link>
        {navVisible && (
          <div className={HeaderCSS.nav} style={{ display: "flex" }}>
            <button
              onClick={handleNavClose}
              className={HeaderCSS.nav_icon_close}
            >
              <img src="x.svg" alt="nav icon close" />
            </button>
            <Link to="/">Shop</Link>
            <Link to="/Contact">Contact</Link>

            <Link to="/Login">
              <img src="user.svg" alt="login in" />
              Sign in
            </Link>
          </div>
        )}
        <div className={HeaderCSS.cart}>
          <Link to="/Cart">
            <div className={HeaderCSS.cart_alert}>{totalProduct}</div>
            <img src="cart-icon.svg" alt="cart" />
          </Link>
          <button onClick={handleNavOpen} className={HeaderCSS.nav_icon}>
            <img src="menu.svg" alt="nav icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
