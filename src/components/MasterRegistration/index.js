// Write your JS code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

class MasterRegistration extends Component {
  state = {
    Muser: '',
    Mpass: '',
    Memail: '',
    Mphone: '',
    MuserError: '',
    MpassError: '',
    MemailError: '',
    isSuccess: false,
  }

  onChangeMUsername = event => {
    this.setState({Muser: event.target.value})
  }

  onChangeMPassword = event => {
    this.setState({Mpass: event.target.value})
  }

  onChangeMEmail = event => {
    this.setState({Memail: event.target.value})
  }

  onChangeMPhone = event => {
    this.setState({Mphone: event.target.value})
  }

  renderUsernameField = () => {
    const {Muser} = this.state

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={Muser}
          onChange={this.onChangeMUsername}
          placeholder="Username"
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {Mpass} = this.state

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={Mpass}
          onChange={this.onChangeMPassword}
          placeholder="Password"
        />
      </div>
    )
  }

  renderEmailField = () => {
    const {Memail} = this.state

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="password-input-field"
          value={Memail}
          onChange={this.onChangeMEmail}
          placeholder="Email"
        />
      </div>
    )
  }

  renderPhoneField = () => {
    const {Mphone} = this.state

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          Phone Number
        </label>
        <input
          type="number"
          id="number"
          className="password-input-field"
          value={Mphone}
          onChange={this.onChangeMPhone}
          placeholder="Phone no"
        />
      </div>
    )
  }

  onMRegister = () => {
    const {Muser, Mpass, Memail, Mphone} = this.state

    localStorage.setItem('MUser', Muser)
    localStorage.setItem('Mpassword', Mpass)
    localStorage.setItem('Memail', Memail)
    localStorage.setItem('Mphone', Mphone)

    if (Muser === '') {
      this.setState({MuserError: true})
    }
    if (Mpass === '') {
      this.setState({MpassError: true})
    }
    if (Memail === '') {
      this.setState({MemailError: true})
    }
    if (Muser !== '' && Mpass !== '' && Memail !== '') {
      this.setState({isSuccess: true})
    }
  }

  renderRegistered = () => {
    const {MuserError, MpassError, MemailError} = this.state
    return (
      <div className="bg-container">
        <form className="form">
          <div className="input-container">
            {this.renderUsernameField()}
            {MuserError === true ? <p className="error">*Required</p> : ''}
          </div>
          <div className="input-container">
            {this.renderPasswordField()}
            {MpassError === true ? <p className="error">*Required</p> : ''}
          </div>
          <div className="input-container">
            {this.renderEmailField()}
            {MemailError === true ? <p className="error">*Required</p> : ''}
          </div>

          <div className="input-container">{this.renderPhoneField()}</div>

          <button
            type="submit"
            className="login-button"
            onClick={() => {
              this.onMRegister()
            }}
          >
            Register
          </button>
        </form>
      </div>
    )
  }

  onDone = () => {
    const {history} = this.props
    history.replace('/about')
  }

  renderSuccess = () => (
    <div className="back-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="success"
        />

        <button className="login-button" type="button" onClick={this.onDone}>
          Done
        </button>
      </div>
    </div>
  )

  render() {
    const {isSuccess} = this.state
    return (
      <Link to="/masterReg">
        <div>{isSuccess ? this.renderSuccess() : this.renderRegistered()}</div>
      </Link>
    )
  }
}

export default MasterRegistration
