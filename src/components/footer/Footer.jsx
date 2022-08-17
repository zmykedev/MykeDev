import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import {FaReact} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PORTAFOLIO REACT <FaReact/></a>
      <ul className='permalinks'>
      <li>
        <a href="#">Home</a>
      </li>
      <li>     <a href="#about">Sobre mi </a></li>
      
      <li> <a href="#contact">Contacto</a></li>
      <li> <a href="#experience">Experiencia</a></li>
      <li> <a href="#services">Servicios</a></li>
      <li> <a href="#portfolio">Portfolio</a></li>
      <li> <a href="#testimonials">Testimonios</a></li>
      </ul>


          <div className="footer__socials">
            <a href="https://facebook.com"><FaFacebookF/></a>
            <a href="https://instagram.com"><FiInstagram/></a>
            <a href="https://twitter.com/"><IoLogoTwitter/></a>
          </div>


      <div className="footer__copyright">
        <small>&copy; MykeDev Portfolio. Todos los derechos reservados. </small>
      </div>


    </footer>
  )
}

export default Footer