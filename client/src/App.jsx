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
import EditProductsPage from "./pages/AdminPages/EditProductsPage";
import Users from "./pages/AdminPages/Users";
import PaymentRoute from "./pages/PaymentRoute";
import EditUserProfile from "./pages/AdminPages/EditUserProfile";
import CheckoutPage from "./pages/CheckoutPage";
import { Success } from "./components/Payment/Success";
import Cancel from "./components/Payment/Cancel";
import AllOrders from "./pages/AdminPages/AllOrders";
import { getAllCategoriesAsync } from "./features/categorySlice";
import OrderPage from "./pages/User/OrderPage";
import EditProfilePage from "./pages/User/EditProfilePage";
import EditProfilePassword from "./pages/User/EditProfilePassword";

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
        path: "editProfile",
        element: <EditProfilePage />,
      },
      {
        path: "editPassword",
        element: <EditProfilePassword />,
      },
      {
        path: "orders",
        element: <OrderPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "payment",
        element: <PaymentRoute />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "cancel",
        element: <Cancel />,
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
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "edit-user/:userId",
        element: <EditUserProfile />,
      },
      {
        path: "edit-product/:productId",
        element: <EditProductsPage />,
      },
      {
        path: "orders",
        element: <AllOrders />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserAsync());

    dispatch(getAllCategoriesAsync());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
