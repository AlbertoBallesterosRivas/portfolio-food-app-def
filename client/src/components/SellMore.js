import { useState, useEffect } from "react";
import SellMoreCard from "./SellMoreCard";

const SellMore = ({ products, order }) => {
  const [randomSellableProducts, setRandomSellableProducts] = useState(null)

  useEffect(() => {
    const boughtProducts = [...order.map(product => product.name)]
    const nonBoughtProducts = products.filter(product => !boughtProducts.includes(product.name))
  
    const sellableProducts = nonBoughtProducts.filter(product => product.type === "Complementos" || product.type === "Postres")
    setRandomSellableProducts([...sellableProducts].sort(() => 0.5 - Math.random()));
  }, [])
  
  if(!randomSellableProducts) return null
  return (
    <div className="w-[634px] h-60 bg-[#502314] flex flex-col items-center">
      <h4 className="text-white h1Font text-xl mt-2 mb-6">¿Te apetece algo más?</h4>
      <div className="flex justify-around">
        <SellMoreCard product={randomSellableProducts[0]}  />
        <SellMoreCard product={randomSellableProducts[1]} />
        <SellMoreCard product={randomSellableProducts[2]} />
      </div>
    </div>
  );
};

export default SellMore;
