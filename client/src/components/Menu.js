import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import FoodTypeCard from "./FoodTypeCard";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import FoodTypes from "./FoodTypes";
import MenuHeader from "./MenuHeader";
import OrderSign from "./OrderSign";

const Menu = ({
  foodTypes,
  products,
  order,
  setOrder,
  selectedProduct,
  setSelectedProduct,
  setOrderCheckout,
  setFrontPage
}) => {
  const [selectedFoodType, setSelectedFoodType] = useState(null);

  const handleBackButtonClick = () => {
    setSelectedFoodType(null);
  };

  return (
    <>
      <div className="divMenu flex flex-col items-center bg-white">
        <h1 className="h1Font text-5xl text-center text-[#502314] mt-16">
          Hola, ¿qué quieres pedir hoy?
        </h1>
        <FoodTypes
          foodTypes={foodTypes}
          setSelectedFoodType={setSelectedFoodType}
        />
        {/* <Outlet /> */}
      </div>
      {order.length > 0 ? (
        <OrderSign
          order={order}
          setOrderCheckout={setOrderCheckout}
          setFrontPage={setFrontPage}
        />
      ) : (
        ""
      )}
    </>

    // )}
    // </div>
  );
};

export default Menu;
