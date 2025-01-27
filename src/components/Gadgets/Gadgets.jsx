
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../Gadget/Gadget";
import { useEffect, useState } from "react";


const Gadgets = () => {
  const {category} = useParams();
  
 const data = useLoaderData();
 

  // const categories = ['All products', 'Smartphone', 'Laptop', 'Smartwatch'];
   const[gadgets, setGadgets] = useState([]);
   useEffect(()=>{
    const filteredProduct = [...data].filter(gadget => gadget.category === category )
     setGadgets(filteredProduct)


   },[category, data])
  

  //  const filteredData = [...gadgets];
   
  
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {
            gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
          }
        </div>
        
      </div>   
    </div>
  );
};

export default Gadgets;