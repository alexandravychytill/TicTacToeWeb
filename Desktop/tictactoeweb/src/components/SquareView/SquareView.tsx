import React, { useState } from 'react';
import { SquareViewProps } from './SquareView.interface';
import { PlayerIndicator } from '../PlayerIndicator/PlayerIndicator';
import './SquareView.css'; 

export const GameSquareView = ({ index, image, onPress}: SquareViewProps) => {

  const [clicked, setClicked] = useState(false);

  const handlePlayerMove = () => {
    if (!clicked) {
      setClicked(true);
      onPress();
    }
  };

  return (
    <button
      className="square"
      onClick={handlePlayerMove}
      disabled={clicked}
      data-testid={`Square${index}`}
      aria-label={`${image}_${index}`}
    >
      {clicked && <PlayerIndicator systemImageName={image} />}
    </button>
  );
}