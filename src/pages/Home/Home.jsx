import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";




const Home = () => {
  // const categories = ['All products', 'Smartphone', 'Laptop', 'Smartwatch'];
  return (
    <div className="bg-gray-100">
      <Banner></Banner>
      <h2 className="text-center font-bold text-2xl md:text-4xl my-8">Explore Cutting-Edge Gadgets</h2>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-3">
        <div className="md:w-1/5 p-5"><Categories></Categories></div>
        <div className="md:w-4/5 mb-6"><Outlet></Outlet></div>
      </div>
    </div>
  );
};

export default Home;