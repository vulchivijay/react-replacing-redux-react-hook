import { initStore } from "./useStore";

const configureStore = (initialState) => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      console.log(curState, productId);
      const prodIndex = curState.findIndex(p => p.id === productId);
      const newFavStatus = !curState[prodIndex].isFavorite;
      const updatedProducts = [...curState];
      updatedProducts[prodIndex] = {
        ...curState[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    },

    AddToCart: (curState, cartState, productId) => {
      const cartProductIndex = curState.findIndex(p => p.id === productId);
      const cartProduct = curState[cartProductIndex];
      const existingProduct = cartState.products.find(p => p.id === productId);
      let updatedProducts;
      if (existingProduct) {
        updatedProducts = cartState.products.map(p =>
          p.id === productId
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
    QuantityUpdate: (cartState, productId) => {
      const updatedItems = [...cartState.products];
      const updatedItemIndex = updatedItems.findIndex(item => item.id === productId);
      if (updatedItemIndex === -1) return cartState;
      const updatedItem = { ...updatedItems[updatedItemIndex] };
      updatedItem.quantity = (updatedItem.quantity || 1) - 1;
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