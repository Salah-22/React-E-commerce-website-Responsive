import React from "react";
import { Link } from "react-router-dom";
import ShopItemsCSS from "./ShopItemsCSS.module.css";
import "../../index.css";
import { useCart } from "../../context/CartContext";

const ShopItems = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className={ShopItemsCSS.card}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt="" />
        <div className={ShopItemsCSS.title}>{product.title}</div>
        <div className={ShopItemsCSS.price}>{product.price}$</div>
      </Link>
      <button onClick={() => addToCart(product.id)}>
        Add To Cart ({product.quantity})
      </button>
    </div>
  );
};

export default ShopItems;
