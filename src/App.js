import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import RegistrationForm from './components/RegistrationForm'
// import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/register" component={RegistrationForm} />
    <Route component={NotFound} />
  </Switch>
)

export default App
