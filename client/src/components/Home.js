import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carrusel from "./Carrusel";
import BigBurguer from "../assets/bigBurguer.png";
import hamburguers from "../assets/hamburguersHD.jpg"
import hamburguerHD from "../assets/hamburguerHD.png"
const Home = ({ products, setSelectedProduct }) => {
  // const handleOrderClick = () => {
  //   setMenuView(true);
  // };
  return (
    <>
      <div className="relative flex items-center justify-center flex-col w-full h-[435px] mt-[82px] overflow-hidden">
        <div className="w-[900px]">
          <h1 className="h1Font text-[4.5vw] text-center text-[#502314]">
            ¿Qué te apetece comer hoy?
          </h1>
        </div>
        <Link to="/carta">
          <button className="bg-[#d62300] w-60 h-14 rounded-xl uppercase text-white text-2xl font-bold mt-[60px]">
            Hacer pedido
          </button>
        </Link>

        <img
          src={BigBurguer}
          alt=""
          className="absolute w-[40%] bottom-[-15px] right-[-304px]"
        />
      </div>
      <Carrusel products={products} setSelectedProduct={setSelectedProduct} />
      <img src={hamburguerHD} alt="" />
    </>
  );
};

export default Home;
