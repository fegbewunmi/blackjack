import React, { useState } from "react";
import Card from "./card";
import CardDeck from "./cardDeck";

const DealersHand = () => {
  const [cardValue, setCardValue] = useState(0);
  return (
    <div>
      <h4> Dealers Hand </h4>
      {/* <CardDeck setTm={setCardValue}/> */}
    </div>
  );
};
export default DealersHand;
