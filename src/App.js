import { useState, useEffect } from 'react';
import Collum from './components/Collum';
import checkWinner from "./helpers/checkWinner";
import './App.css';

function App() {
  const [p1Turn, setP1Turn] = useState(true);
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [p1DeepCompareMoves, setP1DeepCompareMoves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [p2DeepCompareMoves, setP2DeepCompareMoves] = useState([]);
  const [turnPlayer, setTurnPlayer] = useState('player1');
  const [restart, setRestart] = useState(false);
  const [winner, setWinner] = useState('');

  const collumsQuantity = [...Array(7)];

  const renderGameBoard = () => {
    return collumsQuantity.map((_item, index) => <Collum
      key={index}
      index={index}
      turnPlayer={turnPlayer}
      setP1Turn={setP1Turn}
      player1Moves={player1Moves}
      setPlayer1Moves={setPlayer1Moves}
      p1DeepCompareMoves={p1DeepCompareMoves}
      setP1DeepCompareMoves={setP1DeepCompareMoves}
      player2Moves={player2Moves}
      setPlayer2Moves={setPlayer2Moves}
      p2DeepCompareMoves={p2DeepCompareMoves}
      setP2DeepCompareMoves={setP2DeepCompareMoves}
      restart={restart}
    />)
  };

  const restartGame = () => {
    const rows = document.querySelectorAll(".row");
    for (let row of rows) {
      if (row.classList.contains("player1")) row.classList.remove("player1");
      if (row.classList.contains("player2")) row.classList.remove("player2");
      if (row.classList.contains("winner")) row.classList.remove("winner")
    };

    setPlayer1Moves([]);
    setP1DeepCompareMoves([]);
    setPlayer2Moves([]);
    setP2DeepCompareMoves([]);
    setWinner('');
    setP1Turn(true);
    setRestart((prevState) => !prevState);
  }

  const includesWinnerClass = (winnerSequence) => {
    for (let i = 0; i < 4; i += 1) {
      const position = document
        .getElementById(`row${winnerSequence[i][0]}-collum${winnerSequence[i][1]}`);
      position.classList.add('winner');
    };
  };

  useEffect(() => {
    if (turnPlayer === 'player1') {
      const winner = checkWinner(player1Moves, p1DeepCompareMoves);
      if (winner) {
        setWinner(turnPlayer)
        includesWinnerClass(winner)
      }
    };
    if (turnPlayer === 'player2') {
      const winner = checkWinner(player2Moves, p2DeepCompareMoves);
      if (winner) {
        setWinner(turnPlayer)
        includesWinnerClass(winner)
      }
    };
  }, [player1Moves, player2Moves, p1DeepCompareMoves, p2DeepCompareMoves, turnPlayer]);

  useEffect(() => {
    if (p1Turn) {
      setTurnPlayer('player1')
    } else {
      setTurnPlayer('player2')
    }
  }, [p1Turn]);

  return <main>
    <h1 className="title">Connect Four</h1>
    <div className="info-container">
      {winner ?
        <div className="player-info">
          <p>{`${winner} wins!`}</p>
        </div>
        :
        <div className="player-info players-turn-container">
          <p>{`${turnPlayer}'s turn`}</p>
          <div
            className={`player-icon ${turnPlayer === 'player1' ? 'player1-icon' : 'player2-icon'}`}
          />
        </div>}
    </div>
    <div className="gameboard">
      {renderGameBoard()}
    </div>
    <button
      className="restart-btn"
      type="button"
      onClick={restartGame}
    >Restart
    </button>
  </main>
}

export default App;
