
import { NavLink } from "react-router-dom";
const Categories = () => {
  const categoriesArray = ['Smartphone', 'Laptop', 'Smartwatch'];

  return (
    <div className="flex flex-col gap-3 bg-white rounded-lg p-4 h-fit">
      <NavLink to="/" className={({isActive})=>` btn ${isActive ? 'btn-primary': ''}`}>All Products</NavLink>
      {
            categoriesArray.map((btn, index)=><NavLink to={`/category/${btn}`} key={index} 
            className={({isActive})=> `btn ${isActive ? 'btn-primary' : ''}`}><button>
              {btn}</button></NavLink> )
          }
    </div>
  );
};

export default Categories;

//({isActive})=> `btn rounded-3xl ${isActive? 'btn-primary': ''}`