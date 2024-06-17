import React, { useContext, useEffect, useState } from "react";
// Sidebar Context
import { SidebarContext } from "../contexts/SidebarContext";
// React Icons
import { BsBag } from "react-icons/bs";

// Import Cart Context
import { CartContext } from "../contexts/CartContext";
// Import Logo
import logo1 from "../img/logo1.png";
// Import Link
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive , setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // Add Event Listeners
  useEffect (()=>{
    window.addEventListener('scroll',() => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })
  return (
    <div className={`${isActive ? " bg-slate-500 shadow-md": " bg-stone-400"} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img src={logo1} alt="logo" className="w-[60px] bg-slate-500" />
          </div>
        </Link>
        {/* Cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer relative "
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
