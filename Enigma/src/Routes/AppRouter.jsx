import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import VPShosting from "../Pages/VPShosting";
import DedicatedHosting from "../Pages/DedicatedHosting";
import Servers from "../Pages/Servers";
import Hardware from "../Components/BillingCycle/Hardware/Hardware";
import HardwareSection from "../Components/BillingCycle/Hardware/HardwareSection";
import Software from "../Components/BillingCycle/Software/Software";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Carts from "../Pages/Carts";
import HelpCenter from "../Pages/HelpCenter";
import Security from "../Pages/Security";
import Hosting from "../Pages/Hosting";
import About from "../Pages/About";
import Docs from "../Components/BillingCycle/Docs/Docs";
import BillingSecurity from "../Components/BillingCycle/Billing/BillingSecurity";
import WordPressHosting from "../Pages/WordPressHosting";
import BillingSecurity from '../Components/BillingCycle/Billing/BillingSecurity'
import Billing from "../Pages/Billing";
import Documentation from "../Pages/Documentation";
import Review from "../Pages/Review";

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
           path:"wordpresshosting",
           element: <WordPressHosting />
        },
        {
            path:"/servers",
            element: <Servers />
        },
        {
            path:"hardware",
            element: <Hardware />
        },
         {
            path:"hardwaresection",
            element: <HardwareSection/>
        },
         {
            path:"software",
            element: <Software/>
        },
         {
            path:"billingsecurity",
            element: <BillingSecurity/>
        },
         {
            path:"docs",
            element: <Docs/>
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
        },
        {
    path: "/billing",
    element: <Billing />,
},
{
    path: "/documentation",
    element: <Documentation />,
},
{
    path: "/review",
    element: <Review />,
},
        
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