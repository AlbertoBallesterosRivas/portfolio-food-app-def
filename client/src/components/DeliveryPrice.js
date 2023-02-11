import { useState, useEffect } from "react";

const DeliveryPrice = ({ total, delivery, setDelivery, totalGlobal, setTotalGlobal }) => {
  const [deliveryPriceMessage, setDeliveryPriceMessage] = useState(null)
  const priceMessage = (limit, deliveryPrice) => {
    return `Al realizar un pedido de menos de ${limit} €, se va a añadir un cobro de ${deliveryPrice} € por gastos de envío. Para que el envío sea gratuito debe llegar a 20,00 €`;
  };

  useEffect(() => {
    if (total < 10) {
      setDelivery(4.99)
      setTotalGlobal(total + 4.99)
      setDeliveryPriceMessage(priceMessage(10, delivery));
    } else if (total < 15) {
      setDelivery(2.99)
      setTotalGlobal(total + 2.99)
      setDeliveryPriceMessage(priceMessage(15, delivery));
    } else if (total < 20) {
      setDelivery(1.99)
      setTotalGlobal(total + 1.99)
      setDeliveryPriceMessage(priceMessage(20, delivery));
    } else {
      setTotalGlobal(total)
      setDeliveryPriceMessage(null);
    }

  }, [total, delivery, totalGlobal])

  return (
    <div className="w-[440px] mt-6 mb-2.5">
      <span className="text-red-600 font-medium roundedFont">{deliveryPriceMessage}</span>
      <div className="flex justify-between items-center h-[45px] mt-6 font-medium shadow-orderItem bg-white text-[#ef8114] uppercase text-xl font-bold">
        <span className="pl-5">Total con gastos de envío</span>
        <span className="pr-5">{(totalGlobal).toFixed(2)}€</span>
      </div>
    </div>
  );
};

export default DeliveryPrice;
