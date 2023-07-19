import './Works.scss'
import { Project } from "../../components"
import { ProjectData } from "../../constants/Data"

function Works() {
  return (
    <>
    <section id="works" className="works">
    <div className="title">
      <h2>
        Projects
      </h2>
    </div>
    <h3>
        Selected Works
    </h3>
    <div className="project__content">
     {
      ProjectData.map((project, index) => (
        <Project
        key={index}
        {...project}
         />
      ))
     }
    </div>


    </section>
    </>
  )
}

export default Works