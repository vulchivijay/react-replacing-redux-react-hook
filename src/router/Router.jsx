import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import ProductsLayout from "../layouts/ProductsLayout";
import CartLayout from "../layouts/CartLayout";
import LoginLayout from "../layouts/LoginLayout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import { loader as loadProducts } from "../loaders/ProductsLoader";
import Product from "../pages/Product";
import { loader as loadProduct } from "../loaders/ProductLoader";
import Cart from "../pages/Cart";
import Login from "../pages/Login";

const error = {
  status: 404,
  message: "File not found!",
}

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <ProductsLayout />,
    errorElement: <Error error={error} />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: loadProducts,
      },
      {
        path: ':productId',
        element: <Product />,
        loader: loadProduct,
      },
    ],
  },
  {
    path: 'cart',
    element: <CartLayout />,
    errorElement: <Error error={error} />,
    children: [
      {
        index: true,
        element: <Cart />
      }
    ],
  },
  {
    path: 'login',
    element: <LoginLayout />,
    errorElement: <Error error={error} />,
    children: [
      {
        index: true,
        element: <Login />
      }
    ],
  }
]);

export default AppRouter;