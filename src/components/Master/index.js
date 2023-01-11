import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import './index.css'

const fNum = localStorage.getItem('firstNUm')
const sNum = localStorage.getItem('secondNum')
const ope = localStorage.getItem('ope')

console.log(fNum)

class Master extends Component {
  state = {Ans: ''}

  onLogout = () => {
    Cookies.remove('jwt_token')
    localStorage.removeItem('firstNUm')
    localStorage.removeItem('secondNum')
    localStorage.removeItem('Ope')
  }

  onSubmit = () => {
    const {Ans} = this.state
    localStorage.setItem('Ans', Ans)
    this.setState({Ans: ''})
  }

  onChangeAnswer = e => {
    const {Ans} = this.state
    this.setState({Ans: e.target.value})
    console.log(Ans)
  }

  render() {
    const {Ans} = this.state
    console.log(Ans)
    return (
      <>
        <Header />
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

          <button
            type="button"
            onClick={this.onSubmit}
            className="login-button"
          >
            Submit
          </button>

          <button
            type="button"
            className="register-button"
            onClick={this.onLogout}
          >
            Logout
          </button>
        </div>
      </>
    )
  }
}

export default Master
