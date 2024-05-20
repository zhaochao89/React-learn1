import initLoginBg from "./init"
import styles from './login.module.scss'
import './login.less'
import { Space, Input, Button } from 'antd'
import { useEffect } from "react"

const Login = () => {
    // 加载完这个组件后，加载背景
    useEffect(() => {
        initLoginBg();
        // 窗口变化时重新调用背景
        window.onresize = function () {
            initLoginBg();
        }
    }, [])

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: 'block' }}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox + ' loginbox'}>
                <div>
                    {/* 标题 */}
                    <div className={styles.title}>
                        <h1>XXX&nbsp;·&nbsp;通用后台管理系统</h1>
                        <p>Strive Everyday</p>
                    </div>
                    {/* 输入框 */}
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="用户名" />
                        <Input.Password placeholder="密码" />
                        <Button type="primary" block> 登录 </Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default Login;