import React from "react";
import "./CardType1.scss"

function CardType1() {
    return(
        <div className="card1Container">
            <img className="card1Img" src="default-img.png" alt="default-img" />
            <div className="card1Text">
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default CardType1;

