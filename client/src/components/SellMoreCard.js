import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  redirect,
  useNavigate,
} from "react-router-dom";

const SellMoreCard = ({ product }) => {
  return (
    <Link to={`/producto/${product.id}`}>
      <div className="w-[160px] h-36 bg-white rounded-xl flex flex-col items-center mx-1">
        <img src={product.img} alt="" className="h-16 w-auto mt-2 mb-4" />
        <span className="text-[#502314] font-bold text-base">{product.name}</span>
        <span className="text-[#2f8737] font-bold">{product.price}</span>
      </div>
    </Link>
  );
};

export default SellMoreCard;
