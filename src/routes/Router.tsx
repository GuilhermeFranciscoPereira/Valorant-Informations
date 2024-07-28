import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Index from "../pages/Index";
import Agents from "../pages/Agents";
import Guns from "../pages/Guns";
import Maps from "../pages/Maps";
import Bundles from "../pages/Bundles";
import Comp from "../pages/Comp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Index/>
            },
            {
                path: 'Agents',
                element: <Agents/>
            },
            {
                path: 'Guns',
                element: <Guns/>
            },
            {
                path: 'Maps',
                element: <Maps/>
            },
            {
                path: 'Bundles',
                element: <Bundles/>
            },
            {
                path: 'Comp',
                element: <Comp/>
            }
        ]
    }
])