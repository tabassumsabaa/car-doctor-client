import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import BookServices from "../Pages/BookServices/BookServices";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
          path: "/singup",
          element: <Singup></Singup>,
        },
        {
          path: "/bookings",
          element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>,          
        },
        {
          path: "/booking/:id",
          element: <PrivateRoutes><BookServices></BookServices></PrivateRoutes>,
          loader: ({params}) => fetch(`https://car-doctor-server-xi-three.vercel.app/Services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;