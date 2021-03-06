import { useEffect, useState } from 'react'
import uniqid from 'uniqid'
import Card from './Card'
import Button from './Button'
import './GameArea.css'

const GameArea = () => {
    const [deck, setDeck] = useState([
        'am',
        'az',
        'by', 
        'ee',
        'ge',
        'kg',
        'kz',
        'lt',
        'lv',
        'md',
        'ru',
        'tj',
        'tm',
        'ua',
        'ussr',
        'uz'
    ])
    const [usedCards, setUsedCards] = useState([])
	const [currentScore, setCurrentScore] = useState(0)
	const [highScore, setHighScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)

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
        document.title = 'Memory Game'
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
                <Card key = {uniqid()} file = {state} click = {checkNewCard} />
            )
        }
        return cardElements
    }

    const endGame = () => {
        newGame()
        setGameOver(true)
        setTimeout(() => {
            setGameOver(false)
        }, 2000);
    }

    return(
        <div className = 'gamearea'>
            <header>
                <p>Current Score: {currentScore}</p>
                <p>MEMORY GAME</p>
                <p>High Score: {highScore}</p>
            </header>
            {gameOver
                ?   <div className = 'gameover'>GAME OVER</div>
                :   <div className = 'gameboard'>
                        {collectCards()}
                    </div>
            }
            <Button task = {newGame} label = 'New Game' />
        </div>
    )
}

export default GameArea