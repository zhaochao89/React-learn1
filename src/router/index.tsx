//路由表形式的写法
import { Navigate } from "react-router-dom"
import React, { lazy } from "react"
import Home from "@/views/Home"
// import About from "@/views/About"
// import User from "@/views/User"
//组件懒加载的写法，需要在main里面在顶级组件外面包裹一层React.Suspense组件，否则会报错。
const About = lazy(() => import("@/views/About"))
const User = lazy(() => import("@/views/User"))
const Page1 = lazy(() => import("@/views/Page1"))
const Page2 = lazy(() => import("@/views/Page2"))

// 两种写法：第一种箭头函数右侧是大括号的需要有return；
//第二种箭头函数右侧是小括号的不需要return，默认是返回括号里的内容

// const withLoadingComponent = (comp: JSX.Element) => {
//     return <React.Suspense fallback={<div>Loading...</div>}>
//         {comp}
//     </React.Suspense>
// }

const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    // 嵌套路由===============start
    {
        path: '/',
        element: <Navigate to='/about' />
    },
    {
        path: '/',
        element: withLoadingComponent(<Home />),
        children: [
            {
                path: '/about',
                element: withLoadingComponent(<About />)
            },
            {
                path: '/user',
                element: withLoadingComponent(<User />)
            },
            {
                path: '/page1',
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: '/page2',
                element: withLoadingComponent(<Page2 />)
            }
        ]
    },
    //嵌套路由================end
    {
        path: "*",
        element: <Navigate to='/about' />
    },
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