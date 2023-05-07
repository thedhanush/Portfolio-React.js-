import './contact.css'
import{FiMail} from'react-icons/fi'
import{BsInstagram} from 'react-icons/bs'
import{BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bl5b1dc', 'template_jffpiwp', form.current, '4H5gmf2DVq7FtYCVZ')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get I n Touch</h5>
      <h2> Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sri.198232@gmail.com</h5>
            <a href="mailto:sri.198232@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>instagram</h4>
            <h5>dhanush_theone</h5>
            <a href="https://m.me/https://instagram.com/dhanush_theone?igshid=ZmZhODViOGI="target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Dhanush Kannan karthikeyan</h5>
            <a href="https://api.whatsapp.com/send?phone=+918438131472"target="_blank">Send a message</a>
          </article>
        </div>
{/*----------------------END OF CONTACT SECTION---------------------------*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name ='name' placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea name="message"  rows="7" placeholder='your message' required></textarea>
        <button type='submit'className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact