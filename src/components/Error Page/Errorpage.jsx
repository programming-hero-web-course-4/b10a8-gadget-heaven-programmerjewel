import { NavLink } from "react-router-dom";
import gif from "../../assets/404.gif";

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-dvh bg-black">
      <h5 className="text-center mb-5 font-bold text-3xl md:text-6xl text-red-400 uppercase">Opps!</h5>
      <p className="mb-3 text-gray-100 font-light text-lg">The content you are looking for is not available</p>
      <img className="mx-auto rounded-xl w-50" src={gif} alt="" />
      <NavLink className='font-medium text-white bg-red-500 p-3 rounded-xl text-xs' to='/'>Go to Home</NavLink>
    </div>
  );
};

export default Errorpage;