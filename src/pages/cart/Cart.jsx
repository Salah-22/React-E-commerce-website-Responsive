import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import CartCSS from "./CartCSS.module.css";
import "../../index.css";

const Cart = () => {
  const { cartItems } = useCart();
  const { login } = useUser();
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const handleCheckOut = () => {
    if (login) {
      alert("yesss");
    } else {
      setPopup(true);
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const closeLoginModal = () => {
    setPopup(false);
  };

  return (
    <>
      <div className={CartCSS.container}>
        <div className={CartCSS.title}>
          <h1>Shopping Cart</h1>
        </div>

        <div className={CartCSS.checkout}>
          <h2>Summary</h2>
          <div className={CartCSS.checkout_totale}>
            Total Price: ${totalPrice.toFixed(2)}
          </div>
          <button onClick={handleCheckOut}>Check out</button>
        </div>

        <div className={CartCSS.cards_container}>
          {cartItems.length > 0 ? (
            <ul className={CartCSS.cards}>
              {cartItems.map((product) => (
                <li key={product.id}>
                  <CartItem product={product} />
                </li>
              ))}
            </ul>
          ) : (
            <div className={CartCSS.empty}>Your cart is empty...</div>
          )}
        </div>
      </div>
      {popup && (
        <div className="bg">
          <div className="popup">
            <h2>you need to login to checkout</h2>
            <button onClick={goToLogin}>login</button>
            <button onClick={closeLoginModal}>close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
