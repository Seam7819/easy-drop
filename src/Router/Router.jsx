import { createBrowserRouter } from "react-router";
import RootLayouts from "../LayOuts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import AuthLayouts from "../LayOuts/AuthLayouts";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children : [
        {index: true, Component : Home},
        
    ]
  },
  {
    path: "/",
    Component: AuthLayouts,
    children:[
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      }
    ]
  }
]);