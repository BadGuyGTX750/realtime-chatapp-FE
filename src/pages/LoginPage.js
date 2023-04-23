import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Navbar from "../components/navbar/Navbar";
import "./LoginPage.css";
import api_contact_login from "../api/api_contact_login";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
const PASSWORD_REGEX = /^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]+$/i

const LoginPage = () => {
  const [email, setEmail] = useState()
  const [emailErr, setEmailErr] = useState(false)
  const [password, setPassword] = useState()
  const [passwordErr, setPasswordErr] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginErr, setLogginErr] = useState(false)

  const HandleEmailChange = (em) => {
    setEmail(em)
    if (!EMAIL_REGEX.test(em)) {
      setEmailErr(true)
      return
    }
    setEmailErr(false)
  }

  const HandlePasswordChange = (pwd) => {
    setPassword(pwd)
    if (!PASSWORD_REGEX.test(pwd)) {
      setPasswordErr(true)
      return
    }
    setPasswordErr(false)
  }

  const HandleLogin = async () => {
    setIsLoading(true)
    api_contact_login(email, password)
      .then(response => {
        setTimeout(() => setIsLoading(false), 1000)
        setTimeout(() => {window.location.href = "/conversations"})
      })
      .catch(error => {
        setTimeout(() => setIsLoading(false), 1000)
        setTimeout(() => setLogginErr(true), 1000)
        setTimeout(() => setLogginErr(false), 5000)
      })
  }

  return(
    <div className="login-page">
      {isLoading && <LoadingSpinner/>}
      <Navbar/>
      <div className="login-page-wrapper">
        <div className="login-page-header">
          <div className="login-page-header-title">
            <img src={require("../images/chatapp-icon.png")} alt="chatapp-icon" height="38px"></img>
            <h5>WHATSAPP WEB</h5>
          </div>
        </div>
        <div className="login-page-window">
          <div className="login-page-window-form">
            { 
            loginErr &&
            <div className="login-page-login-failed">
              <h5>Failed to login. Please try again!</h5>
            </div>
            }
            <Form onSubmit={e => {e.preventDefault(); HandleLogin();}}>
              <Form.Group className="login-page-form-group">
                <Form.Control placeholder="Email" onBlur={e => HandleEmailChange(e.target.value)}/>
                {emailErr && <h6>Valid email is required</h6>}
                <Form.Control type="password" placeholder="Password" onBlur={e => HandlePasswordChange(e.target.value)}/>
                {passwordErr && <h6>Valid password is required</h6>}
              </Form.Group>
              <Button type="submit" disabled={!email || !password || emailErr || passwordErr}>LOGIN</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage