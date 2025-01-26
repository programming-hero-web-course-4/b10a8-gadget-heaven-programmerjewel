

const Phone = ({phone}) => {
  const{product_title, product_image, price}= phone;
  return (
    <div>
      <div className="bg-white p-6 rounded-xl">
        <img className="h-50 mx-auto" src={product_image} alt="" />
        <h3 className="text-2xl font-semibold my-3">{product_title}</h3>
        <p className="text-gray-400 mb-3">$ {price}</p>
        <button className=" font-medium border p-3 text-violet-600 rounded-3xl border-violet-600 transition-all  hover:bg-violet-600 hover:text-white">Show details</button>
      </div>
    </div>
  );
};

export default Phone;