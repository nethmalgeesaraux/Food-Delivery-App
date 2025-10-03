import React, { createContext, useState,useMemo } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext({ food_list: [] });

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const Url ="http://localhost:4000"
  const[token,setToken]=useState("")

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const next = { ...prev };
      next[itemId] = Math.max(0, (next[itemId] || 0) - 1);
      return next;
    });
  };

  const geTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = useMemo(
    () => ({ food_list, cartItems, addToCart, removeFromCart, geTotalCartAmount,Url,token,setToken }),
    
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
