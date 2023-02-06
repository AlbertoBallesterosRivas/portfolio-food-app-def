import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const MenuHeader = ({ foodTypes, selectedFoodType }) => {
  console.log("selectedFoodType", selectedFoodType);
  // const handleFoodTypeClick = (foodType) => {
  //   setSelectedFoodType(foodType);
  // };

  // console.log("SELECTEDFOODTYPE", selectedFoodType);
  return (
    <ul className="flex flex-wrap mb-14 justify-center">
      {foodTypes.map((foodType) => (
        <Link key={foodType.type} to={`/carta/${foodType.type}`} >
          <li
            // onClick={() => handleFoodTypeClick(foodType.type)}
            className={`flex flex-col items-center mt-7 mx-4 cursor-pointer ${selectedFoodType === foodType.type ? "borderBottomText" : ""}`}
            
              // ${selectedFoodType === foodType.type ? "borderBottomText" : ""}
              
          >
            <img src={foodType.img} alt="" className="h-16	" />
            <span className="h1Font text-l text-[#502314]">
              {foodType.type}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MenuHeader;
