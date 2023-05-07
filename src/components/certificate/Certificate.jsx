import React from 'react'
import './certificate.css'
import IMG1  from '../../assets/basicofjavaimg.jpg'
import IMG2  from '../../assets/frontenddevelopmentimg.jpg'
import IMG3  from '../../assets/GOOGLE.png'
import IMG4  from '../../assets/naanmudhalvanimg.jpg'
import IMG5  from '../../assets/AndroidCertificate-MIT.jpg'
import IMG6  from '../../assets/skillathonimg.jpg'

 
const data =[
    {
      id: 1,
      image: IMG1,
      title: 'Basic Of Java',
      drive: 'https://drive.google.com/file/d/13drbpobOjS0eOkxd3itpqUpWnhGlHXIk/view?usp=drivesdk',
      
    },
    {
      id: 2,
      image: IMG2,
      title: 'Front-End Development',
      drive: 'https://drive.google.com/file/d/179KkLiNACmUbn6sLe5VuD1fu01f977u9/view?usp=drivesdk',
      
    },
    {
      id: 3,
      image: IMG3,
      title: 'GOOGLE-UX Design',
      drive: 'https://drive.google.com/file/d/1446NxVNWTCl-2TDzsGoKk0OYcr0a36Js/view?usp=drivesdk',
      
    },
    {
      id: 4,
      image: IMG4,
      title: 'Naan-Mudhalvan',
      drive: 'https://drive.google.com/file/d/13fj2lLla3bxPJGMjdAUwAohMewyvcIHf/view?usp=drivesdk',
      
    },
    {
      id: 5,
      image: IMG5,
      title: 'Android Development-MIT',
      drive: 'https://drive.google.com/file/d/13dvnNMW0fYoGgQGpt89KNVtHlct_FY81/view?usp=drivesdk',
      
    },
    {
      id: 6,
      image: IMG6,
      title: 'Skillathon - RPA',
      drive: 'https://drive.google.com/file/d/1JnCSHW09yuioNHZvmJAG5GL2I2gJsO21/view?usp=drivesdk',
      
    }
  ]

const Certificate = () => {
  return (
    <section id='certificate'>
    <h5>Certificates</h5>
    

    <div className="container certificate__container">
    {
      data.map(({id,image,title,drive}) => {
          return(
            <article key={id} className='certificate__item'>
        <div className="certificate__item-image">
          <img src={image} alt={title} />
        </div>
          <h3>{title}</h3>
          <div className="certificate__item-cta">
          <a href={drive} className='btn' target='_blank'>drive</a>
          
          </div>
        </article>
          )
        }
      )
    }
    </div>

  </section>
  )
}

export default Certificate