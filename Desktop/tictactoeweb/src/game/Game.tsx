import React, { useState, useEffect } from 'react';
import './Game.css'; 
import { Button } from '../components/Button/Button';
import { GameSquareView } from '../components/SquareView/SquareView';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Game = () => {
  const [isPlayer1, setIsPlayer1] = useState(true);
  const [gameState, setGameState] = useState(Array(9).fill(''));
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleEndGame = () => {
    setTimeout(() => {
        navigate("/Home");
      }, 1000); 
  };

  const handlePlayerMove = (position: any) => {
    if (isPlayer1) {
      setIsPlayer1(false);
    } else {
      setIsPlayer1(true);
    }
    const updatedGameState = [...gameState];
    updatedGameState[position] = isPlayer1 ? '1' : '2';
    console.log(updatedGameState)
    setGameState(updatedGameState);

    checkForWin(updatedGameState);
  };

  const checkForWin = (currentGameState: any) => {
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (
        currentGameState[a] &&
        currentGameState[a] === currentGameState[b] &&
        currentGameState[a] === currentGameState[c]
      ) {
        // Win condition is met
        showWinAlert();
        return;
      }
    }

    if (!currentGameState.includes('')) {
      // Game is a draw
      showDrawAlert();
    }
  };


  useEffect(() => {
    setMessage(isPlayer1 ? 'Player 0' : 'Player X');
  }, [isPlayer1, setIsPlayer1, gameState]);

  const showWinAlert = () => {
    setTimeout(() => {
        alert(`${message} won!`);
    }, 100); 
    handleEndGame();
  };

  const showDrawAlert = () => {
    setTimeout(() => {
        alert('The game is a draw.');
    }, 100); 
    handleEndGame();
  };

  function renderSquare(i: number) {
    return  <GameSquareView index={i} image={gameState[i] === '1' ? 'ellipse' : 'close'} key={i} onPress={() => handlePlayerMove(i)}/> 
    ;
  }

  return (
    <div className="container" data-testid="gameView">
      <div className="buttonView">
      <Button titleButton="end Game" link={'/Home'} testID="startButton" />
      </div>
      <div className="centeredContent">
        <div className="gameBoard">
        <Container>
        <Row>
            <Col>{renderSquare(0)}</Col>
            <Col>{renderSquare(1)}</Col>
            <Col>{renderSquare(2)}</Col>
        </Row>
        <Row>
            <Col>{renderSquare(3)}</Col>
            <Col>{renderSquare(4)}</Col>
            <Col>{renderSquare(5)}</Col>
        </Row>
        <Row>
            <Col>{renderSquare(6)}</Col>
            <Col>{renderSquare(7)}</Col>
            <Col>{renderSquare(8)}</Col>
        </Row>
        </Container>
        </div>
      </div>
    </div>
  );
};
export default Game;
