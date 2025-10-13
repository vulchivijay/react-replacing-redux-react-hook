import { useEffect, useState } from "react";

let cartState = {
  products: [],
  quantity: 0,
  total: 0,
};
let cartListeners = [];
let cartActions = {};

export const useCartStore = (shouldListen = true) => {
  const [cart, setCart] = useState(cartState);

  const dispatch = async (actionIdentifier, payload) => {
    const action = cartActions[actionIdentifier];
    if (typeof action === "function") {
      const result = action(cartState, payload);
      if (result instanceof Promise) {
        try {
          cartState = await result;
        } catch (error) {
          console.error("Async cart action failed:", error);
        }
      } else {
        cartState = result;
      }
      cartListeners.forEach(listener => listener(cartState));
    }
  };

  useEffect(() => {
    if (shouldListen && !cartListeners.includes(setCart)) {
      cartListeners.push(setCart);
    }
    return () => {
      cartListeners = cartListeners.filter(listener => listener !== setCart);
    };
  }, [shouldListen, setCart]);

  return [cart, dispatch];
};

export const initCartStore = (userActions, initialState) => {
  if (initialState) {
    cartState = { ...initialState };
  }
  cartActions = { ...cartActions, ...userActions };
};