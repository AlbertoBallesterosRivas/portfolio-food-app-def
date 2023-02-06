import { Link } from "react-router-dom";

const CarruselCard = ({ product, setSelectedProduct }) => {
  const handleButtonClick = () => {
    setSelectedProduct(product);
  };
  console.log("CARRUSELCARD PRODUCT", product);
  let backgroundColor = null;
  let textColor = null;

  switch (product.type) {
    case "Hamburguesas":
      backgroundColor = "bg-[#502314]";
      textColor = "text-[#502314]";
      break;
    case "Refrescos":
      backgroundColor = "bg-[#d62300]";
      textColor = "text-[#d62300]";
      break;
    case "Complementos":
      backgroundColor = "bg-[#ffaa00]";
      textColor = "text-[#ffaa00]";
      break;
    default:
      backgroundColor = "bg-[#502314]";
      textColor = "text-[#502314]";
      break;
  }

  return (
    <div
      className={`flex flex-col items-center h-full w-1/3 ${backgroundColor}`}
    >
      <div className="grow my-[35px] flex items-center">
        <img
          src={product.img}
          alt=""
          className={`${
            product.type === "Refrescos" || ""
              ? "max-h-[240px]"
              : "max-h-[140px]"
          }`}
        />
      </div>

      <h2 className="carruselCardFont text-center text-[#f5ebdc] text-2xl mb-[90px]">
        {product.name}
      </h2>
      <Link to={`/producto/${product.id}`}>
        <button
          onClick={handleButtonClick}
          className={`bg-[#f5ebdc] w-[199px] h-[54px] rounded-xl uppercase ${textColor} text-lg font-bold mb-[93px]`}
        >
          Pide ahora
        </button>
      </Link>
    </div>
  );
};

export default CarruselCard;
