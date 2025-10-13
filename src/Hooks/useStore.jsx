import { useEffect, useState } from "react";
/**
 * Custom hook to maintain the state management
 */
let globalState = []; // products
let searchState = []; // search
let listeners = []; // functions to update local component state
let actions = {}; // User actions like add, remove
let cartState = { // Cart status
  products: [],
  quantity: 0,
  total: 0,
};

export const useStore = function (shouldListen = true) {
  const [cart, setCart] = useState(cartState); // Correct useState destructuring;
  const dispatch = (actionIdentifier, payload) => {
    cartState = actions[actionIdentifier](globalState, cartState, payload);
    for (const listen of listeners) {
      listen(cartState); // Call listener with updated cartState;
    }
  };
  const [search, setSearch] = useState(searchState); // Correct useState destructuring;
  const sdispatch = (actionIdentifier, payload) => {
    searchState = actions[actionIdentifier](globalState, payload);
    for (const listen of listeners) {
      listen(searchState); // Call listener with updated searchState;
    }
  }
  useEffect(() => {
    if (shouldListen) {
      if (setCart) {
        listeners.push(setCart);
      }
      if (setSearch) {
        listeners.push(setSearch);
      }
    }
    return () => {
      listeners = setCart ? listeners.filter(li => li !== setCart) : listeners.filter(li => li !== setSearch);
    };
  }, [shouldListen, setCart, setSearch]);
  return [globalState, dispatch, cart, sdispatch, search];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = [...initialState];
  }
  actions = { ...actions, ...userActions };
};