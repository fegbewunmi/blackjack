import React, { useState, useEffect, useRef } from "react";
import * as Constants from "../utils";
import Hand from "./hand";
import GameActions from "./actions";

const BlackJack = () => {
  const [fullDeck, setFullDeck] = useState(
    Constants.createDeck(Constants.cardValues, Constants.cardSuits),
  );
  const [total, setTotal] = useState(0);
  const [gameState, setGameState] = useState("init");
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCount, setDealerCount] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);

  const shuffleCards = () => {
    setFullDeck(fullDeck.sort(() => Math.random() - 0.5));
  };

  const dealCard = (dealType) => {
    if (fullDeck.length > 0) {
      const randomIndex = Math.floor(Math.random() * fullDeck.length);
      const card = fullDeck[randomIndex];
      const faceValue = Constants.faceValues(Object.values(card)[0]);

      fullDeck.splice(randomIndex, 1);
      setFullDeck([...fullDeck]);

      switch (dealType) {
        case "player":
          playerCards.push({ value: card, hidden: false });
          setPlayerCards([...playerCards]);
          break;
        case "dealer":
          dealerCards.push({ value: card, hidden: false });
          setDealerCards([...dealerCards]);
          break;
        case "hidden":
          dealerCards.push({ value: card, hidden: true });
          setDealerCards([...dealerCards]);
          break;
        default:
          break;
      }
    } else {
      alert("All cards have been drawn");
    }
  };

  useEffect(() => {
    setPlayerCount(Constants.totalValues(playerCards));
  }, [playerCards]);

  useEffect(() => {
    setDealerCount(Constants.totalValues(dealerCards));
  }, [dealerCards]);

  const hit = () => {
    dealCard("player");
  };

  useEffect(() => {
    if (gameState === "init") {
      dealCard("player");
      dealCard("player");
      dealCard("dealer");
      dealCard("hidden");
      setGameState("userTurn");
      //   setMessage(Message.hitStand);
    }
  }, [gameState]);

  return (
    <div>
      <h1> Welcome to Blackjack </h1>
      <Hand title={`Dealer's Hand (${dealerCount})`} cards={dealerCards} />
      <Hand title={`Player's Hand (${playerCount})`} cards={playerCards} />
      <GameActions hitEvent={hit} />
    </div>
  );
};

export default BlackJack;
