import './Skills.scss'
import { Skill } from "../../components"
import { SkillsData } from "../../constants/Data"

function Skills() {
  return (
   <>
   <section id="skills" className="skills">
    <div className="title">
      <h2>
        Skills
      </h2>
    </div>
    <h3>
        What Am Great At
    </h3>

    <div className="skills__content">
      {
        SkillsData.map((item, index) => (
          <Skill
          key={index}
          {...item}
           />
        )  )
      }
    </div>
   </section>
   </>
  )
}

export default Skills