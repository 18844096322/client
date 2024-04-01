import { createBrowserRouter, useLocation, matchRoutes, Navigate } from "react-router-dom";
import { createElement, ReactElement } from "react";
import { getToken } from "../utils/token";
import Home from "../views/Home";
import Login from "../views/Login";
import notFound from "../views/404/404";
import Daily from "../views/Daily"


interface BeforeEachProps {
    children?: ReactElement
}

export const BeforeEnter = (props: BeforeEachProps) => {
    const token = getToken();
    const location = useLocation();
    const matchs = matchRoutes(routes, location)
    if (Array.isArray(matchs)) {
        const {route} = matchs[matchs.length-1];
        if (route?.meta?.checkAuth && !token) {
            return <Navigate to='/login' />
        } else if (route?.meta?.redirect) {
            return <Navigate to={route?.meta?.redirect} />
        }
    }
    return <>{props.children}</>
}

// 自动遍历views文件目录，创建routes文件
interface Routes {
    path: string;
    element: ReactElement;
    children?: Routes[];
    meta?: {
        checkAuth: boolean,
        redirect?: string
    }
}


const routes: Routes[] = [
    {
        path: '/',
        element: createElement(BeforeEnter, null, createElement(Home)),
        meta: { checkAuth: false, redirect: '/home' }
    },
    {
        path: '/dailyBlog',
        element: createElement(BeforeEnter, null, createElement(Daily)),
        meta: { checkAuth: true }
    },
    {
        path: '/home',
        element: createElement(BeforeEnter, null, createElement(Home)),
        meta: { checkAuth: true }
    },
    {
        path: '/login',
        element: createElement(Login)
    },
    {
        path: '/*',
        element: createElement(notFound)
    }
]



export const AuthRoutes = createBrowserRouter(routes);