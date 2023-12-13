import React from 'react'
import './home.css'
import Carousel from 'react-bootstrap/Carousel';
import imgInicio from '../../assets/imgInicio.jpg'
import imgInicio2 from '../../assets/imgInicio2.jpg'
import imgInicio3 from '../../assets/imgInicio3.jpg'


const Home = () => {
  return (
    <>
    <Carousel data-bs-theme="dark" className='carousel'>
      <Carousel.Item>
        <img
          className="d-bblock w-100 "
          src={imgInicio}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={imgInicio2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgInicio3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
   
  )
}

export default Home