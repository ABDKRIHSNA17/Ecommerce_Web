import React, { useContext } from "react";
// import useparams
import { useParams } from "react-router-dom";
// import Cart CONTEXT
import { CartContext } from "../contexts/CartContext";
// import Product Context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetail = () => {
  // get the prodcut id from the url
  const { id } = useParams();
  const { product } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const selectedProduct = product.find((item) => {
    return item.id === parseInt(id);
  });
  if (!selectedProduct) {
    <section className="h-screen flex justify-center  items-center">
      Loading ...
    </section>;
  }

  // destruture product
  const { title, price, description, image } = selectedProduct;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="contianer mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 bg-purple-200">
            <img className="ma-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[350px] mx-auto">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              ${price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(selectedProduct, selectedProduct.id)}
              className="bg-gray-600 py-4 px-8 text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
