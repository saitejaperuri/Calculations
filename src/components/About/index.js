// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

const user = localStorage.getItem('User').replace(/"/g, '')
const mail = localStorage.getItem('email').replace(/"/g, '')
const pho = localStorage.getItem('phone').replace(/"/g, '')
console.log(user)
const About = () => (
  <>
    <Header />
    <div className="about-container">
      <p className="para">
        Name : <span>{user}</span>
      </p>
      <p className="para">
        Address : <span>{mail}</span>
      </p>
      <p className="para">
        Phone : <span>{pho}</span>
      </p>
      <LogoutButton />
    </div>
  </>
)

export default About
