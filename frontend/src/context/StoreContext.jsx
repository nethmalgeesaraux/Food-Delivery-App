
import React, { createContext, useState, useEffect, useMemo } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext({ food_list: [] });

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

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

  useEffect(() => {
    console.log("cartItems:", cartItems);
  }, [cartItems]);

  const contextValue = useMemo(
    () => ({ food_list, cartItems, addToCart, removeFromCart }),
    [cartItems]
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
