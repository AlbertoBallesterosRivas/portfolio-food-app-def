import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import MenuHeader from "./MenuHeader";
import OrderSign from "./OrderSign";

const ProductCard = ({ products, foodTypes, order }) => {
  //const productType = useParams().productType
  let { foodType } = useParams();
  console.log("foodType", foodType);
  console.log("ENTRANOW");
  // const note = products.find(n => n.productType === productType)
  const filteredProducts = products.filter(
    (product) => product.type === foodType
  );

  return (
    <div>
      <MenuHeader selectedFoodType={foodType} foodTypes={foodTypes} />
      <Link to="/carta" className="flex w-20 h-14 ml-[20%]">
        <div className="backButton flex justify-center items-center w-20 h-14 border-2 border-solid border-[#ef8114] rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="backButtonSvg feather feather-arrow-left"
            color="#ef8114"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
      </Link>
      <div className="w-full flex justify-center">
        <ul className="flex justify-center flex-wrap w-2/3">
          {filteredProducts.map((product) => (
            <Link key={product.name} to={`/producto/${product.id}`}>
              <li
                key={product.name}
                // onClick={() => handleProductCardClick(product)}
                className="foodCard w-64 h-52 border-4 border-solid border-[#f5ebdc] rounded-[10px] cursor-pointer m-5"
              >
                <div className="flex justify-center items-center h-4/6 bg-[#f5ebdc] ">
                  <img src={product.img} alt="" className="h-3/5 foodTypeImg" />
                </div>
                <div className="flex justify-center items-center h-1/3">
                  <span className="text-[#502314] font-bold text-xl text-center">
                    {product.name}
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {order.length === 0 ? "" : <OrderSign />}
    </div>
  );
};

export default ProductCard;
