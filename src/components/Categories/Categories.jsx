
import { NavLink } from "react-router-dom";
const Categories = () => {
  const categoriesArray = ['All products', 'Smartphone', 'Laptop', 'Smartwatch'];

  return (
    <div className="flex flex-col gap-3 bg-white rounded-lg p-4 h-fit">
      {
            categoriesArray.map((btn, index)=><NavLink to={`/category/${btn}`} key={index} className="btn rounded-3xl w-"><button>
              {btn}</button></NavLink> )
          }
    </div>
  );
};

export default Categories;