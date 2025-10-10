import { initStore } from "./useStore";

const configureStore = (initialState) => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      console.log(curState, productId);
      // const prodIndex = curState.products.findIndex(p => p.id === productId);
      // const newFavStatus = !curState.products[prodIndex].isFavorite;
      // const updateProducts = [...curState.products];
      // updateProducts[prodIndex] = {
      //   ...curState.products[prodIndex],
      //   isFavorite: newFavStatus
      // };
      // return { products: updateProducts }
    },
    AddToCart: (curState, cartState, productId) => {
      // console.log(curState, cartState, productId);
      const cartProductIndex = curState.findIndex(cartProduct => cartProduct.id === productId);
      const cartProduct = curState[cartProductIndex];
      if (cartState.products.length !== 0) {
        const cartProducts = [...cartState.products, cartProduct].filter(
          (product, index, self) => index === self.findIndex(item => item.id === product.id)
        );
        cartState = {
          products: cartProducts,
          quantity: cartState.quantity + 1,
          total: (cartState.quantity + 1) * cartProduct?.price,
        }
      }
      else {
        cartState = {
          products: [...cartState.products, cartProduct],
          quantity: cartState.quantity + 1,
          total: (cartState.quantity + 1) * cartProduct?.price,
        }
      }
      return cartState;
    },
    DeleteFromCart: () => {
      //
    }
  };
  initStore(actions, initialState);
};

export default configureStore;