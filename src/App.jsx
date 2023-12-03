import React, { useState, useEffect } from "react";
import { CartContext } from "./context/ShopContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Article from "./components/Article";
import Login from "./auth/login";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);

  const cartItems = products.filter((product) => product.quantity > 0);

  const fetchUserData = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const productsQuantity = data.map((product) => ({
          ...product,
          quantity: 0,
        }));
        setProducts(productsQuantity);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CartContext.Provider
          value={{
            products,
            setProducts,
            addToCart,
            removeFromCart,
            deleteProduct,
            cartItems,
            login,
            setLogin,
          }}
        >
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/product/:productId" element={<Article />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </CartContext.Provider>
      )}
    </>
  );
}

export default App;
