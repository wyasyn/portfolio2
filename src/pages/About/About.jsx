import './About.scss'
import { images } from "../../constants/images"
import { ButtonB } from "../../components"

function About() {
  return (
    <>
    <section id="about" className="about">
      <div className="title">
        <h2>
          About Me
        </h2>
      </div>
      <div className="about__content">
        <div className="col-1">
          <p>
            Welcome to my portfolio website! I am thrilled to have you here and share my passion for web development. Through this platform, I aim to showcase my skills, experience, and creative projects in the digital realm. As a dedicated web developer, I strive to merge design aesthetics with functionality, crafting engaging and user-friendly websites. Whether you&apos;re seeking an expert in front-end development, back-end programming, or both, I am confident that my diverse skill set and innovative approach will captivate your interest. Join me on this journey as we explore the exciting world of web development together.
          </p>
          <ButtonB
          text='Contact Me'
          url='/contact'
           />
        </div>
        <div className="col-2">
          <img src={images.aboutPic} alt="about me" />
        </div>
      </div>
    </section>
    </>
  )
}

export default About