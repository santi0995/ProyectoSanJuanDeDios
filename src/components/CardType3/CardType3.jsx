import React from "react";
import { Card, Button } from "react-bootstrap";

function CardType3() {
    return(
        <Card className="cardsCarouselItem" style={{ width: '17vw' }}>
            <Card.Img variant="top" src="default-img.png"/>
            <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="light">Ver más</Button>
            </Card.Body>
        </Card>
    )
}

export default CardType3;