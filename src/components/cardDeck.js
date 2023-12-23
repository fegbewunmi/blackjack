
import React, {useState} from 'react'
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
    const cardShapes = ['hearts', 'diamonds', 'spades', 'clubs']
    const [cards, setCards] = useState([
        { suit: 'hearts', value: 'A' },
        { suit: 'hearts', value: '2' },
        { suit: 'hearts', value: '3' },
    ])
    // const cards2 = 
    const cardTypes = (val, vtype) =>{ 
        return(

            <div className="caShape"> 
            {Array(val)
            .fill(<div className={cardStyles[val]}> {vtype} </div>)}
            </div>
        )
    }
    return (
        <div> 
            <h1> Deck of Cards </h1>
            <div className='deck'> 
            <div className='cardBody'>
                <div className='cardNumber'>
                    <div> {cardValues[1]} </div>
                    <div style={{'font-size':'10px'}}>  &spades; </div> </div>
                <span class="suit">&spades;</span>
            </div>
            <div className='cardBody'>
                <div className='cardNumber'>
                    <div> {cardValues[0]} </div>
                    <div style={{'font-size':'10px'}}>  &hearts; </div> 
                    </div>
                <div>{cardTypes('A', '\u2665')}</div>
            </div>
            <div className='cardBody'>
                <div className='cardNumber'>
                    <div> {cardValues[8]} </div>
                    <div style={{'font-size':'10px'}}>  &hearts; </div> 
                    </div>
                <div>{cardTypes(9, '\u2660')}</div>
                </div>
            </div>
            {/* <ul>
        {cards.map((card) => (
          <li key={card.suit + card.value}>{card.suit} {card.value}</li>
        ))}
      </ul> */}
        </div>
    )
}

export default CardDeck
