import { createBrowserRouter } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"


const Router = () => {
  var routes = []
  routes.push(
    {
      path: '',
      element: <LoginPage/>
    },
    {
      path: '/login',
      element: <LoginPage/>
    },
    {
      path: '/register',
      element: <RegisterPage/>
    }
  )
  var router = createBrowserRouter(routes)
  return router
}

export default Router