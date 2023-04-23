import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Navbar from "../components/navbar/Navbar";
import "./RegisterPage.css";
import api_contact_register from "../api/api_contact_register";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
const USERNAME_REGEX = /^[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:",.<>/?]+$/i
const FIRSTNAME_REGEX = /^[A-Za-z]+$/i
const LASTNAME_REGEX = /^[A-Za-z]+$/i
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+=[\]{}|\\;:'",.<>/?]{8,50}$/i

const RegisterPage = () => {
  const [email, setEmail] = useState()
  const [emailErr, setEmailErr] = useState(false)
  const [username, setUsername] = useState()
  const [usernameErr, setUsernameErr] = useState(false)
  const [firstName, setFirstName] = useState()
  const [firstNameErr, setFirstNameErr] = useState(false)
  const [lastName, setLastName] = useState()
  const [lastNameErr, setLastNameErr] = useState(false)
  const [password, setPassword] = useState()
  const [passwordErr, setPasswordErr] = useState(false)
  const [cPassword, setCPassword] = useState()
  const [cPasswordErr, setCPasswordErr] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const HandleEmailChange = (em) => {
    setEmail(em)
    if (!EMAIL_REGEX.test(em)) {
      setEmailErr(true)
      return
    }
    setEmailErr(false)
  }

  const HandleUsernameChange = (username) => {
    setUsername(username)
    if (!USERNAME_REGEX.test(username)) {
      setUsernameErr(true)
      return
    }
    setUsernameErr(false)
  }

  const HandleFirstNameChange = (fname) => {
    setFirstName(fname)
    if (!FIRSTNAME_REGEX.test(fname)) {
      setFirstNameErr(true)
      return
    }
    setFirstNameErr(false)
  }

  const HandleLastNameChange = (lname) => {
    setLastName(lname)
    if (!LASTNAME_REGEX.test(lname)) {
      setLastNameErr(true)
      return
    }
    setLastNameErr(false)
  }

  const HandlePasswordChange = (pwd) => {
    setPassword(pwd)
    if (!PASSWORD_REGEX.test(pwd)) {
      setPasswordErr(true)
      return
    }
    setPasswordErr(false)
  }

  const HandleCPasswordChange = (cpwd) => {
    setCPassword(cpwd)
    if (cpwd !== password) {
      setCPasswordErr(true)
      return
    }
    setCPasswordErr(false)
  }

  const HandleRegister = async () => {
    setIsLoading(true)
    api_contact_register(firstName, lastName, username ,email, password, cPassword)
      .then(response => {
        setTimeout(() => setIsLoading(false), 1000)
      })
      .catch(error => {
        setTimeout(() => setIsLoading(false), 1000)
      })
  }

  return(
    <div className="register-page">
      {isLoading && <LoadingSpinner/>}
      <Navbar height="222px"/>
      <div className="register-page-wrapper">
        <div className="register-page-header">
          <div className="register-page-header-title">
            <img src={require("../images/chatapp-icon.png")} alt="chatapp-icon" height="38px"></img>
            <h5>WHATSAPP WEB</h5>
          </div>
        </div>
        <div className="register-page-window">
          <div className="register-page-window-form">
            <Form onSubmit={e => {e.preventDefault(); HandleRegister();}}>
              <Form.Group className="register-page-form-group">
                <Form.Control placeholder="Email" onBlur={e => HandleEmailChange(e.target.value)}/>
                {emailErr && <h6>Valid email is required</h6>}
                <Form.Control placeholder="Username" onBlur={e => HandleUsernameChange(e.target.value)}/>
                {usernameErr && <h6>Valid username is required</h6>}
                <Form.Control placeholder="First name" onBlur={e => HandleFirstNameChange(e.target.value)}/>
                {firstNameErr && <h6>Valid first name is required</h6>}
                <Form.Control placeholder="Last name" onBlur={e => HandleLastNameChange(e.target.value)}/>
                {lastNameErr && <h6>Valid last name is required</h6>}
                <Form.Control type="password" placeholder="Password" onBlur={e => HandlePasswordChange(e.target.value)}/>
                {passwordErr && <h6>Valid password is required</h6>}
                <Form.Control type="password" placeholder="Confirm password" onBlur={e => HandleCPasswordChange(e.target.value)}/>
                {cPasswordErr && <h6>Password doesn't match</h6>}
              </Form.Group>
              <Button type="submit" disabled={!email || !password || emailErr || passwordErr}>REGISTER</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage