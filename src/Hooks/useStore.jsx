import { useEffect, useState } from "react";
/**
 * Custom hook to maintain the state management
 */
let globalState = []; // products
let listeners = []; // functions to update local component state
let actions = {}; // User actions like add, remove
let cartState = { // Cart status
  products: [],
  quantity: 0,
  total: 0,
};

export const useStore = function (shouldListen = true) {
  const [cart, setCart] = useState(cartState); // Correct useState destructuring
  const dispatch = (actionIdentifier, payload) => {
    cartState = actions[actionIdentifier](globalState, cartState, payload);
    for (const listen of listeners) {
      listen(cartState); // Call listener with updated cartState
    }
  };
  useEffect(() => {
    if (shouldListen) {
      listeners.push(setCart);
    }
    return () => {
      listeners = listeners.filter(li => li !== setCart);
    };
  }, [setCart]);
  return [globalState, dispatch, cart];
};
export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = [...initialState];
  }
  actions = { ...actions, ...userActions };
};