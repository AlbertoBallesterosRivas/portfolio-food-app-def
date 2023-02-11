import { useState } from "react";
import FoodTypes from "./FoodTypes";
import OrderSign from "./OrderSign";

const Menu = ({ foodTypes, order, setOrderCheckout, setFrontPage }) => {
  const [selectedFoodType, setSelectedFoodType] = useState(null);

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
  );
};

export default Menu;
