
import { FaEnvelopeOpen, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function SocialMedia() {
  return (
    <div className='social_media'>
        <Link to="https://www.facebook.com/ywalum/">
            <FaFacebook />
        </Link>
        <Link to="https://www.twitter.com/wyasyn/">
            <FaTwitter />
        </Link>
        <Link to="https://www.github.com/wyasyn/">
            <FaGithub />
        </Link>
        <Link to="https://www.instagram.com/yasynwlm/">
            <FaInstagram />
        </Link>
        <Link to="https://www.linkedin.com/in/yasin-walum-01b18295/">
            <FaLinkedin />
        </Link>
        <Link to="/contact">
            <FaEnvelopeOpen />
        </Link>
    </div>
  )
}

export default SocialMedia