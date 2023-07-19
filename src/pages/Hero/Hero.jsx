import './Hero.scss'
import {Button, SocialMedia} from '../../components'
import { images } from "../../constants/images"
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="col-1">
          <div className="content">
            <h1>
              yasin <br />Walum
            </h1>
            <p>
              Hello, am a front-end web and mobile developer
            </p>
            <div className="cta">
              <Button
              url="../../assets/Resume-Olaolu-Olawuyi.pdf"
              text="Download CV"
               />
            </div>
          </div>
        </div>
        <div className="col-2">
          <Link to='/' className="logo">
            <img className='black' src={images.logoBlack} alt="logo" />
            <img className='white' src={images.logoWhite} alt="logo" />
          </Link>
          <div className="pic">
            <img src={images.me} alt="image" />
          </div>
          <SocialMedia />
        </div>
      </section>
    </>
  )
}

export default Hero