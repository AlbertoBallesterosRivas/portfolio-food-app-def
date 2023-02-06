import { useState } from "react";

const OrderItem = ({ item, order, setOrder, total, setTotal }) => {
  const [quantity, setQuantity] = useState(
    order.filter((orderItem) => orderItem.name === item.name).length
  );
  const [price, setPrice] = useState(parseFloat(item.price) * quantity);
  
  console.log("quantity", quantity);

  const handleDeleteClick = () => {
    const newOrder = order.filter((orderItem) => orderItem.name !== item.name);
    setOrder(newOrder);
  };

  const handleIncreaseClick = () => {
    setOrder([...order, item]);
    setQuantity(quantity + 1);
    setPrice(parseFloat(item.price) * (quantity + 1))
    setTotal(total + parseFloat(item.price))
    console.log("price", price, "total", total);
  };

  const handleDecreaseClick = () => {
    const itemIndex = order.findIndex(orderItem => orderItem.name === item.name)
    order.splice(itemIndex, 1)
    setOrder(order);
    setQuantity(quantity - 1);
    setPrice(parseFloat(item.price) * (quantity - 1))
    setTotal(total - parseFloat(item.price))
  };

  return (
    <div className="w-[634px] h-24 shadow-orderItem bg-white my-2">
      <div className="flex justify-between">
        <h3 className="h1Font text-2xl text-[#502314] ml-4 mt-3">
          {item.name} {quantity > 1 ? `(${quantity})` : ""}
        </h3>
        <span className="roundedFont text-xl font-bold text-[#3d3d3d] mr-4 mt-3">{price.toFixed(2)}€</span>
      </div>
      <div className="flex justify-end items-center w-full">
        <div
          onClick={handleDeleteClick}
          className="border-2 border-[#ff0000] rounded-full mx-5 h-10 w-10 flex justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-trash-2 m-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
        {quantity > 1 ? (
          <div
            onClick={handleDecreaseClick}
            className="border-2 border-[#502314] rounded-full mx-5 h-10 w-10 flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#502314"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-minus m-2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        ) : (
          ""
        )}

        <span className="roundedFont text-xl font-bold text-[#502314]">{quantity > 1 ? `(${quantity})` : ""}</span>
        <div
          onClick={handleIncreaseClick}
          className="border-2 border-[#502314] rounded-full mx-5 h-10 w-10 flex justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#502314"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus m-2"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
