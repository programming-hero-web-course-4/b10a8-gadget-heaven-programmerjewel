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


export{addToStoredLikedList, addToStoredCartList}