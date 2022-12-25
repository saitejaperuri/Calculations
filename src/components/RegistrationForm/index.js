import {Component} from 'react'

import {Link} from 'react-router-dom'

class RegistrationForm extends Component {
  state = {
    user: '',
    pass: '',
    email: '',
    phone: '',
    userError: '',
    passError: '',
    emailError: '',
    isSuccess: false,
  }

  onChangeUsername = event => {
    this.setState({user: event.target.value})
  }

  onChangePassword = event => {
    this.setState({pass: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhone = event => {
    this.setState({phone: event.target.value})
  }

  renderUsernameField = () => {
    const {user} = this.state

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={user}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {pass} = this.state

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={pass}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </div>
    )
  }

  renderEmailField = () => {
    const {email} = this.state

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="password-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </div>
    )
  }

  renderPhoneField = () => {
    const {phone} = this.state

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          Phone Number
        </label>
        <input
          type="number"
          id="number"
          className="password-input-field"
          value={phone}
          onChange={this.onChangePhone}
          placeholder="Phone no"
        />
      </div>
    )
  }

  onRegister = () => {
    const {user, pass, email, phone} = this.state

    localStorage.setItem('User', user)
    localStorage.setItem('password', pass)
    localStorage.setItem('email', email)
    localStorage.setItem('phone', phone)

    if (user === '') {
      this.setState({userError: true})
    }
    if (pass === '') {
      this.setState({passError: true})
    }
    if (email === '') {
      this.setState({emailError: true})
    }
    if (user !== '' && pass !== '' && email !== '') {
      this.setState({isSuccess: true})
    }
  }

  renderRegistered = () => {
    const {userError, passError, emailError} = this.state
    return (
      <div className="bg-container">
        <form className="form">
          <div className="input-container">
            {this.renderUsernameField()}
            {userError === true ? <p className="error">*Required</p> : ''}
          </div>
          <div className="input-container">
            {this.renderPasswordField()}
            {passError === true ? <p className="error">*Required</p> : ''}
          </div>
          <div className="input-container">
            {this.renderEmailField()}
            {emailError === true ? <p className="error">*Required</p> : ''}
          </div>

          <div className="input-container">{this.renderPhoneField()}</div>

          <button
            type="submit"
            className="login-button"
            onClick={() => {
              this.onRegister()
            }}
          >
            Register
          </button>
        </form>
      </div>
    )
  }

  onLogin = () => {
    const {history} = this.props
    history.replace('/login')
  }

  renderSuccess = () => (
    <div className="back-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="success"
        />

        <button className="login-button" type="button" onClick={this.onLogin}>
          Done
        </button>
      </div>
    </div>
  )

  render() {
    const {isSuccess} = this.state
    return (
      <Link to="/register">
        <div>{isSuccess ? this.renderSuccess() : this.renderRegistered()}</div>
      </Link>
    )
  }
}

export default RegistrationForm
