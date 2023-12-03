import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ShopContext";
import CartItemCSS from "./CartItemCSS.module.css";
import "../../index.css";

const CartItem = ({ product }) => {
  const { addToCart, removeFromCart, deleteProduct } = useContext(CartContext);
  return (
    <div className={CartItemCSS.cart_card}>
      <img src={product.image} alt="" />
      <div className={CartItemCSS.title}>
        {product.title}
        <Link to={`/product/${product.id}`}>Details...</Link>
        <div className={CartItemCSS.add_remove}>
          <button onClick={() => removeFromCart(product.id)}>-</button>
          <input type="text" name="name" value={product.quantity}></input>
          <button onClick={() => addToCart(product.id)}>+</button>
        </div>
      </div>

      <div className={CartItemCSS.price}>{product.price}$</div>

      <button
        className={CartItemCSS.delete}
        onClick={() => deleteProduct(product.id)}
      >
        <img src="trash.svg" alt="" />
      </button>
    </div>
  );
};

export default CartItem;
