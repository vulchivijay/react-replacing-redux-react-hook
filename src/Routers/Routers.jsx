import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../Layouts/RootLayout";

import ProductsLayout from "../Layouts/ProductsLayout";
import ProductLayout from "../Layouts/ProductLayout";
import CartLayout from "../Layouts/CartLayout";
import LoginLayout from "../Layouts/LoginLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import ContactLayout from "../Layouts/ContactLayout";
import ErrorLayout from "../Layouts/ErrorLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Products, { loader as loadProductsData } from "../pages/Products";
import Product, { loader as loadProductData } from "../pages/Product";
import Cart, { loader as loadCartData } from "../pages/Cart";
import Contact from "../pages/Contact";
import Login, { loader as loadUsersData } from "../pages/Login";
import Dashboard, { loader as loadDashboardsData } from "../pages/Dashboard";

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ],
  },
  {
    path: '/about',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <About />
      },
    ],
  },
  {
    path: '/products',
    element: <ProductsLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: loadProductsData,
      },
      {
        path: ':productId',
        element: <ProductLayout />,
        errorElement: <ErrorLayout />,
        children: [
          {
            index: true,
            element: <Product />,
            loader: loadProductData,
          }
        ]
      },
    ]
  },
  {
    path: '/cart',
    element: <CartLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Cart />,
        loader: loadCartData,
      }
    ]
  },
  {
    path: '/contact',
    element: <ContactLayout />,
    children: [
      {
        index: true,
        element: <Contact />,
      }
    ]
  },
  {
    path: '/login',
    element: <LoginLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Login />,
        loader: loadUsersData,
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: loadDashboardsData,
      }
    ]
  },
]);

export default AppRouter;