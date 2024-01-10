import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import ShopItems from "./ShopItems";
import ShopCSS from "./ShopCSS.module.css";
import Select from "react-select";
import "../../index.css";

const Shop = () => {
  const { products } = useCart();
  const [select, setSelect] = useState(null);

  const categories = [...new Set(products.map((product) => product.category))];
  const options = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const handleSelect = (e) => {
    setSelect(e ? e.value : null);
  };

  return (
    <div className={ShopCSS.container}>
      <div className={ShopCSS.title}>
        <h1>Our Shop</h1>
      </div>
      <div className={ShopCSS.category}>
        <Select
          options={options}
          onChange={handleSelect}
          placeholder="Select a category"
          isClearable
        />
      </div>

      {products.length > 0 && (
        <div className={ShopCSS.cards_container}>
          <ul className={ShopCSS.cards}>
            {products
              .filter((product) => !select || product.category === select)
              .map((product) => (
                <li key={product.id}>
                  <ShopItems product={product} />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Shop;
