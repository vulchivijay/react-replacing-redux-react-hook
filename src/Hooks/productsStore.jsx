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
      console.log(curState, cartState, productId);

      // const cartProducts = [...cartState.products];
      // const existingCartItemIndex = cartProducts.findIndex(cartItem => cartItem.id === productId);
      // const existingCartProduct = cartProducts[existingCartItemIndex]

      // if (existingCartProduct) {
      //   const updateCartProduct = {
      //     ...existingCartProduct,
      //     quantity: existingCartProduct.quantity + 1,
      //   }
      //   cartProducts[existingCartItemIndex] = updateCartProduct;
      //   console.log(cartProducts);
      // }
      // else {
      //   const product = cartState.products.find(product => product.id === productId)
      // }
      // const updatedCartItems = [...cartState.products];
      // const existingCartItemIndex = updatedCartItems.findIndex(cartItem => cartItem.id === productId);
      // const existingCartItem = updatedCartItems[existingCartItemIndex];
      // if (existingCartItem) {
      //   const updatedCartItem = {
      //     ...existingCartItem,
      //     quantity: existingCartItem.quantity + 1,
      //   };
      //   updatedCartItems[existingCartItemIndex] = updatedCartItem;
      // } else {
      //   const product = cartState.products.find(product => product.id === productId);
      //   updatedCartItems.push({
      //     id: productId,
      //     name: product?.name ? product.name : action.payload.name,
      //     price: item?.price ? item.price : action.payload.price,
      //     quantity: 1,
      //   });
      // }
      // return {
      //   items: updatedCartItems,
      // };
    },
    DeleteFromCart: () => {
      //
    }
  };
  initStore(actions, initialState);
};

export default configureStore;