import { useLoaderData, useParams } from "react-router-dom";
import liked from "../../assets/liked.svg";
import {
  addToStoredCartList,
  addToStoredLikedList,
} from "../../Utility/addToDb";

const GadgetDetail = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const id = parseInt(product_id);
  const product = data.find((product) => product.product_id === id);

  const handleLiked = (id) => {
    addToStoredLikedList(id);
  };
  const handleAddToCart = (id) => {
    addToStoredCartList(id);
  };
  return (
    <div className="bg-gray-100">
      <div className="bg-violet-600 text-center pt-10 md:pt-12 md:pb-40 pb-36">
        <h2 className="text-xl md:text-4xl font-bold text-white">Product Details</h2>
        <p className="text-center mt-6 text-white">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <div className="-translate-y-30 w-9/12 mx-auto p-8 flex flex-col md:flex-row justify-center gap-10 bg-white rounded-lg">
        <img className="w-50 object-contain" src={product.product_image} alt="" />
        <div className="flex flex-col gap-2">
          <h2 className="font-bold  text-lg md:text-2xl">
            {product.product_title}
          </h2>
          <p className="font-semibold text-gray-600">
            Price: $ {product.price}
          </p>
          <p className="py-1 px-2 w-fit border rounded-3xl border-green-500 text-green-500 bg-green-50 text-sm">{`${
            product.availability ? "In Stock" : "Unavailable"
          }`}</p>
          <p className="text-gray-500 text-sm">{product.description}</p>
          <h5 className="font-semibold text-lg ">Specifications</h5>

          {product.specification.map((feature, index) => (
            <p key={`feature_${index}`} className="text-sm text-gray-500">
              {index + 1}. {feature}
            </p>
          ))}

          <h5 className="font-semibold">Rating: {product.rating} / 5</h5>
          <div className="flex gap-2">
            <button
              onClick={() => handleAddToCart(product_id)}
              className="btn rounded-3xl bg-violet-600 hover:bg-violet-500 text-white"
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleLiked(product_id)}
              className="btn rounded-3xl p-2 bg-none"
            >
              <img src={liked} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetail;
