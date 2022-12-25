import {Component} from 'react'

import RegistrationForm from '../RegistrationForm'

import './index.css'

const mail = localStorage.getItem('email').replace(/"/g, '')
const pass = localStorage.getItem('password').replace(/"/g, '')
console.log(mail)
class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,

    isClicked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = () => {
    this.setState({showSubmitError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    if (username === mail && password === pass) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  onSign = () => {
    const {history} = this.props
    history.replace('/register')
  }

  renderLogin = () => {
    const {showSubmitError} = this.state

    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className="head">Login Page</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <button type="button" className="login-button" onClick={this.onSign}>
            Signin
          </button>
          {showSubmitError && (
            <p className="error-message">*username or password not matched</p>
          )}
        </form>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state
    return <>{isClicked ? <RegistrationForm /> : this.renderLogin()}</>
  }
}

export default LoginForm
