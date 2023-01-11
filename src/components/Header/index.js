// Write your JS code here
import {Link, Redirect, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <h1>Calculation</h1>

            <button
              type="button"
              className="nav-mobile-btn"
              onClick={onClickLogout}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="nav logout"
                className="nav-bar-img"
              />
            </button>
          </div>

          <div className="nav-content nav-bar-large-container">
            <h1> Dashboard</h1>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Ask Me
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/about" className="nav-link">
                  Answer
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="nav-menu-mobile">
          <ul className="nav-menu-list-mobile">
            <li className="nav-menu-item-mobile">
              <Link to="/" className="nav-link">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                  alt="nav home"
                  className="nav-bar-img"
                />
              </Link>
            </li>

            <li className="nav-menu-item-mobile">
              <Link to="/about" className="nav-link">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                  alt="nav products"
                  className="nav-bar-img"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Header)
