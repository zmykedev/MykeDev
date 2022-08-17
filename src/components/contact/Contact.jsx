import React from 'react'
import './contact.css'
import { MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'> 
    <h5>Ponerse en contacto</h5>
    <h2>Contactame</h2>

    <div className="container contact__container">

      <div className="contact__options">


        <article className="contact__option">
          <MdOutlineEmail/>
        <h4>Email</h4>
        <h5>zmaikol399@gmail.com</h5>
        <a href="mailto:zmaikol399@gmail.com">Envia un mensaje</a>

        </article>
        <article className="contact__option">
          <RiMessengerLine/>
        <h4>Messenger</h4>
        <h5>Facebook</h5>
        <a href="https://m.me/zmaikol399" >Envia un mensaje</a>

        </article>
        <article className="contact__option">
          <BsWhatsapp/>
        <h4>Whatsapp</h4>
        <h5>+ 569 65514796</h5>
        <a href="https://api.whatsapp.com/send?phone=56981514796">Envia un mensaje</a>

        </article>
      </div>
        <form action="">
            <input type="text" name='' placeholder='Tu nombre completo' required/>
            <input type="text" name='' placeholder='Tu nombre completo' required/>
            <textarea name="message" rows='7' placeholder='Explayate como quieras en las siguientes lineas' required></textarea>
            <button type='submit' className='btn btn-primary'> Enviar mensaje</button>
        </form>


    </div>

    </section>
  )
}

export default Contact