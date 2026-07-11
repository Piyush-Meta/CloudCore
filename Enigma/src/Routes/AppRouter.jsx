import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import VPShosting from "../Pages/VPShosting";
import DedicatedHosting from "../Pages/DedicatedHosting";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
const AppRouter = createBrowserRouter([
    {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path:"/VPShosting",
            element: <VPShosting />
        },
        {
            path:"/DedicatedHosting",
            element: <DedicatedHosting />
        } 
    ]
},
 {
    path: "/login",
    element: <Login />
},
{
    path: "/signup",
    element: <Signup />
},
]);
export default AppRouter;