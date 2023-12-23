
import React, {useState, useEffect} from 'react'
import '../styles/cardDeck.css'

const CardDeck = () => {
    const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const cardStyles = {
        'A' : 'one',
        '2' : 'two',
        '3' : 'three',
        '4' : 'four',
        '5' : 'five',
        '6' : 'six',
        '7' : 'seven',
        '8' : 'eight',
        '9' : 'nine',
        '10' : 'ten'
    }
    const cardSuits = ['\u2665', '\u2666', '\u2660', '\u2663']
    const createDeck = (values, suits) => {
        let deck = []
        suits.forEach((suit) => {
            values.forEach((value) => {
                let dict = {}
                dict[suit] = value
                deck.push(dict)
            })
        })
        return deck
    }
    // const [fullDeck, setFullDeck] = useState(createDeck(cardValues, cardSuits))
    const fullDeck = createDeck(cardValues, cardSuits)  
   
    const getRandCard = () =>{
        return (fullDeck[(Math.floor(Math.random() * fullDeck.length))])
    }
    const randomCard = getRandCard()
    const randomCard2 = getRandCard()
   
    // const cards2 = 
    const cardFaces = (val, vtype) =>{ 
        const letters = ['J', 'Q', 'K']
        if (letters.includes(val[0])){
            return (
            <div className="caShape"> 
            {Array(1)
            .fill(<div className={cardStyles[val]}> {vtype} </div>)}
            </div>)
        }
        else {
            const numVal = (val=='A') ? 1 : Number(val) 
        return(
            <div className="caShape"> 
            {Array(numVal)
            .fill(<div className={cardStyles[val]}> {vtype} </div>)}
            </div>
        )
            }
    }
    return (
        <div> 
            <h1> Deck of Cards </h1>
            <div className='deck'> 
            <div className='cardBody'>
                <div className='cardNumber'>
                    <div> {Object.values(randomCard)} </div>
                    <div style={{'fontSize':'10px'}}>  {Object.keys(randomCard)} </div> 
                    </div>
                <div>{cardFaces(Object.values(randomCard), Object.keys(randomCard))}</div>
            </div>
            <div className='cardBody'>
                <div className='cardNumber'>
                    <div> {Object.values(randomCard2)} </div>
                    <div style={{'fontSize':'10px'}}> {Object.keys(randomCard2)}</div> 
                    </div>
                <div>{cardFaces(Object.values(randomCard2), Object.keys(randomCard2))}</div>
                </div>
            </div>
        </div>
    )
}

export default CardDeck
