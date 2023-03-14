import React from "react";
import { Carousel } from "react-bootstrap";
import CardType1 from "../CardType1/CardType1";
import CardType2 from "../CardType2/CardType2";
import CardType3 from "../CardType3/CardType3";
import "./CardsCarousel.scss";


function CardsCarousel({title, variant, display, type}) {
    
    function getType(){
        switch (type) {
            case 1:
                return <CardType1/>
            case 2:
                return <CardType2/>
            default:
                return <CardType3/>
        }
    }
    
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const reduceItems = (acc, cur, index) => {
      const groupIndex = Math.floor(index / display);
      if (!acc[groupIndex]) acc[groupIndex] = [];
      acc[groupIndex].push(cur);
      console.log(acc);
      return acc;
    };

    const reduceItemsMobile = (acc, cur, index) => {
        const groupIndex = Math.floor(index / (display/2));
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(cur);
        console.log(acc);
        return acc;
      };

    return (
        <div id={variant}>
            <h1 id="title">{title}</h1>
            <Carousel id="cardsCarousel" className="d-none d-md-block" variant="dark">
            {items.reduce(reduceItems, []).map((item, index) => (
            <Carousel.Item key={index}>
                <div className="d-flex justify-content-center">
                {item.map((item, index) => {
                    return (
                        <div className="cardsCarouselItem" key={index}>
                            {getType()}
                        </div>
                    );
                })}
                </div>
            </Carousel.Item>
            ))}
            </Carousel>
            <Carousel id="cardsCarousel" className="mobileCarousel" variant="dark">
                {items.reduce(reduceItemsMobile, []).map((item, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center">
                        {item.map((item, index) => {
                            return (
                                <div className="cardsCarouselItem" key={index}>
                                    {getType()}
                                </div>
                            );
                        })}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default CardsCarousel;