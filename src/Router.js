import { createBrowserRouter } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ChatPage from "./pages/ChatPage"


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
    },
    {
      path: '/conversations',
      element: <ChatPage/>
    }
  )
  var router = createBrowserRouter(routes)
  return router
}

export default Router