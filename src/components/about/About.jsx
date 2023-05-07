import './about.css'
import ME from '../../assets/me-about.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{VscFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        <h5>
        &nbsp;
        </h5>
        
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          
            <img src={ME} alt="About_Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2+</small>
            </article>
            <article className='about__card'>
              <VscFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>

          <p>My name is Dhanush Kannan Karthikeyan. I was born and raised in Madurai(Tamil Nadu).

I did B.E in Computer Science Engineering from Mahendra Engineering Collage.<br/> <br/>I like to design the web page and mobile app interface. I believe Designing gives you a new perspective to everything.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    
  )
}

export default About