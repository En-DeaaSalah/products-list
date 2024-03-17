import * as React from "react";
import {Suspense} from "react";
import {createBrowserRouter,} from "react-router-dom";
import {Spin} from "antd";

const HomePage = React.lazy(() => import( "../pages/Home/Page"))
const LoginPage = React.lazy(() => import( "../pages/Login/Page"))
const NotFoundPage = React.lazy(() => import( "../pages/notFound/Page"))


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<Spin fullscreen={true} spinning={true}/>}><HomePage/></Suspense>,
    },
    {
        path: "login",
        element: <Suspense fallback={<Spin fullscreen={true} spinning={true}/>}><LoginPage/></Suspense>,
    },
    {
        path: "*",
        element: <Suspense fallback={<Spin fullscreen={true} spinning={true}/>}><NotFoundPage/></Suspense>,
    },

]);