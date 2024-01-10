import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const cartItems = products.filter((product) => product.quantity > 0);

  const addToCart = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const removeFromCart = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(0, product.quantity - 1) }
          : product
      )
    );
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: Math.max(0, product.quantity - product.quantity),
            }
          : product
      )
    );
  };
  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        addToCart,
        removeFromCart,
        deleteProduct,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
