import React from "react";
import "./CardType1.scss"

function CardType1() {
    return(
    <div className="full">
        <div className="cards">
            <img className="cardsImg" src="default-img.png" alt="default-img" />
            <div className="cardsText">
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae libero officiis natus explicabo</p>
            </div>
        </div>
        <div className="cards">
            <img className="cardsImg" src="default-img.png" alt="default-img" />
            <div className="cardsText">
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae libero officiis natus explicabo</p>
            </div>
        </div>
        <div className="cards">
            <img className="cardsImg" src="default-img.png" alt="default-img" />
            <div className="cardsText">
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae libero officiis natus explicabo</p>
            </div>
        </div>
    </div>
    )
}

export default CardType1;

/* {<Card className="cardsCarouselItem" key={index} style={{ width: '18rem' }}>
    <Card.Img
    variant="top"
    src="default-img.png"
    />
    <Card.Body>
        <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
    </Card.Body>
</Card>} */

