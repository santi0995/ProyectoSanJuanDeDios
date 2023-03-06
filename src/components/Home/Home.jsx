import React from "react";
import { Carousel, Button } from 'react-bootstrap'
import './Home.scss';
import Section from "./HomeSection/HomeSection";
import Servicios from "../CardsCarousel/CardsCarousel";

function Home() {
    return (
      <>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.tutorialspoint.com/bootstrap/images/slide1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.tutorialspoint.com/bootstrap/images/slide2.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.tutorialspoint.com/bootstrap/images/slide3.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Section title="Beneficios" display={3} type={1}/>
        <Servicios title="Servicios" variant="dark" display={4} type={3}/>
        <Section title="Novedades" display={3} type={2}/>
        <div className="contacto">
          <img className="contactoImg" src="default-img.png" alt="Default img" />
          <div className="contactoText">
            <h2>Contacto</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio asperiores consequuntur facilis quod, unde amet mollitia officiis dolor minus aut aperiam animi voluptatum nisi pariatur saepe cupiditate tempora recusandae sed.</p>
            <Button variant="light" className="contactoTextButton">Escríbenos al Whatsapp</Button>
          </div>
        </div>
        <div className="ubicacion">
          <div className="ubicacionText">
            <h2 className="ubicacionTextTitle">Ubicación</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio asperiores consequuntur facilis quod, unde amet mollitia officiis dolor minus aut aperiam animi voluptatum nisi pariatur saepe cupiditate tempora recusandae sed.</p>
          </div>
          <iframe className="ubicacionImg" src="https://maps.google.com/maps?hl=es&amp;q=Centro%20de%20Rehabilitaci%C3%B3n%20San%20Juan%20de%20Dios+(Centro%20de%20Rehabilitaci%C3%B3n%20San%20Juan%20de%20Dios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </>
    );
}

export default Home;