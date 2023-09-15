import "./App.css";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShoppingPage from "./pages/ShoppingPage";
import ProductLandingPage from "./pages/ProductLandingPage";

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
    path: "/product",
    element: <ProductLandingPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
