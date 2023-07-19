import './Contact.scss'

function Contact() {
  return (
    <section className='contact'>
    <form action="https://formsubmit.co/6a1e2edb56ea14755490a5969a7a4f51" method="POST" className="w-form">
           <div className="subheadline">contact form</div>
           <h3>
               Get in touch <br /> with me
           </h3>
           <div className="row">
               <div className="col-1">
                   <label htmlFor="name" className="form-input-label">Name</label>
                   <input type="text" className="form-input w-input" maxLength="256" name="name" placeholder="Enter your name" required />
               </div>
               <div className="col-2">
                   <label htmlFor="contact-Email" className="form-input-label">E-mail</label>
                   <input type="text" className="form-input w-input" maxLength="256" name="contact-Email" placeholder="Enter your E-mail" required />
               </div>
           </div>
           <div className="text-a">
               <label htmlFor="message" className="form-input-label">Tell me about your project</label>
               <textarea required maxLength="5000" name="message" id="message" className="form-input message w-input" placeholder="Enter your message"></textarea>
           </div>
           <div className="buttons">
           <input type="submit" value="submit" className="button w-button" />
           </div>
       </form>
    </section>
  )
}

export default Contact