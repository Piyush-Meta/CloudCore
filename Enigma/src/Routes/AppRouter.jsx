import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Servers from "../Pages/Servers";
import Hardware from "../Components/BillingCycle/Hardware/Hardware";
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
            path:"servers",
            element: <Servers />
        },
        {
            path:"hardware",
            element: <Hardware />
        },
    ]
}
]);
export default AppRouter;