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
      const updatedCartProducts = cartState;
      const selectedProduct = curState.find(product => product.id === productId);
      if (updatedCartProducts.products.length === 0) {
        updatedCartProducts.products.push(selectedProduct);
      }
      else {
        const uniqueProduct = updatedCartProducts.products.filter(product => product.id !== selectedProduct.id);
        if (uniqueProduct.length !== 0) {
          updatedCartProducts.products.push(uniqueProduct);
        }
      }
      updatedCartProducts.quantity += 1;
      return updatedCartProducts;
    },
    DeleteFromCart: () => {
      //
    }
  };
  initStore(actions, initialState);
};

export default configureStore;