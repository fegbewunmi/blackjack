import React, { useState, useRef } from "react";
import "../styles/cardDeck.css";
import * as Constants from "../utils";

const CardDeck = (props) => {
  const cardFaces = (val, vtype) => {
    if (Constants.letters.includes(val[0])) {
      return (
        <div className="caShape">
          {Array(1).fill(
            <div className={Constants.cardStyles[val]}> {vtype} </div>,
          )}
        </div>
      );
    } else {
      const numVal = val == "A" ? 1 : Number(val);
      return (
        <div className="caShape">
          {Array(numVal).fill(
            <div className={Constants.cardStyles[val]}> {vtype} </div>,
          )}
        </div>
      );
    }
  };
  return (
    <div>
      <div className="deck">
        <div className="cardBody">
          <div className="cardNumber">
            <div> {Object.values(props.topCard)} </div>
            <div style={{ fontSize: "10px" }}>
              {" "}
              {Object.keys(props.topCard)}{" "}
            </div>
          </div>
          <div>
            {cardFaces(
              Object.values(props.topCard),
              Object.keys(props.topCard),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeck;
