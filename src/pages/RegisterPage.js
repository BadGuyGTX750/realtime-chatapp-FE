import Navbar from "../components/navbar/Navbar";
import "./RegisterPage.css";

const RegisterPage = () => {
  return(
    <div className="register-page">
      <Navbar/>
      <div className="register-page-wrapper">
        <div className="register-page-header">
          <div className="register-page-header-title">
            <img src={require("../images/chatapp-icon.png")} alt="chatapp-icon" height="38px"></img>
            <h5>WHATSAPP WEB</h5>
          </div>
        </div>
        <div className="register-page-window">

        </div>
      </div>
    </div>
  )
}

export default RegisterPage