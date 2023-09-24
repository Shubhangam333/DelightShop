import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShoppingPage from "./pages/ShoppingPage";
import ProductLandingPage from "./pages/ProductLandingPage";
import CartPage from "./pages/CartPage";
import ShippingPage from "./pages/ShippingPage";
import ProfilePage from "./pages/ProfilePage";

import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUserAsync } from "./features/authSlice";
import AdminRoute from "./components/ProtectedRoute/AdminRoute";
import CreateProduct from "./pages/AdminPages/CreateProduct";
import AllProducts from "./pages/AdminPages/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/shopping",
    element: <ShoppingPage />,
  },
  {
    path: "/product/:productId",
    element: <ProductLandingPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/shipping",
    element: <ShippingPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "profile",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <ProfilePage />,
      },
      {
        path: "profile/editProfile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminRoute />,
    children: [
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserAsync());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
