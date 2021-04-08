import { useEffect, useState } from 'react'
import uniqid from 'uniqid'
import Card from './Card'
import Button from './Button'
import './GameArea.css'

const GameArea = () => {
    const [deck, setDeck] = useState([
        'Russia',
        'Ukraine',
        'Belarus', 
        'Moldova',
        'Uzbekistan',
        'Kazakhstan',
        'Kyrgyzstan',
        'Tajikistan',
        'Turkmenistan',
        'Georgia',
        'Azerbaijan',
        'Armenia',
        'Lithuania',
        'Latvia',
        'Estonia',
        'USSR'
    ])

    useEffect(() => {
        shuffleDeck()
    }, [])

    const shuffleDeck = () => {
        const newDeck = [ ...deck ]
        for(let i = newDeck.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = newDeck[i]
            newDeck[i] = newDeck[j]
            newDeck[j] = temp
        }
        setDeck(newDeck)
    }

    const collectCards = () => {
        const cardElements = []
        for (let state of deck) {
            cardElements.push(
                <Card label = {state} key = {uniqid()} />
            )
        }
        return cardElements
    }

    return(
        <div className = 'gamearea'>
            <div className = 'gameboard'>
                {collectCards()}
            </div>
		    	<Button task = {shuffleDeck} label = 'New Game' />
        </div>
    )
}

export default GameArea