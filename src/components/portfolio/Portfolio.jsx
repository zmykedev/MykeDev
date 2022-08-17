import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/hola.png'


const data = [
  
  { id: 1,
    image: IMG1,
    title: 'Hello World',
    github: 'http://github.com/zmykedev',
    demo: 'https://dribbble.com/'

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
  return (
    <section id="portfolio">
      <h5>Mi trabajo reciente</h5>
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
              <a href={github} target='_blank' className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
              </div>
            </article>     
            )
          })
        }
         
      </div>

    </section>
  )
}

export default Portfolio