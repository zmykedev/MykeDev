import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id="serv">
    <h5>Que ofrezco</h5>
    <h2>Servicios</h2>  
    <div className="container services__container">

        <article className="service">
            <div className="service__head">
              <h3>Diseño UI/UX</h3>
            </div>

            <ul className="service__list">
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>  
            </ul>
        </article>

        <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>

            <ul className="service__list">
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>  
            </ul>
        </article>

        <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service__list">
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>  
            </ul>
        </article>

    </div>
      
    </section>
  )
}

export default Services