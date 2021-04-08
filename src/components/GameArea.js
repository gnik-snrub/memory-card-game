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
    const [usedCards, setUsedCards] = useState([])
	const [currentScore, setCurrentScore] = useState(0)
	const [highScore, setHighScore] = useState(0)

    const newGame = () => {
        setCurrentScore(0)
        setUsedCards([])
        shuffleDeck()
    }

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

    useEffect(() => {
        shuffleDeck()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const checkNewCard = (newCard) => {
        const used = usedCards
        if (!used.includes(newCard)) {
            used.push(newCard)
            setUsedCards(used)
            setCurrentScore(currentScore + 1)
        } else {
            endGame()
        }
        console.log(usedCards)
        shuffleDeck()
    }

    useEffect(() => {
        if (currentScore > highScore) {
            setHighScore(currentScore)
        }
    }, [currentScore, highScore])

    const collectCards = () => {
        const cardElements = []
        for (let state of deck) {
            cardElements.push(
                <Card key = {uniqid()} label = {state} click = {checkNewCard} />
            )
        }
        return cardElements
    }

    const endGame = () => {
        newGame()
    }

    return(
        <div className = 'gamearea'>
            <p>Current Score: {currentScore}</p>
            <p>MEMORY GAME</p>
            <p>High Score: {highScore}</p>
            <div className = 'gameboard'>
                {collectCards()}
            </div>
		    	<Button task = {newGame} label = 'New Game' />
        </div>
    )
}

export default GameArea