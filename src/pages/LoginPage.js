import Navbar from "../components/navbar/Navbar";
import "./LoginPage.css";

const LoginPage = () => {
  return(
    <div className="login-page">
      <Navbar/>
      <div className="login-page-wrapper">
        <div className="login-page-header">
          <div className="login-page-header-title">
            <img src={require("../images/chatapp-icon.png")} alt="chatapp-icon" height="38px"></img>
            <h5> CHATAPP WEB</h5>
          </div>
        </div>
        <div className="login-page-window">

        </div>
      </div>
    </div>
  )
}

export default LoginPage