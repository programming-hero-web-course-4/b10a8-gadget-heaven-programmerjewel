import { useLoaderData, useParams } from "react-router-dom";
import liked from '../../assets/liked.svg'
import { addToStoredCartList, addToStoredLikedList } from "../../Utility/addToDb";

const GadgetDetail = () => {
  const {product_id} = useParams();
  const data = useLoaderData();
  const id = parseInt(product_id);
  const product = data.find(product =>product.product_id === id);

  const handleLiked = (id)=>{
    addToStoredLikedList(id);
  }
  const handleAddToCart = (id) =>{
    addToStoredCartList(id);
  }
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
      <img src={product.product_image} alt="" />
      <div className="flex flex-col gap-3">
        <h2 className="font-bold  text-lg md:text-3xl">{product.product_title}</h2>
        <p className="font-semibold text-gray-600">Price: $ {product.price}</p>
        <p className="p-2 w-fit border rounded-3xl border-green-500 text-green-500 bg-green-50 text-sm">{`${product.availability?'In Stock': 'Unavailable'}`}</p>
        <p className="text-gray-500">{product.description}</p>
        <h5 className="font-semibold md:text-xl">Specifications</h5>
        
        {product.specification.map((feature, index) => (
                <p key={`feature_${index}`} className="text-sm text-gray-500">
                  {index + 1}. {feature}
                </p>
              ))
        }
        
        <h5 className="font-bold">Rating: {product.rating} / 5</h5>
        <div className="flex gap-2">
          <button onClick={()=>handleAddToCart(product_id)} className="btn rounded-3xl bg-violet-600 hover:bg-violet-500 text-white">Add to Cart</button>
          <button onClick={()=>handleLiked(product_id)} className="btn rounded-3xl p-2 bg-none"><img src={liked} alt="" /></button>
        </div>
      </div>
        
        
    </div>
  );
};

export default GadgetDetail;