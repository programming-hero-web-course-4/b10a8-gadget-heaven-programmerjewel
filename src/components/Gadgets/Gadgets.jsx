
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../Gadget/Gadget";
import { useEffect, useState } from "react";


const Gadgets = () => {
  const {category} = useParams();
  
  const data = useLoaderData();


  // const categories = ['All products', 'Smartphone', 'Laptop', 'Smartwatch'];
   const[gadgets, setGadgets] = useState([]);
   useEffect(()=>{
    if(category){
      const filteredProduct = [...data].filter(gadget => gadget.category === category )
      setGadgets(filteredProduct);
    }
    else{
      setGadgets(data);
    }
    


   },[category, data])
  

  //  const filteredData = [...gadgets];
   
  
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {
            gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
          }
        </div>
    </div>
  );
};

export default Gadgets;