import map from "../assets/map.png";
import mapPin from "../assets/mapPin.png";

const Delivery = ({address, setAddress}) => {
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  }
  
  return (
    <div className="w-[440px] h-[256px] relative flex justify-center">
      <div className="flex flex-col items-center w-[90%] h-fit z-10 relative shadow-orderItem rounded-md">
        <span className="uppercase bg-[#502314] w-full flex justify-center text-white py-2 h1Font rounded-t-md">
          Envío a domicilio
        </span>
        <div className="flex flex-col items-center justify-center w-full h-[75px] bg-white rounded-b-md">
          <input
            value={address}
            onChange={handleAddressChange}
            className="placeholder:text-[#ff8732] placeholder:font-bold placeholder:roundedFont focus:outline-none text-[#ff8732] font-bold roundedFont"
            placeholder="Introduzca la dirección"
          ></input>
        </div>
      </div>
      <img src={map} alt="" className="w-[439px] top-[20px] absolute z-0" />
      <img
        src={mapPin}
        alt=""
        className="w-[40px] top-[131px] right-[130px] absolute z-10"
      />
    </div>
  );
};

export default Delivery;
