import { useState,useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Navitems } from "../../Constants/Navitems";
import Login from  "../../Auth/Login";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Cart from "./Cart";
import Carts from "../../Pages/Carts";
import {ChevronDown} from "lucide-react";
const Header = () => {
const [openMenu, setOpenMenu] = useState(null);
const timeoutRef = useRef(null);
const handleMouseEnter = (title) => {
  clearTimeout(timeoutRef.current);
  setOpenMenu(title);
}
const handleMouseLeave = () => {
  timeoutRef.current = setTimeout(() => {
    setOpenMenu(null);
  }, 200);
};
  return (
    <header className="flex items-center text-black px-4 py-2 border-b border-gray-300 shadow-md">
      <div className="w-30 mx-8 py-4">
      <Link to ="/" >
        <img
          src={logo}
          alt="Enigma Logo"
          className="w-auto cursor-pointer"
        />
        </Link>
        </div>
        {/* Navigation */}
        <div className ="justify-center items-center flex-1">
        <nav>
          <ul className="flex justify-center items-center space-x-9">
            {Navitems.map((item) => (
              <li
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
               <NavLink
  to={item.path}
  className={({ isActive }) =>
    `flex items-center gap-1 ${
      isActive
        ? "text-blue-600 font-bold underline decoration-2 underline-offset-4 decoration-blue-600"
        : "text-gray-500 hover:text-blue-600 font-bold"
    }`
  }
>
  <span>{item.title}</span>

  {item.submenu && (
    <svg
      className={`w-4 h-4 transition-transform duration-300 ${
        openMenu === item.title ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )}
</NavLink>
            
                {item.submenu && openMenu === item.title && (
                  <div className="absolute left-0 top-full z-50 w-64 rounded-xl border border-gray-200 bg-white shadow-xl">
                    <ul className="py-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.path}>
                          <NavLink
                            to={subItem.path}
                            className="block px-5 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
</div>

        <div className="ml-auto flex items-center gap-6">
          <Cart/>
 <Link to ="/login">
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 cursor-pointer"
          >
            Sign in
          </button>
          </Link>
        </div>
      
    </header>
  );
};

export default Header;