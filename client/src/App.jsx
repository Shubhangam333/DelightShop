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
import AdminPage from "./pages/AdminPage";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import AddProduct from "./pages/AddProduct";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUserAsync } from "./features/authSlice";

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
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/AddProduct",
    element: <AddProduct />,
  },
  {
    path: "profile",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <ProfilePage />,
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
