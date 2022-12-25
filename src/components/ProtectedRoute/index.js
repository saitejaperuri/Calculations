// Write your JS code here
import {Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const pass = localStorage.getItem('username').replace(/"/g, '')

const ProtectedRoute = props => {
  const token = Cookies.get('username')
  console.log(pass)
  if (token === pass) {
    return <Route {...props} />
  }
  return <Redirect to="/login" />
}
export default ProtectedRoute
