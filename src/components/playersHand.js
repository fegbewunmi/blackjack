import React, { useState, useEffect } from "react";
import CardDeck from "./cardDeck";
import * as Constants from "../utils";

const PlayersHand = (props) => {
  const [cardCount, setCardCount] = useState(4);
  const [total, setTotal] = useState(0);
  const [cards, setCards] = useState([]);

  const hitCard = () => {
    props.dealCard();
    setCardCount(cardCount + 1);
  };

  useEffect(() => {
    setTotal(props.total);
  }, [props.total]);

  useEffect(() => {
    if (Object.keys(props.topCard).length > 0) {
      setCards([...cards, <CardDeck topCard={props.topCard} />]);
      setTotal(total + Constants.faceValues(Object.values(props.topCard)[0]));
    }
  }, [cardCount]);

  return (
    <div>
      <h4> Players Hand </h4>
      <div> Total: {total} </div>
      <div className="cardHand">
        <CardDeck topCard={props.playFirst[0]} />
        <CardDeck topCard={props.playFirst[1]} />
        <div className="cardHand"> {cards} </div>
      </div>
      <button onClick={hitCard}>Hit</button>
    </div>
  );
};
export default PlayersHand;
