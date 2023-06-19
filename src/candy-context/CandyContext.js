import React, { createContext, useReducer } from "react";

const CandyContext = createContext();

const stockReducer = (state, action) => {
  if (action.type === "ADD") {
    const oldCandyStock = state.stock;
    oldCandyStock.push(action.item);
    return { ...state, stock: oldCandyStock.map((candy) => candy) };
  } else {
    return state;
  }
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const index = state.cart.findIndex(
      (candy) => candy.name === action.item.name
    );
    if (index === -1) {
      return {
        ...state,
        totalCandies: state.totalCandies + action.item.quantity,
        cart: [...state.cart, action.item],
      };
    } else {
      const updatedCart = state.cart.map((candy, idx) => {
        if (idx === index) {
          return {
            ...candy,
            quantity: candy.quantity + action.item.quantity,
          };
        }
        return candy;
      });

      return {
        ...state,
        totalCandies: state.totalCandies + action.item.quantity,
        cart: updatedCart,
      };
    }
  }

  return state;
};

export const Candies = (props) => {
  const addToStockHandler = (candy) => {
    stockDispatch({ type: "ADD", item: candy });
  };

  const [candyStock, stockDispatch] = useReducer(stockReducer, {
    stock: [],
    addToStock: addToStockHandler,
  });

  const addToCartHandler = (candy) => {
    cartDispatch({ type: "ADD", item: candy });
  };

  const [candyCart, cartDispatch] = useReducer(cartReducer, {
    cart: [],
    totalCandies: 0,
    addToCart: addToCartHandler,
  });

  return (
    <CandyContext.Provider value={{ candyStock, candyCart }}>
      {props.children}
    </CandyContext.Provider>
  );
};

export default CandyContext;
