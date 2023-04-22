import { Button, Form } from "react-bootstrap";
import Navbar from "../components/navbar/Navbar";
import "./LoginPage.css";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return(
    <div className="login-page">
      <Navbar/>
      <div className="login-page-wrapper">
        <div className="login-page-header">
          <div className="login-page-header-title">
            <img src={require("../images/chatapp-icon.png")} alt="chatapp-icon" height="38px"></img>
            <h5>WHATSAPP WEB</h5>
          </div>
        </div>
        <div className="login-page-window">
          <Form onSubmit={e => {e.preventDefault()}}>
            <Form.Group>
              <Form.Control placeholder="Email" onChange={e => setEmail(e.target.value)}/>
              <Form.Control placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button type="submit" disabled={!email || !password}>Login</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage