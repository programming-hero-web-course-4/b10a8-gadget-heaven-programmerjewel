
import { useState } from "react";
import CartContainer from '../../components/CartContainer/CartContainer'
import WishlistContainer from '../../components/WishlistContainer/WishlistContainer'


const Dashboard = () => {

  const [activeComponent, setActiveComponent] = useState("cart");

  return (
    <div>
      <div className=" bg-violet-600 py-10">
        <h2 className="font-bold text-2xl md:text-4xl text-white text-center">Dashboard</h2>
        <p className="font-extralight text-white my-6 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. <br /> From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-4 justify-center">
          <button  onClick={() => setActiveComponent("cart")} className={`px-8 py-3 border rounded-lg font-bold transition ease-in-out ${activeComponent === "cart" ? "bg-white text-violet-600" : ' border-white text-white bg-transparent'}`}>Cart</button>
          <button onClick={() => setActiveComponent("wishlist")} className={`px-8 py-3 border rounded-lg font-bold transition ease-in-out ${activeComponent === "wishlist" ? "bg-white text-violet-600" : 'border-white text-white bg-transparent'}`}>Wishlist</button>
        </div>
      </div>
     {
       activeComponent === "cart" ? <CartContainer /> : <WishlistContainer />
     }
    </div>
  );
};

export default Dashboard;

{/* {cartList.map((product) => (
              <Cart product={product} key={product.product_id}></Cart>
            ))} */}