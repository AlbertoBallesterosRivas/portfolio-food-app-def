const DeliveryItem = ({ total }) => {
  if (total >= 20) return null;
  let delivery = null;
  if (total < 10) {
    delivery = 4.99;
  } else if (total < 15) {
    delivery = 2.99;
  } else if (total < 20) {
    delivery = 1.99;
  }

  return (
    <div className="w-[634px] h-24 shadow-orderItem bg-white my-2">
      <div className="flex justify-between">
        <h3 className="h1Font text-2xl text-[#502314] ml-4 mt-3">
          GASTOS DE ENVÍO
        </h3>
        <span className="roundedFont text-xl font-bold text-[#3d3d3d] mr-4 mt-3">
          {delivery}€
        </span>
      </div>
    </div>
  );
};

export default DeliveryItem;
