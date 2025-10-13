import { useEffect, useState } from "react";

let searchState = [];
let searchListeners = [];
let searchActions = {};

export const useSearchStore = (shouldListen = true) => {
  const [search, setSearch] = useState(searchState);

  const dispatch = async (actionIdentifier, payload) => {
    const action = searchActions[actionIdentifier];
    if (typeof action === "function") {
      const result = action(searchState, payload);
      // Check if the result is a Promise (i.e., async)
      if (result instanceof Promise) {
        try {
          searchState = await result;
        } catch (error) {
          console.error("Async action failed:", error);
        }
      } else {
        searchState = result;
      }
      searchListeners.forEach(listener => listener(searchState));
    }
  };

  useEffect(() => {
    if (shouldListen && !searchListeners.includes(setSearch)) {
      searchListeners.push(setSearch);
    }
    return () => {
      searchListeners = searchListeners.filter(listener => listener !== setSearch);
    };
  }, [shouldListen, setSearch]);
  return [search, dispatch];
};

export const initSearchStore = (userActions, initialState) => {
  if (initialState) {
    searchState = [...initialState];
  }
  searchActions = { ...searchActions, ...userActions };
};