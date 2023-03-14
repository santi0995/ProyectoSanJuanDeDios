import { Button, Card } from "react-bootstrap";

import React from "react";
import { Card, Button } from "react-bootstrap";

function CardType3({title, text, image}) {
    return(
        <Card className="cardsCarouselItem">
            <Card.Img variant="top" src="default-img.png"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="light">Ver más</Button>
            </Card.Body>
        </Card>
    )
}

export default CardType3;