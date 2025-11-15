import { createBrowserRouter } from "react-router";
import MyLayout from "../LayOut/MyLayout";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <MyLayout></MyLayout>,
        children:[
            {
                index: true,
                element:<Home></Home>,
            },
        ]
        
    }
])