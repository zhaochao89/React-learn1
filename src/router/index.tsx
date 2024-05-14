//路由表形式的写法
import { Navigate } from "react-router-dom"
import { lazy } from "react"
import Home from "@/views/Home"
// import About from "@/views/About"
// import User from "@/views/User"
//组件懒加载的写法，需要在main里面在顶级组件外面包裹一层React.Suspense组件，否则会报错。
const About = lazy(() => import("@/views/About"))
const User = lazy(() => import("@/views/User"))

const routes = [
    // 嵌套路由===============start
    {
        path: '/',
        element: <Navigate to='/about' />
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/user',
                element: <User />
            }
        ]
    }
    //嵌套路由================end
    // {
    //     path: "/",
    //     // 重定向
    //     element: <Navigate to="/home" /> 
    // },
    // {
    //     path: "/home",
    //     element: <Home />
    // },
    // {
    //     path: "/about",
    //     element: <About />
    // },
    // {
    //     path: "/user",
    //     element: <User />
    // }
]

export default routes