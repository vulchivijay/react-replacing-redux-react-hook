import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/**
 * Custom hook to maintain the state management
 */
let globalState = []; // products
let listeners = []; // Do not know why using.
let actions = {}; // User actions like add, remove
let cartState = { // Cart status
  products: [],
  quantity: 0,
  total: 0,
};

export const useStore = function (shouldListen = true) {
  const setState = useState(globalState);
  const setCart = useState(cartState);

  const dispatch = (actionIdentifier, payload) => {
    const newCartState = actions[actionIdentifier](globalState, cartState, payload);
    cartState = newCartState;
    // for (const listner of listeners) {
    //   listner(globalState);
    //   listner(cartState);
    // }
  };

  useEffect(() => {
    if (shouldListen) {
      // listeners.push(setState);
      // listeners.push(setCart);
    }
    return () => {
      // listeners = listeners.filter(li => li !== setState);
      // listeners = listeners.filter(li => li !== setCart);
    }
  }, [setState, setCart]); // won't change frequently only once as it is const variable.

  return [
    globalState,
    dispatch,
    cartState,
  ];
};

export const initStore = (useractions, initialState) => {
  if (initialState) {
    globalState = [...initialState];
  }
  actions = { ...actions, ...useractions }
}