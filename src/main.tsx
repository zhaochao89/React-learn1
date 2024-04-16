import React from 'react'
import ReactDOM from 'react-dom/client'
//正确的样式引入顺序
//初始化样式一般放在最前面，后面自己写的样式会覆盖这里的
import 'reset-css'
//UI框架的样式

//全局样式 @/是绝对路径
import '@/assets/styles/global.scss'
//组件的样式
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<div>loading</div>}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
