// Write your JS code here
import {Component} from 'react'

import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const fNum = localStorage.getItem('firstNUm')
const sNum = localStorage.getItem('secondNum')
const ope = localStorage.getItem('ope')
const Muser = localStorage.getItem('Memail')
const Mpass = localStorage.getItem('Mpassword')
console.log(fNum)
console.log(Mpass)
console.log(Muser)
class About extends Component {
  state = {
    Ans: '',
    isSubmit: true,
    USERNAME: '',
    PASSWORD: '',
    showError: false,
  }

  onChangeUsername = event => {
    this.setState({USERNAME: event.target.value})
  }

  onChangePassword = event => {
    this.setState({PASSWORD: event.target.value})
  }

  onChangeAnswer = e => {
    const {Ans} = this.state
    this.setState({Ans: e.target.value})
    console.log(Ans)
  }

  onClickLogout = () => {
    this.setState({isSubmit: true})
  }

  onSignIn = () => {
    const {history} = this.props
    history.replace('/masterReg')
  }

  onSubmitSuccess = PASSWORD => {
    const {history} = this.props

    Cookies.set('jwt_token', PASSWORD, {
      expires: 30,
    })
    console.log(PASSWORD)

    history.replace('/master')
  }

  onLogin = event => {
    event.preventDefault()
    const {USERNAME, PASSWORD} = this.state

    if (USERNAME === Muser && PASSWORD === Mpass) {
      this.onSubmitSuccess(PASSWORD)
      this.setState({showError: false})
      this.setState({isSubmit: false})
    } else {
      this.setState({showError: true})
    }
  }

  renderLogin = () => {
    const {USERNAME, PASSWORD, showError} = this.state

    return (
      <div className="login-form-container">
        <h1 className="sub-head">I will Answer</h1>
        <form className="form-container" onSubmit={this.onLogin}>
          <h1 className="head">Login Page</h1>
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="username-input-field"
              value={USERNAME}
              onChange={this.onChangeUsername}
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input-field"
              value={PASSWORD}
              onChange={this.onChangePassword}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <button
            type="button"
            className="login-button"
            onClick={this.onSignIn}
          >
            Signin
          </button>
          {showError && (
            <p className="error-message">*username or password not matched</p>
          )}
        </form>
      </div>
    )
  }

  renderDetails = () => (
    <div className="about-container">
      <h1>Questions received</h1>
      <p className="q-container">
        {fNum}
        {ope}
        {sNum}
      </p>
      <h1>My Answer</h1>
      <div className="in-container">
        <input
          type="text"
          id="operator"
          className="password-input-field"
          placeholder="Your answer"
          onChange={this.onChangeAnswer}
        />
      </div>

      <button type="button" onClick={this.onSubmit} className="login-button">
        Submit
      </button>

      <button
        type="button"
        className="register-button"
        onClick={this.onClickLogout}
      >
        Logout
      </button>
    </div>
  )

  render() {
    const {Ans, isSubmit} = this.state
    console.log(isSubmit)
    console.log(Ans)
    return (
      <>
        <Header />
        <div className="main-container">{this.renderLogin()}</div>
      </>
    )
  }
}

export default About
