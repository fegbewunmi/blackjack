import React, { useState } from "react";
import CardDeck from "./cardDeck";

const DealersHand = (props) => {
  const [cardValue, setCardValue] = useState(0);
  return (
    <div>
      <h4> Dealers Hand </h4>
      <div className="cardHand">
        <CardDeck topCard={props.dealerFirst[0]} />
        <CardDeck topCard={props.dealerFirst[1]} />
        {/* <div className="cardHand"> {cards} </div> */}
      </div>
      {/* <CardDeck setTm={setCardValue}/> */}
    </div>
  );
};
export default DealersHand;
