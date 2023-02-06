import Swal from "sweetalert2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  redirect,
  useNavigate,
} from "react-router-dom";
import MenuHeader from "./MenuHeader";
import OrderSign from "./OrderSign";

const ProductDetails = ({ products, order, setOrder, foodTypes }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((product) => product.id === Number(id));
  const handleAddToOrderClick = () => {
    setOrder([...order, product]);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El producto se ha añadido a tu pedido",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/carta");
  };

  return (
    <>
      <MenuHeader selectedFoodType={product.type} foodTypes={foodTypes} />
      <div className="bg-[#faf9f8] pt-[55px] pb-[100px]">
        <Link to={`/carta/${product.type}`} className="flex w-20 h-14 ml-[20%]">
          <div className="backButton flex justify-center items-center w-full h-full border-2 border-solid border-[#ef8114] rounded-full cursor-pointer">
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
        <div className="w-full flex justify-center items-center mt-[20px]">
          <div className="w-[500px]">
            <img src={product.img} alt="" className="h-[17rem] mx-auto" />
            <h2 className="nameFont text-4xl text-center mt-6 mb-[18px]">
              {product.name}
            </h2>
            <p className="descriptionFont">{product.description}</p>
            <button
              onClick={handleAddToOrderClick}
              className="bg-[#ff8732] uppercase text-lg font-semibold	h-14 rounded-xl w-full text-white mt-12"
            >
              Añadir a mi pedido {product.price}{" "}
            </button>
          </div>
        </div>
      </div>
      {order.length === 0 ? "" : <OrderSign />}
    </>
  );
};

export default ProductDetails;
