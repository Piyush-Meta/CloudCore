import React from 'react'
import logo from "../../assets/images/logo.png"
import {Navitems} from "../../Constants/Navitems"
import {NavLink} from "react-router-dom"
import { useState } from 'react'
const Header = () => {
  return (
    <header className="flex items-center text-black px-4 py-2 border-b border-gray-300 shadow-md">
    <div className="w-30 mx-8 py-4">
        <img className ="w-auto" src={logo} alt="logo" />
    </div>
    <div>
      <ul className="flex space-x-4">
{Navitems.map((item) => (
  <li key={item.path}>
    <NavLink 
    to={item.path}
    className={({ isActive }) => isActive ? "text-blue-500 font-bold underline" : "text-gray-500 hover:text-blue-500 font-bold"}
    >
      {item.title}
    </NavLink>
  </li>
))}
      </ul>
    </div>
    <div className="item-left ml-auto flex gap-4">
      <button className ="text-blue-500 hover:text-blue-700 font-bold cursor-pointer">Contact Sales</button>
      <button className ="px-3 py-1 rounded text-white bg-blue-500 hover:bg-blue-700 font-bold cursor-pointer">Client Portal</button>
    </div>
    </header>
  )
};

export default Header;
