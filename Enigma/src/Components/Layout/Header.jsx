import { useState,useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Navitems } from "../../Constants/Navitems";

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
        <img
          src={logo}
          alt="Enigma Logo"
          className="w-auto cursor-pointer"
        />
</div>
        {/* Navigation */}
        <div>
        <nav>
          <ul className="flex space-x-7">
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
                      isActive
                        ? "text-blue-600"
                        : "text-gray-500 hover:text-blue-600 font-bold"
                    
                  }
                >
                  {item.title}

                  {/* {item.submenu && (
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        openMenu === item.title ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )} */}
                </NavLink>
            
                {item.submenu && openMenu === item.title && (
                  <div className="absolute left-0 top-full  w-64 rounded-xl border border-gray-200 bg-white shadow-xl">
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
          <button className="font-semibold text-blue-600 transition hover:text-blue-700">
            Contact Sales
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700">
            Client Portal
          </button>
        </div>
      
    </header>
  );
};

export default Header;