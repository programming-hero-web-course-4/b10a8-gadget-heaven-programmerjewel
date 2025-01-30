import { useState, useEffect } from "react";
import { getStoredLikedList, handleRemoveWishItem } from "../../Utility/addToDb";
import Wishlist from "../Wishlist/Wishlist";

const WishlistContainer = () => {
  const[data, setData] = useState([]);
  
  useEffect(() => {
    fetch("/gadgets.json")
    .then((response) => response.json())
    .then((jsondata) => setData(jsondata));
  }, []);

  const [likedList, setlikedList] = useState([]);
  
  useEffect(() => {
    const storedLikedGadgets = getStoredLikedList();
    const storedLikedGadgetsInt = storedLikedGadgets.map((id) => parseInt(id));
    const likedList = data.filter((gadget) =>
      storedLikedGadgetsInt.includes(gadget.product_id)
    );
    setlikedList(likedList); 
  }, [data]);

  const handleRemove = (id) =>{
    handleRemoveWishItem(id);
    const storedLikedGadgets = getStoredLikedList();
    setlikedList(storedLikedGadgets);
  }

  return (
    <div className="bg-gray-100 py-4">
      <h3 className="text-center font-bold md:text-3xl text-lg my-6">Wishlist</h3>
      <div className="w-11/12 mx-auto flex flex-col gap-5">
        {
          likedList.map((product) => (
            <Wishlist handleRemove={handleRemove} product={product} key={product.product_id}></Wishlist>
          ))
        }
        </div>
    </div>
  );
};

export default WishlistContainer;