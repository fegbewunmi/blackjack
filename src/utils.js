export const letters = ["J", "Q", "K"];
export const faceValues = (card) => {
  if (card == "A") {
    //Remember A can be one or 11
    return 1;
  } else if (letters.includes(card[0])) {
    return 10;
  } else {
    return Number(card);
  }
};

export const totalValues = (cards) => {
  let total = 0;
  cards.forEach((card) => {
    if (card.hidden === false && Object.values(card.value)[0] !== 'A') {
        total += letters.includes(Object.values(card.value)[0]) ? 10 : Number(Object.values(card.value))
    }
  });
  const aces = cards.filter((card) => {
    return Object.values(card.value)[0] === 'A';
  });
  aces.forEach((card) => {
    if (card.hidden === false) {
      if ((total + 11) > 21) {
        total += 1;
      }
      else if ((total + 11) === 21) {
        if (aces.length > 1) {
          total += 1;
        }
        else {
          total += 11;
        }
      }
      else {
        total += 11;
      }
    }
  });
  return total
}

export const cardValues = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
export const cardStyles = {
  A: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
};
export const cardSuits = ["\u2665", "\u2666", "\u2660", "\u2663"];
export const createDeck = (values, suits) => {
  let deck = [];
  suits.forEach((suit) => {
    values.forEach((value) => {
      let dict = {};
      dict[suit] = value;
      deck.push(dict);
    });
  });
  return deck;
};
