import { useEffect } from "react";
import { useState } from "react";
import Phone from "../Phone/Phone";


const Phones = () => {

  const[phones, setPhones] = useState([]);
  useEffect(()=>{
    fetch('/smartphones.json')
    .then(res =>res.json())
    .then(data => setPhones(data))
  },[])
  return (
    <div>
      <h2 className="font-bold text-4xl text-center">Explore Cutting-Edge Gadgets</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {
          phones.map(phone => <Phone phone={phone} key={phone.product_id}></Phone>)
        }
        </div>
    </div>
  );
};

export default Phones;