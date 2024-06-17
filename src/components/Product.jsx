import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { image, id, title, category, price } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <div className="">
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center ">
          <div className=" w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt=""
              className=" max-h-[140px] group-hover:scale-110 transition duration-500"
            />
          </div>
        </div>
        <div className="absolute top-1 -right-11  group-hover:right-5 md:group-hover:right-2 bg-red-500/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 md:w-8 md:h-8">
              <BsPlus className="text-2xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className=" flex justify-center items-center bg-white w-12 h-12 text-stone-800 drop-shadow-2xl md:w-8 md:h-8"
          >
            <BsEyeFill className="text-2xl" />
          </Link>
        </div>
      </div>

      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold"> ${price}</div>
      </div>
    </div>
  );
};

export default Product;
