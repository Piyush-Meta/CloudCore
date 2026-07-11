import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import VPShosting from "../Pages/VPShosting";
import DedicatedHosting from "../Pages/DedicatedHosting";
import Servers from "../Pages/Servers";
import Hardware from "../Components/BillingCycle/Hardware/Hardware";
import HardwareSection from "../Components/BillingCycle/Hardware/HardwareSection";
import Software from "../Components/BillingCycle/Software/Software";
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
    ]
}
]);
export default AppRouter;