// src/components/Card.js
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Card = ({ question, options, correctAnswer, onAnswerSelected }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswerClick = (selectedOption) => {
    onAnswerSelected(selectedOption === correctAnswer);
    handleCardFlip();
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front of the card - Question */}
      <div className="card" onClick={handleCardFlip}>
        <p>{question}</p>
      </div>

      {/* Back of the card - Multiple choice answers */}
      <div className="card" onClick={handleCardFlip}>
        {options.map((option, index) => (
          <div key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </div>
        ))}
      </div>
    </ReactCardFlip>
  );
};

export default Card;
