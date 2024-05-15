import { useRoutes } from "react-router-dom"
import router from "./router"

function App() {

  const routes = useRoutes(router)

  return (
    <div className="App">
      {routes}
    </div>
  )
}

export default App
