//路由表形式的写法
import { Navigate } from "react-router-dom"
import Home from "@/views/Home"
import About from "@/views/About"
import User from "@/views/User"

const routes = [
    {
        path: "/",
        // 重定向
        element: <Navigate to="/home" /> 
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/user",
        element: <User />
    }
]

export default routes