import { uuid } from "uuidv4";
import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import SellMore from "./SellMore";
import Delivery from "./Delivery";
import Total from "./Total";
import DeliveryPrice from "./DeliveryPrice";
import DeliveryItem from "./DeliveryItem";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import useBreakpoints from "./useBreakPoints";

import Swal from "sweetalert2";

const OrderCheckout = ({ order, setOrderCheckout, setOrder, products }) => {
  const { isXs, isSm, isMd } = useBreakpoints();
  const uniqueItems = [...new Set(order)];
  const [total, setTotal] = useState(0)
  const [delivery, setDelivery] = useState(0)
  const [totalGlobal, setTotalGlobal] = useState(0)

  useEffect(() => {
    setTotal(order.reduce(function (sum, product) {
      return sum + parseFloat(product.price);
    }, 0))
    setTotalGlobal(total + delivery)
  }, [order])
  
  const navigate = useNavigate();
  const handleOrderCancelClick = () => {
    setOrder([]);
    navigate("/carta");
  };
  
  const handleOrderClick = () => {
    
    console.log("totalGlobal", totalGlobal);
    const message = `Su pedido de ${totalGlobal.toFixed(2)}€ llegará en unos ${Math.floor(Math.random() * (30 - 15 + 1) + 15)} minutos.`
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 3000,
    });
    setOrder([]);
    navigate("/");
  }

  return (
    <div className="h-full bg-[rgb(245,245,245)]">
      <div className={`flex justify-around pt-16 pb-8 items-center uppercase ${isXs || isSm || isMd ? "mx-4" : "mx-24"}`}>
      <Link to="/carta" className="flex w-20 h-14">
        <div
          className="backButton flex justify-center items-center w-20 h-14 border-2 border-solid border-[#ef8114] rounded-full cursor-pointer bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="backButtonSvg feather feather-arrow-left"
            color="#ef8114"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
        </Link>
        <h1 className={`h1Font ${isXs || isSm ? "text-[7vw]" : "text-5xl"} text-center text-[#502314]`}>Resumen de tu pedido</h1>
        <button
          onClick={handleOrderCancelClick}
          className="text-[#ff8732] uppercase roundedFont font-bold"
        >
          Cancelar pedido
        </button>
      </div>

      <div className={`flex ${isXs || isSm || isMd ? "flex-col" : ""} justify-center`}>
        <div className={`${isXs || isSm || isMd ? "" : "mr-8"}`}>
          <ul>
            {uniqueItems.map((item) => (
              <li key={() => uuid()}>
                <OrderItem
                  item={item}
                  order={order}
                  setOrder={setOrder}
                  total={total}
                  setTotal={setTotal}
                />
              </li>
            ))}
            <DeliveryItem total={total} />
          </ul>
          <SellMore products={products} order={order} />
        </div>
        <div className={`${isXs || isSm || isMd ? "my-16" : ""}`}>
          <Delivery />
          <Total total={total} />
          <DeliveryPrice total={total} delivery={delivery} setDelivery={setDelivery} totalGlobal={totalGlobal} setTotalGlobal={setTotalGlobal} />
          <button onClick={handleOrderClick} className="bg-[#ff8732] w-[439px] h-[47px] mt-2 rounded-xl text-white uppercase roundedFont font-bold confirmOrderButton">
            Tramitar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCheckout;
