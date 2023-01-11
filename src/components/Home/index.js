import {Component} from 'react'
import Header from '../Header'

import './index.css'

const Ans = localStorage.getItem('Ans')

console.log(Ans)

class Home extends Component {
  state = {
    firstNum: 0,
    secondNum: 0,
    operator: '',
    error: false,
  }

  onChangeFirst = event => {
    this.setState({firstNum: event.target.value})
  }

  onChangeSecond = event => {
    this.setState({secondNum: event.target.value})
  }

  onChangeOperator = event => {
    this.setState({operator: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {firstNum, secondNum, operator} = this.state

    localStorage.setItem('firstNUm', firstNum)
    localStorage.setItem('secondNum', secondNum)
    localStorage.setItem('ope', operator)

    if (firstNum === '' || secondNum === '' || operator === '') {
      this.setState({error: true})
      localStorage.removeItem('Ans')
    }
  }

  onClear = () => {
    localStorage.removeItem('Ans')
  }

  render() {
    const {firstNum, secondNum, operator, error} = this.state
    return (
      <div>
        <Header />
        <div className="main-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="in-container">
              <label className="input-label" htmlFor="firstNumber">
                First Number
              </label>
              <input
                type="number"
                id="firstNumber"
                className="password-input-field"
                value={firstNum}
                onChange={this.onChangeFirst}
                placeholder="0"
              />
            </div>
            <div className="in-container">
              <label className="input-label" htmlFor="operator">
                Operator
              </label>
              <input
                type="text"
                id="operator"
                className="password-input-field"
                value={operator}
                onChange={this.onChangeOperator}
                placeholder="+"
              />
            </div>
            <div className="in-container">
              <label className="input-label" htmlFor="secondNumber">
                Second Number
              </label>
              <input
                type="number"
                id="secondNumber"
                className="password-input-field"
                value={secondNum}
                onChange={this.onChangeSecond}
                placeholder="0"
              />
            </div>
            <button type="submit" className="login-button">
              Submit
            </button>
            {error && <p className="error">Required</p>}
          </form>

          <div className="ans-container">
            <p>Answer</p>
            <p>{Ans}</p>
          </div>
          <p className="note">
            Answer will appear above please refresh if you not seen anything
          </p>
          <button type="button" onClick={this.onClear} className="login-button">
            Clear
          </button>
        </div>
      </div>
    )
  }
}

export default Home
