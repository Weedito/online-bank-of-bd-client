import React, { useEffect, useState } from "react";
import { Navigation } from "../../Components.Nahid/Data";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {Navigation.map((item, idx) => {
          return (
            <li
              className={`${
                bg && "text-black"
              } text-xl font-semibold hover:text-secondary cursor-pointer`}
              key={idx}
            >
              <NavLink
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className={`flex rounded-full px-2 items-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out ${
                  location.pathname === item.href
                    ? "text-green-500"
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
