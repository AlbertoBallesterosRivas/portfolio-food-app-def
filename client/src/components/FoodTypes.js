import FoodTypeCard from "./FoodTypeCard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const FoodTypes = ({ foodTypes, setSelectedFoodType }) => {
  return (
    <ul className="flex justify-center flex-wrap w-[53%] mt-6">
      {foodTypes.map((foodType) => (
        <Link key={foodType.type} to={foodType.type} relative="path">
          <FoodTypeCard foodType={foodType} />
        </Link>
      ))}
    </ul>
  );
};

export default FoodTypes;
