import React, { useState } from "react";
import CardDeck from "./cardDeck";

const Hand = ({ title, cards }) => {
  const [cardValue, setCardValue] = useState(0);
  const getTitle = () => {
    if (cards.length > 0) {
      return <h1>{title}</h1>;
    }
  };
  // console.log(cards)
  return (
    <div>
      {getTitle()}
      <div className="cardHand">
        {cards.map((card) => {
          return <CardDeck topCard={card.value} hidden={card.hidden} />;
        })}
      </div>
    </div>
  );
};
export default Hand;
