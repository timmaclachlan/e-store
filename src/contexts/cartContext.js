import React, { createContext, useReducer } from "react";

import { CartReducer } from "./cartReducer";

export const CartContext = createContext();

const initialState = { cartItems: []}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = payload => {
    dispatch({ type: 'ADD', payload });
  }

  const contextValues = {
    addProduct,
    ...state
  }

  return (
    <CartContext.Provider value={contextValues} >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;