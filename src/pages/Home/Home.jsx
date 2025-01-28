import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";




const Home = () => {
  // const categories = ['All products', 'Smartphone', 'Laptop', 'Smartwatch'];
  return (
    <div className="bg-gray-100">
      <Banner></Banner>
      <h2 className="text-center font-bold text-2xl md:text-4xl  my-8 md:my-10">Explore Cutting-Edge Gadgets</h2>
      <div className="flex gap-4">
        <Categories></Categories>
        <Outlet className="w-full"></Outlet>
      </div>
    </div>
  );
};

export default Home;