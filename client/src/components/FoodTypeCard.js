const FoodTypeCard = ({ foodType }) => {
  // const handleFoodTypeClick = (foodType) => {
  //   setSelectedFoodType(foodType);
  // };

  return (
    <li
      // onClick={() => handleFoodTypeClick(foodType.type)}
      className="foodCard w-40 h-40 border-4 border-solid border-[#f5ebdc] rounded-[10px] cursor-pointer m-5"
    >
      <div className="flex justify-center items-center h-4/6 bg-[#f5ebdc] ">
        <img src={foodType.img} alt="" className="h-3/4 foodTypeImg" />
      </div>
      <div className="flex justify-center items-center h-1/3">
        <span className="text-[#502314] font-bold text-xl">
          {foodType.type}
        </span>
      </div>
    </li>
  );
};

export default FoodTypeCard;
