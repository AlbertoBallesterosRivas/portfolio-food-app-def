const Total = ({ total }) => {
  return (
    <div className="flex justify-between items-center w-[440px] h-[45px] py-2 shadow-orderItem bg-white text-[#ef8114] uppercase text-xl	font-medium">
      <span className="pl-5">Total</span>
      <span className="pr-5">{total.toFixed(2)}€</span>
    </div>
  );
};

export default Total;
