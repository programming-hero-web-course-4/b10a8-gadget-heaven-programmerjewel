import { useEffect, useState } from "react";
import { getStoredCartList} from "../../Utility/addToDb";
import Cart from "../../components/Cart/Cart";

const CartContainer = () => {

  const[data, setData] = useState([]);

  useEffect(() => {
    fetch("/gadgets.json")
    .then((response) => response.json())
    .then((jsondata) => setData(jsondata));
  }, []);

  const [cartList, setCartList] = useState([]);
  
  useEffect(() => {
    const storedCartGadgets = getStoredCartList();
    const storedCartGadgetsInt = storedCartGadgets.map((id) => parseInt(id));
    const cartList = data.filter((gadget) => storedCartGadgetsInt.includes(gadget.product_id));
    setCartList(cartList); 
  }, [data]);

  // console.log(cartList);

  //total price of cart products
  const totalPriceReduce = [...cartList].reduce((accum, currentProduct) => {
    return accum + currentProduct.price;
  }, 0)
  

  //for sorting products based on price
  const sortedByPrice = () =>{
    const sortedProducts = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedProducts);
  }
  

  const handleRemove = (id) =>{
    
  }


  return (
    <div className="bg-gray-100 py-4">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h2 className="font-bold text-xl md:text-3xl my-6">Cart</h2>
        <div className="flex items-center gap-2">
          <p className="font-semibold md:text-xl text-lg">Total Cost: $ {totalPriceReduce}</p>
          <button onClick={()=>sortedByPrice()} className="btn">Sort by Price</button>
          <button className="btn">Purchase</button>
        </div>
      </div>
      <div className="w-11/12 mx-auto flex flex-col gap-5">
        {
          cartList.map((product) => (
            <Cart product={product} key={product.product_id}></Cart>
          ))
          
        }
        </div>
    </div>
  );
};

export default CartContainer;
