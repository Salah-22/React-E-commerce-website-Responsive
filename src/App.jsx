import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import ShopItemDetails from "./pages/shop/ShopItemDetails";
import Login from "./auth/Login";
import { useCart } from "./context/CartContext";
import fetchData from "./api/data";

function App() {
  const { setProducts } = useCart();
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const productsQuantity = await fetchData();
      setProducts(productsQuantity);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/product/:productId" element={<ShopItemDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
