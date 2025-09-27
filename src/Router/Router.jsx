import { createBrowserRouter } from "react-router";
import RootLayouts from "../LayOuts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import AuthLayouts from "../LayOuts/AuthLayouts";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";
import PrivateRoutes from "../routes/PrivateRoutes";
import SendParcelForm from "../Pages/SendParcel/SendParcelForm";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      { index: true, Component: Home },
      { path: '/coverage', element: <PrivateRoutes><Coverage></Coverage></PrivateRoutes> },
      {
        path: '/pricing',
        element: <PrivateRoutes><SendParcelForm></SendParcelForm></PrivateRoutes>,
        loader : () => fetch('/districts.json')
      }
    ]
  },
  {
    path: "/",
    Component: AuthLayouts,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  }
]);