import React from "react";
import CardType1 from "../../CardType1/CardType1";
import CardType2 from "../../CardType2/CardType2";
import CardType3 from "../../CardType3/CardType3";
import "./HomeSection.scss"

function Section({title, display, type}) {
    function getType(){
        switch (type) {
            case 1:
                return <CardType1/>;
            case 2:
                return <CardType2/>;
            default:
                return <CardType3/>;
        }
    }

    let cards = [];

    function cardsBuilding(){
        for (let i = 0; i < display; i++) {
            cards.push(getType());
        }
        return cards
    }
    
    return(
        <div className="HomeSectionContainer">
            <h2>{title}</h2>
            <div className="HomeSectionCards">
                {cardsBuilding()}
            </div>
        </div>
    )
}

export default Section;