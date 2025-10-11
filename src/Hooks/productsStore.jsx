import { initStore } from "./useStore";

const configureStore = (initialState) => {
  const actions = {
    TOGGLE_FAV: (curState, payload) => {
      console.log(curState, payload);
      const prodIndex = curState.findIndex(p => p.id === payload);
      const newFavStatus = !curState[prodIndex].isFavorite;
      const updatedProducts = [...curState];
      updatedProducts[prodIndex] = {
        ...curState[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    },

    AddToCart: (curState, cartState, payload) => {
      const cartProductIndex = curState.findIndex(p => p.id === payload);
      const cartProduct = curState[cartProductIndex];
      const existingProduct = cartState.products.find(p => p.id === payload);
      let updatedProducts;
      if (existingProduct) {
        updatedProducts = cartState.products.map(p =>
          p.id === payload
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        );
      } else {
        updatedProducts = [...cartState.products, { ...cartProduct, quantity: 1 }];
      }
      const totalQuantity = updatedProducts.reduce((sum, p) => sum + (p.quantity || 1), 0);
      const totalPrice = updatedProducts.reduce((sum, p) => sum + ((p.quantity || 1) * p.price), 0);
      return {
        products: updatedProducts,
        quantity: totalQuantity,
        total: totalPrice,
      };
    },
    QuantityUpdate: ([], cartState, payload) => {
      const updatedItems = [...cartState.products];
      const updatedItemIndex = updatedItems.findIndex(item => item.id === payload.id);
      if (updatedItemIndex === -1) return cartState;
      const updatedItem = { ...updatedItems[updatedItemIndex] };
      if (payload.type === 'increment') {
        updatedItem.quantity = (updatedItem.quantity || 1) + 1;
      }
      else {
        updatedItem.quantity = (updatedItem.quantity || 1) - 1;
      }
      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }
      const totalQuantity = updatedItems.reduce((sum, p) => sum + (p.quantity || 1), 0);
      const totalPrice = updatedItems.reduce((sum, p) => sum + ((p.quantity || 1) * p.price), 0);
      return {
        products: updatedItems,
        quantity: totalQuantity,
        total: totalPrice,
      };
    },
  };
  initStore(actions, initialState);
};

export default configureStore;