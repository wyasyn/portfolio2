
import './Footer.scss'
import {Logo, SocialMedia} from "../../components"

function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer id='footer' className='footer'>
    <div className="footer-container container">
            <Logo />
            <SocialMedia />
            <p>&copy; {currentYear} All Rights Reserved</p>
    </div>

  </footer>
  )
}

export default Footer