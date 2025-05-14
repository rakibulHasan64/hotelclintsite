import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../componet/home/Home";
import MyBookng from "../componet/mybooking/MyBookng";
import HotelDetalisPage from "../componet/home/HotelDetalisPage";
import AllRomes from "../componet/home/AllRomes";

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,      
      children: [
         {
            index: true,
            element: <Home />
         },     
         
         {
            path: "/my-booking",
            element: <MyBookng />
         },

         {

            path: "rooms/:id",
            element: <HotelDetalisPage />
            
         },

         {
            path: "/rooms",
            element: <AllRomes />
         }


         
         

         
      ]
   }
]);

export default function Route() {
   return <RouterProvider router={router} />;
}