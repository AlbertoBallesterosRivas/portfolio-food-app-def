import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Menu from "./components/Menu";
import OrderCheckout from "./components/OrderCheckout";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [foodTypes, setFoodTypes] = useState(null);
  const [products, setProducts] = useState(null);
  const [order, setOrder] = useState([]);
  const [orderCheckout, setOrderCheckout] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [frontPage, setFrontPage] = useState(null);

  useEffect(() => {
    console.log("effect");
    axios.get("http://127.0.0.1:8800/api/foodTypes").then((response) => {
      setFoodTypes(response.data);
    });
    axios.get("http://127.0.0.1:8800/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  if (!products) {
    return null;
  }

  return (
    <Router>
      <div className="body">
        <div className="wrapper">
          <Header setFrontPage={setFrontPage} Link={Link} order={order} />

          <Routes>
            <Route
              path="/carta"
              element={
                <Menu
                  foodTypes={foodTypes}
                  products={products}
                  order={order}
                  setOrder={setOrder}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                />
              }
            />
            <Route
              path="/carta/:foodType"
              element={
                <ProductCard
                  products={products}
                  foodTypes={foodTypes}
                  order={order}
                />
              }
            />
            <Route
              path="/producto/:id"
              element={
                <ProductDetails
                  products={products}
                  order={order}
                  setOrder={setOrder}
                  foodTypes={foodTypes}
                />
              }
            />

            <Route
              path="/"
              element={
                <Home
                  products={products}
                  setSelectedProduct={setSelectedProduct}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <OrderCheckout
                  setOrderCheckout={setOrderCheckout}
                  order={order}
                  setOrder={setOrder}
                  products={products}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
