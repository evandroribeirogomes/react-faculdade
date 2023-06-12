import React, { useState, useEffect } from 'react';
import { MdPets } from 'react-icons/md';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

const pokemons = [
  'bulbasaur', 'charmander', 'squirtle', 'pikachu',
  'jigglypuff', 'meowth', 'psyduck', 'snorlax',
  'eevee', 'magikarp', 'charizard', 'blastoise'
];

const difficulties = {
  easy: 5,
  medium: 8,
  hard: 12
};

export default function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [completedCards, setCompletedCards] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');
  const [score, setScore] = useState(0);

  useEffect(() => {
    const cardCount = getCardCount(difficulty);
    const shuffledCards = shuffleArray([...pokemons.slice(0, cardCount), ...pokemons.slice(0, cardCount)]);
    setCards(shuffledCards);
  }, [difficulty]);

  useEffect(() => {
    if (completedCards.length === getCardCount(difficulty)) {
      alert('Parabéns! Você ganhou o jogo!');
    }
  }, [completedCards, difficulty]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 1) {
      if (flippedCards.includes(index)) return;
      setFlippedCards([...flippedCards, index]);
      const firstCard = cards[flippedCards[0]];
      const secondCard = cards[index];
      if (firstCard === secondCard) {
        setCompletedCards([...completedCards, firstCard]);
        setScore(score + 1);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    } else {
      setFlippedCards([index]);
    }
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const resetGame = () => {
    setScore(0);
    setCompletedCards([]);
    setFlippedCards([]);
    const cardCount = getCardCount(difficulty);
    const shuffledCards = shuffleArray([...pokemons.slice(0, cardCount), ...pokemons.slice(0, cardCount)]);
    setCards(shuffledCards);
  };

  const renderCard = (index) => {
    const card = cards[index];
    const isFlipped = flippedCards.includes(index);
    const isCompleted = completedCards.includes(card);

    return (
      <div
        key={index}
        className={`card ${isFlipped ? 'flipped' : ''} ${isCompleted ? 'completed' : ''}`}
        onClick={() => handleCardClick(index)}
      >
        <div className="card-inner">
          <div className="card-front">
            <BsFillQuestionCircleFill size={40} />
          </div>
          <div className="card-back">
            {isFlipped || isCompleted ? (
              <img src={`/images/${card}.png`} alt={card} className="card-image" />
            ) : (
              <MdPets size={40} />
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderCards = () => {
    return cards.map((_, index) => renderCard(index));
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const getCardCount = (difficulty) => {
    return difficulties[difficulty];
  };

  return (
    <div className="app">
      <h1>Jogo da Memória Pokémon</h1>
      <div className="score">Pontuação: {score}</div>
      <div className="game-container">
        {renderCards()}
      </div>
      <div className="controls">
        <label>
         <h3>Nível de Dificuldade:</h3> 
          <select value={difficulty} onChange={handleDifficultyChange}>
            <option value="easy">Fácil</option>
            <option value="medium">Médio</option>
            <option value="hard">Difícil</option>
          </select>
        </label>
        <br></br><br></br>
        <button  onClick={resetGame} class="buttonjm">Reiniciar</button>
        <br></br><br></br>
      </div>
    </div>
  );
}

