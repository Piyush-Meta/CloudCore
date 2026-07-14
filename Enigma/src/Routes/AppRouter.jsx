import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import VPShosting from "../Pages/VPShosting";
import DedicatedHosting from "../Pages/DedicatedHosting";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Carts from "../Pages/Carts";
import HelpCenter from "../Pages/HelpCenter";
import Security from "../Pages/Security";
import Hosting from "../Pages/Hosting";
import About from "../Pages/About";
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
            path:"vpshosting",
            element: <VPShosting />
        },
        {
            path:"dedicatedhosting",
            element: <DedicatedHosting />
        },{
            path:"carts",
            element: <Carts/>
        },{
            path:"/help-center",
            element: <HelpCenter/>
        },
        {
            path:"/security",
            element: <Security/>
        },{
            path:"/hosting",
            element: <Hosting/>
        },{
            path: "/about",
            element: <About/>
        }
    ]
}, {
    path: "/login",
    element: <Login />
},
{
    path: "/signup",
    element: <Signup />
},
]);
export default AppRouter;