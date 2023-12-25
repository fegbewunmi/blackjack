import React, { useState, useEffect } from "react";
import CardDeck from "./cardDeck";
import * as Constants from "../utils";

const PlayersHand = (props) => {
  const [cardCount, setCardCount] = useState(4);
  const [total, setTotal] = useState(0);
  const [cards, setCards] = useState([]);
  const [stand, setStand] = useState(false);

  const hitCard = () => {
    props.dealCard();
    setCardCount(cardCount + 1);
  };

  const standCard = () => {
    setStand(true);
    alert("Standing!!");
  };

  //   useEffect(() => {
  //     if (total > 21)
  //     standCard()

  //   }, [total]);

  //   console.log(props.gameState)
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
      <button onClick={standCard}>stand</button>
    </div>
  );
};
export default PlayersHand;
