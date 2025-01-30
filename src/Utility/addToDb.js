
//wishlist functions

const getStoredLikedList = () =>{
  const storedListStr = localStorage.getItem('liked-list');
  if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }
  else{
    return [];
  }
}

const addToStoredLikedList = (id) =>{
  const storedList= getStoredLikedList();
  if(storedList.includes(id)){
    console.log(id, 'aleready existed');
  }
  else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('liked-list', storedListStr);
  }
}

//cart functions

const getStoredCartList = () =>{
  const storedListStr = localStorage.getItem('cart-list');
  if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }
  else{
    return [];
  }
}
const addToStoredCartList = (id) =>{
  const storedList= getStoredCartList();
  if(storedList.includes(id)){
    console.log(id, 'aleready existed');
  }
  else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('cart-list', storedListStr);
  }
}

//delete single product from selected cart array
const handleRemoveItem = (productId) => {
  const storedList= getStoredCartList();
  const remaining = storedList.filter(item => item.product_id !== productId);
  localStorage.setItem('cart-list', JSON.stringify(remaining));
};

const handleRemoveWishItem = (id) =>{
  const storedList= getStoredLikedList();
  const remaining = storedList.filter(product => product.product_id !== id);
  localStorage.setItem('liked-list', JSON.stringify(remaining));
}

export{addToStoredLikedList, addToStoredCartList,getStoredCartList, getStoredLikedList, handleRemoveItem, handleRemoveWishItem}