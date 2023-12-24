import React, { useState } from "react";
import CardDeck from "./cardDeck";

const Card = (props) => {
  const [cardValue, setCardValue] = useState(0);
  const [total, setTotal] = useState(0);
  props.setCardValue(cardValue);

  return (
    <div>
      <CardDeck deal="yes" setTm={setCardValue} />
      <div> {cardValue} </div>
    </div>
  );
};
export default Card;
