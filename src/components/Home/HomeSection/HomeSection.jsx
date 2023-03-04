import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import "./HomeSection.scss";


function Section({title, variant, display}) {
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const reduceItems = (acc, cur, index) => {
      const groupIndex = Math.floor(index / display);
      if (!acc[groupIndex]) acc[groupIndex] = [];
      acc[groupIndex].push(cur);
      console.log(acc);
      return acc;
    };

    return (
        <div id={variant}>
            <h1 id="title">{title}</h1>
            <Carousel id="cardsCarousel" variant="dark">
            {items.reduce(reduceItems, []).map((item, index) => (
            <Carousel.Item key={index}>
                <div className="d-flex justify-content-center">
                {item.map((item, index) => {
                    return (
                    <Card className="cardsCarouselItem" key={index} style={{ width: '18rem' }}>
                        <Card.Img
                        variant="top"
                        src="default-img.png"
                        />
                        <Card.Body>
                        <Card.Title>{/* {item.name} */}Lorem ipsum dolor sit amet</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Ver más</Button>
                        </Card.Body>
                    </Card>
                    );
                })}
                </div>
            </Carousel.Item>
            ))}
            </Carousel>
        </div>
    )
}

export default Section;