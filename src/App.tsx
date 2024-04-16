import Comp1 from "@/components/Comp1"
import Comp2 from '@/components/Comp2'
import { Button } from "antd"
import { UpCircleOutlined } from "@ant-design/icons"

function App() {

  return (
    <>
      <div>顶级组件</div>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Button type="primary">antd按钮</Button>
      <UpCircleOutlined style={{fontSize: '40px', color: 'blue'}}/>
    </>
  )
}

export default App
