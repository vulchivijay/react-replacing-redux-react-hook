import { useEffect, useState } from "react";
/**
 * Custom hook to maintain the state management
 */
let globalState = [];
let listeners = [];
let actions = {};
let cartState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const useStore = function (shouldListen = true) {
  const setState = useState(globalState);
  const setCart = useState(cartState);

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, cartState, payload);
    cartState = { ...newState };
    console.log(cartState);
    for (const cart of cartState) {
       listner(cartState)
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState)
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