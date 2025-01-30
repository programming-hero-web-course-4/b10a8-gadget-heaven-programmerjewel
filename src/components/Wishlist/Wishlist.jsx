
import cancel from '../../../src/assets/cancel.svg'

const Wishlist = ({product, handleRemove}) => {
  const{product_id, product_title, product_image, price, description} = product;
  return (
    <div>
      <div>
            <div className="flex gap-6 items-center p-5 bg-white border border-gray-50 rounded-xl">
              <img className="h-30 w-30 object-contain" src={product_image} alt="" />
              <div className="flex flex-col gap-3">
                <h2 className="text-lg md:text-2xl font-bold">{product_title}</h2>
                <p className="text-gray-500">{description}</p>
                <p className="text-gray-600 font-semibold">Price: $ {price}</p>
              </div>
              <div>
                <button onClick={()=>handleRemove(product_id)} className='btn'>Cancel</button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Wishlist;