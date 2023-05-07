import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://https://www.linkedin.com/in/dhanush-kannan-8198b2243/" target="_blank" ><BsLinkedin/></a>
        <a href="https://https://github.com/thedhanush" target="_blank"><FaGithub/></a>
        <a href="https://https://dribbble.com/Dhanushkannankarthikeyan" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials