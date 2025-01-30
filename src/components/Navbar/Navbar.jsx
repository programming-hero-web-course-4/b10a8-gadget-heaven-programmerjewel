import { NavLink } from "react-router-dom";
import liked from '../../assets/liked.svg';
import cart from '../../assets/cart.svg';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className={({isActive})=>`text-violet-600 font-bold ${isActive ? 'bg-violet-600 text-white': ''}`}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics" className={({isActive})=>`text-violet-600 font-bold ${isActive ? 'bg-violet-600 text-white': ''}`}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={({isActive})=>`text-violet-600 font-bold ${isActive ? 'bg-violet-600 text-white': ''}`}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/news" className={({isActive})=>`text-violet-600 font-bold ${isActive ? 'bg-violet-600 text-white': ''}`}>News</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <NavLink to="/" className=" font-semibold text-xl">Gadget Haeven</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <button className="border border-gray-200 p-2 rounded-3xl"><img src={cart} alt="" /></button>
          <button className="border border-gray-200 p-2 rounded-3xl"><img src={liked} alt="" /></button>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-25 p-4 shadow overflow-x-hidden translate-x-[-60px]"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
