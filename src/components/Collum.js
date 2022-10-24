import { useEffect, useState } from "react";
import Row from "./Row";
import { FaArrowAltCircleDown } from 'react-icons/fa';

function Collum(props) {
  let { index } = props;
  const { turnPlayer,
    setP1Turn,
    player1Moves,
    setPlayer1Moves,
    p1DeepCompareMoves,
    setP1DeepCompareMoves,
    player2Moves,
    setPlayer2Moves,
    p2DeepCompareMoves,
    setP2DeepCompareMoves,
    restart } = props;

  const [availableRow, setAvailableRow] = useState(5);

  const collumIndex = index;
  const rowsQuantity = [...Array(6)];

  const updatePlayerMoves = () => {
    if (turnPlayer === 'player1') {
      setPlayer1Moves([...player1Moves, [availableRow, collumIndex]]);
      setP1DeepCompareMoves([...p1DeepCompareMoves, JSON.stringify([availableRow, collumIndex])]);
    };
    if (turnPlayer === 'player2') {
      setPlayer2Moves([...player2Moves, [availableRow, collumIndex]]);
      setP2DeepCompareMoves([...p2DeepCompareMoves, JSON.stringify([availableRow, collumIndex])]);
    };
  };

  const handleInsertBtn = () => {
    if (availableRow > -1) {
      console.log(`jogador ${turnPlayer} na posição [${availableRow}, ${collumIndex}]`);
      const selectedPosition = document.getElementById(`row${availableRow}-collum${collumIndex}`);
      selectedPosition.classList.add(turnPlayer);

      updatePlayerMoves();
      setAvailableRow((prevState) => prevState - 1);
      setP1Turn((prevState) => !prevState);
    };
  };

  const renderRows = () => {
    return rowsQuantity.map((_item, index) => <Row
      key={index}
      rowIndex={index++}
      collumIndex={collumIndex}
    />)
  };

  useEffect(() => {
    setAvailableRow(5)
  }, [restart])

  return <div className={`collum collum-${index}`} >
    <button
      type="button"
      className="insert-btn"
      onClick={handleInsertBtn}>
      <FaArrowAltCircleDown />
    </button>

    {renderRows()}
  </div>
}

export default Collum;
