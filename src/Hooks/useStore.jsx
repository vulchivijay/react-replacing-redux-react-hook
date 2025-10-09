import { useEffect, useState } from "react";
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
    console.log("useStore : ", actionIdentifier, payload);
    const newCartState = actions[actionIdentifier](globalState, cartState, payload);
    cartState = newCartState;
    console.log(cartState);
    // for (const listner of listeners) {
    //   listner(cartState);
    // }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }
    return () => {
      listeners = listeners.filter(li => li !== setState)
    }
  }, [setState]); // won't change frequently only once as it is const variable.

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