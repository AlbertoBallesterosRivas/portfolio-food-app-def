import { useEffect, useState } from "react";
import CarruselCard from "./CarruselCard";

const Carrusel = ({ products, setSelectedProduct }) => {
  const burguers = products.filter(
    (product) => product.type === "Hamburguesas"
  );
  const drinks = products.filter((product) => product.type === "Refrescos");
  const sides = products.filter((product) => product.type === "Complementos");
  const [currentBurguer, setCurrentBurguer] = useState(null)
  const [currentDrink, setCurrentDrink] = useState(null)
  const [currentSide, setCurrentSide] = useState(null)
  // const [currentBurguer, setCurrentBurguer] = useState(
  //   burguers[Math.floor(Math.random() * (burguers.length - 1))]
  // );
  // const [currentDrink, setCurrentDrink] = useState(
  //   drinks[Math.floor(Math.random() * (drinks.length - 1))]
  // );
  // const [currentSide, setCurrentSide] = useState(
  //   sides[Math.floor(Math.random() * (sides.length - 1))]
  // );
let number = null
  useEffect(() => {
    number = Math.floor(Math.random() * (burguers.length - 1))
    console.log("NUMBER", number);
    setCurrentBurguer(burguers[number])
    
    setCurrentDrink(drinks[number])
    setCurrentSide(sides[number])

    console.log("burguers[number]", burguers[number]);
    console.log("drinks[number]", drinks[number]);
    console.log("sides[number]", sides[number]);

  }, [])
  // console.log("CURRENT BURGUER", currentBurguer);
  // console.log("CURRENT DRINK", currentDrink);
  // console.log("CURRENT SIDE", currentSide);
  // console.log("burguers", burguers);
  // console.log("drinks", drinks);
  // console.log("sides", sides);
  // console.log("number hamburguers", Math.floor(Math.random() * (burguers.length - 1)));
  // console.log("number drinks", Math.floor(Math.random() * (drinks.length - 1)));
  // console.log("number sides", Math.floor(Math.random() * (sides.length - 1)));
  // console.log("current not current hamburguer", burguers[Math.floor(Math.random() * (burguers.length - 1))]);
  // console.log("current not current drink", drinks[Math.floor(Math.random() * (drinks.length - 1))]);
  // console.log("current not current side", sides[Math.floor(Math.random() * (sides.length - 1))]);
  const handleLeftArrowClick = () => {
    let previousBurguer = null
    let previousDrink = null
    let previousSide = null

    if(burguers.indexOf(currentBurguer) === 0 ){
      previousBurguer =  burguers[burguers.length - 1]
      setCurrentBurguer(previousBurguer)

      previousDrink =  drinks[drinks.length - 1]
      setCurrentDrink(previousDrink)

      previousSide =  sides[sides.length - 1]
      setCurrentSide(previousSide)
    }
    else {
      previousBurguer =  burguers[burguers.indexOf(currentBurguer) - 1]
      setCurrentBurguer(previousBurguer)

      previousDrink =  drinks[drinks.indexOf(currentDrink) - 1]
      setCurrentDrink(previousDrink)

      previousSide =  sides[sides.indexOf(currentSide) - 1]
      setCurrentSide(previousSide)
    }
  }

  const handleRightArrowClick = () => {
    let nextBurguer = null
    let nextDrink = null
    let nextSide = null

    if(burguers.indexOf(currentBurguer) === burguers.length - 1){
      nextBurguer =  burguers[0]
      setCurrentBurguer(nextBurguer)

      nextDrink =  drinks[0]
      setCurrentDrink(nextDrink)

      nextSide =  sides[0]
      setCurrentSide(nextSide)
    }
    else {
      nextBurguer =  burguers[burguers.indexOf(currentBurguer) + 1]
      setCurrentBurguer(nextBurguer)

      nextDrink =  drinks[drinks.indexOf(currentDrink) + 1]
      setCurrentDrink(nextDrink)

      nextSide =  sides[sides.indexOf(currentSide) + 1]
      setCurrentSide(nextSide)
    }
  }

  return (
    <div className="flex h-[600px] w-full relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-left absolute top-1/2 cursor-pointer"
        onClick={handleLeftArrowClick}
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <CarruselCard
        product={currentBurguer}
        setSelectedProduct={setSelectedProduct}
      />
      <CarruselCard
        product={currentDrink}
        setSelectedProduct={setSelectedProduct}
      />
      <CarruselCard
        product={currentSide}
        setSelectedProduct={setSelectedProduct}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-right absolute right-[5px] top-1/2 cursor-pointer"
        onClick={handleRightArrowClick}
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>
  );
};

export default Carrusel;
