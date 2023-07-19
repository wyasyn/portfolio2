import './Services.scss'
import {Service} from "../../components"
import { ServicesData } from "../../constants/Data"

function Services() {
  return (
    <>
    <section id="services" className="services">
    <div className="title">
      <h2>
        Services
      </h2>
    </div>
    <h3>
        How May I Assist You
    </h3>
    <div className="services__content">
      {
        ServicesData.map((service, index) => (
            <Service 
            key={index}
            {...service}
             />
        ))
      }
    </div>
    </section>
    </>
  )
}

export default Services