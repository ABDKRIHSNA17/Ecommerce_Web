import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, totalPrice, itemAmount } = useContext(CartContext);
  return (
    <div
      className={` ${
        isOpen ? "right-0 " : "-right-full "
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-5 border-b ">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center "
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[350px] lg:[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 mt-4 py-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total Price:</span>$
            {parseFloat(totalPrice).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-2 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl rounded-sm"
          >
            <FiTrash2 className="text-2xl" />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-300 flex p-4 justify-center items-center text-gray-800 w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-gray-300 flex p-4 justify-center items-center text-gray-800 w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
