import { useState } from "react";
import "../app.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = ({ order }) => {
  const [underlined, setUnderlined] = useState(null);

  const onMouseEnter = (a) => {
    console.log(a);
    if (a === "Inicio") {
      setUnderlined("Inicio");
    }
  };

  const onMouseLeave = () => {
    setUnderlined(null);
  };

  return (
    <header className="flex justify-center items-center h-16 bg-[rgba(245,235,220,1)]">
      <ul className="flex justify-around items-center w-full h-full text-[#502314] font-bold text-xl">
        <li className="headerLinks">
          <Link to="/">Inicio</Link>
        </li>
        <li className="headerLinks">
          <Link to="/carta">Carta</Link>
        </li>
        <li className="headerLinks">
          {order.length === 0 ? (
            <Link to="/carta">Iniciar pedido</Link>
          ) : (
            <Link to="/checkout">Mi pedido</Link>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
