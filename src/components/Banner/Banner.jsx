import { Link } from "react-router-dom";
import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
  return (
    <div>
      <div className="text-center bg-violet-600 pt-12 pb-30">
        <h2 className="w-4/5 mx-auto font-bold text-white md:text-5xl text-3xl">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="w-3/5 mx-auto text-white py-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link to="/dashboard" className="btn p-4 rounded-4xl text-violet-600  hover:text-violet-800 transition-all">
          Shop Now
        </Link>
      </div>
      <div className="bg-white/80 backdrop-blur -translate-y-16 w-8/12 mx-auto border-white border-2 p-3 rounded-2xl"><img className=" rounded-2xl" src={bannerImg} alt="" /></div>
    </div>
  );
};

export default Banner;
