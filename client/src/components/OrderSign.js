import { useState } from "react";
import bags from "../assets/order.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  redirect,
  useNavigate,
} from "react-router-dom";
const OrderSign = ({ order, setOrderCheckout }) => {
  const [mouseIn, setMouseIn] = useState(false);

  const handleMouseEnterSign = () => {
    setMouseIn(true);
  };

  const handleMouseLeaveSign = () => {
    setMouseIn(false);
  };

  return (
    <Link to="/checkout">
      <div
        onMouseEnter={handleMouseEnterSign}
        onMouseLeave={handleMouseLeaveSign}
        className={`flex items-center justify-center fixed w-full h-8 bottom-0 z-10 bg-[#ef8114] cursor-pointer orderSign`}
      >
        {mouseIn ? (
          <span className="text-white uppercase orderFont tracking-[2px] text-3xl">
            Ver mi pedido
          </span>
        ) : (
          ""
        )}
        <div className="absolute w-24 top-[-67px] right-[25%]">
          <img src={bags} alt="" />
          {/* <span className="absolute ml-[50%] mt-[50%] text-6xl font-bold">{order.length}</span> */}
        </div>
      </div>
    </Link>
  );
};

export default OrderSign;
