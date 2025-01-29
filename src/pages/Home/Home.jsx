import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";




const Home = () => {
  // const categories = ['All products', 'Smartphone', 'Laptop', 'Smartwatch'];
  return (
    <div className="bg-gray-100">
      <Banner></Banner>
      <h2 className="text-center font-bold text-2xl md:text-4xl  my-8 md:my-10">Explore Cutting-Edge Gadgets</h2>
      <div className="flex gap-6">
        <div className="w-1/5"><Categories></Categories></div>
        <div  className="w-4/5"><Outlet></Outlet></div>
        
        
      </div>
    </div>
  );
};

export default Home;