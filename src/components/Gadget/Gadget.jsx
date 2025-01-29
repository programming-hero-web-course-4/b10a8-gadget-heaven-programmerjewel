import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_title, product_image, price } = gadget;
  return (
    <div className=" p-6 rounded-xl flex flex-col gap-3 bg-white">
      <img
        className="w-36 aspect-square object-contain mx-auto"
        src={product_image}
        alt=""
      />
      <h3 className="text-xl font-bold">{product_title}</h3>
      <p className="text-gray-400">$ {price}</p>
      <Link to={`/gadget/${product_id}`}>
        <button className="btn w-fit rounded-3xl text-violet-600 bg-white border-violet-600 hover:bg-violet-600 hover:text-white">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Gadget;
// to={`gadgets/${product_id}`}