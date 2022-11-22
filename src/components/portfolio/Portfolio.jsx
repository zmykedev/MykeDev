import React, { Link } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/react_hooks.jpg'
import {useState} from 'react';
import { useElementSize } from 'usehooks-ts'
import Wrapper from '../Helpers/Wrapper';






const data = [
  
  { id: 1,
    image: IMG1,
    title: 'React Hooks',
    github: 'http://github.com/zmykedev',
    demo: ''

},
{ id: 2,
  image: IMG1,
  title: 'Hello World',
  github: 'http://github.com/zmykedev',
  demo: 'https://dribbble.com/'

},
{ id: 3,
  image: IMG1,
  title: 'Hello World',
  github: 'http://github.com/zmykedev',
  demo: 'https://dribbble.com/'

},
{ id: 4,
  image: IMG1,
  title: 'Aprende CSS',
  github: 'http://github.com/zmykedev',
  demo: 'https://dribbble.com/'

},
{ id: 5,
  image: IMG1,
  title: 'Aprende Python',
  github: 'http://github.com/zmykedev',
  demo: 'https://dribbble.com/'

},
{ id: 6,
  image: IMG1,
  title: 'Aprende Javascript',
  github: 'http://github.com/zmykedev',
  demo: 'https://dribbble.com/'
  

}

]




const Portfolio = () => {
  const [isVisible, setRHooks] = useState(false)

  const [count, setCount] = useState(0);

  const toggleVisibility = () => setRHooks(x => !x)

  return (
    <Wrapper>
    <section id="portfolio">
      <h5>Skills importantes</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>
          {
            return (
              <article key={id} className='portfolio__item'>
                      <div className="portfolio__item-image ">
                        <img src={image} alt={title} />
                      </div>
                                  <h3>{title}</h3>
                                  <div className="portfolio__item-cta">
                                          <a href={github} target='_blank' className='btn text-center text-xl'>Github</a>
                                          <button className='btn btn-primary' onClick={toggleVisibility} target='_blank'>Live demo</button>
                                  </div>
              </article>
            )
          })
        }
         
         {isVisible && (
        <div className="container portfolio__detail" 
          style={{
            position: 'absolute',
            'border-radius': '1.2rem',
            left: '10%',
            width: '80%', height: '100%', backgroundColor: 'white', padding: '15px', color: 'black'}}>
              <button  onClick={toggleVisibility}  style={{ 'float': 'right', margin: 'auto', 'margin-right': '2rem', 'margin-top': '0.5rem', background: 'white' }}>Cerrar</button>
            <h1 style={{textAlign: 'center'}}>¿ Que es un Hook de Reactjs?</h1>
            <div className="container hooks_cont ">
                    <p >Un hook es una función que nos permite conectarnos a la herramientas y caracteristicas de React.
                      El hook mas basico es useState que permite agregar un estado de reacción a los componentes de la función, lo que le agrega dinamismo y fluidez a nuestra aplicación ya que no renderea y su tiempo de carga es rapido.
                    </p>
                    <h3>A continuación tenemos un ejemplo de funcionalidad</h3>
                    <p>Las veces que clickes se veran reflejadas aqui -> {count} veces.</p>
                    <button className='btn'onClick={() => setCount(count + 1)}>
                      Click aquí
                    </button>
            </div>
            </div>
                          )
              }
      </div>

    </section>
    </Wrapper>)
}

export default Portfolio