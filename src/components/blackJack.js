import React, { useState, useEffect, useRef } from "react";
import PlayersHand from "./playersHand";
import DealersHand from "./dealersHand";
import * as Constants from "../utils";

const BlackJack = () => {
  const [fullDeck, setFullDeck] = useState(
    Constants.createDeck(Constants.cardValues, Constants.cardSuits),
  );
  const [topCard, setTopCard] = useState({});
  const [playFirst, setPlayFirst] = useState([fullDeck[0], fullDeck[1]]);
  const [dealerFirst, setDealerFirst] = useState([]);
  const [total, setTotal] = useState(0);

  const shuffleCards = () => {
    setFullDeck(fullDeck.sort(() => Math.random() - 0.5));
  };
  const dealCard = () => {
    setTopCard(fullDeck[0]);
    setFullDeck(fullDeck.slice(1));
  };
  //   const refreshGame = () => {
  //     shuffleCards();
  //     window.location.reload(false);
  //   };

  useEffect(() => {
    shuffleCards();
    setPlayFirst([fullDeck[0], fullDeck[1]]);
    const firstValue = Constants.faceValues(Object.values(fullDeck[0])[0]);
    const secondValue = Constants.faceValues(Object.values(fullDeck[1])[0]);
    setTotal(firstValue + secondValue);
    setDealerFirst([fullDeck[2], fullDeck[3]]);
    setFullDeck(fullDeck.slice(4));
  }, []);

  return (
    <div>
      <h1> Welcome to Blackjack </h1>
      <DealersHand />
      <PlayersHand
        fullDeck={fullDeck}
        topCard={topCard}
        dealCard={dealCard}
        playFirst={playFirst}
        total={total}
      />
      {/* <button onClick={dealCard}>Hit</button> */}
      {/* <button onClick={refreshGame}>New Game</button> */}
    </div>
  );
};

export default BlackJack;
