import React, { createContext, useReducer } from "react";

import { CartReducer } from "./cartReducer";

export const CartContext = createContext();

const initialState = { cartItems: []}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = payload => {
    dispatch({ type: 'ADD', payload });
  }

  const removeProduct = payload =>
  {
    dispatch({ type: 'REMOVE', payload });
  }

  const increaseQuantity = payload => 
  {
    dispatch({ type: 'INCQTY', payload });
  }

  const decreaseQuantity = payload => 
  {
    dispatch({ type: 'DECQTY', payload });
  }

  const clearBasket = () => {
    dispatch({ type: 'CLEAR', payload: undefined});
  }

  const getCartItems = () => {
    return state.cartItems;
  }

  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
    getCartItems,
    ...state
  }

  return (
    <CartContext.Provider value={contextValues} >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;