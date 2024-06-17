import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // Total Price 
  const [totalPrice , setTotalPrice ] = useState(0)

  useEffect (() => {
    const totalPrice = cart.reduce((acc ,  curr) => {
      return acc + curr.price * curr.amount 
    },0)
    setTotalPrice(totalPrice)
  })
  
  // Update item amount 
  useEffect (() => {
    if(cart) {
      const amount = cart.reduce((acc , curr) => {
        return acc + curr.amount
      } , 0)
      setItemAmount(amount)
    }
  }, [cart])
  // Add to Cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  // Remove from Cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // increase Amount
  // const increaseAmount = (id) => {
  //   const newCart = [...cart].map((item) => {
  //     if (item.id === id) {
  //       return {...item, amount: item.amount + 1 };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setCart(newCart);
  // };
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  // Decrease amount

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem.amount) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        clearCart,
        decreaseAmount,
        increaseAmount,
        removeFromCart,
        cart,
        addToCart,
        itemAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
