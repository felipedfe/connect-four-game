const getWinningMove = (position, direction) => {
  const winnerSequence = [];
  switch (direction) {
    case 'up':
      for (let i = 0; i < 4; i += 1) {
        winnerSequence.push([position[0] - i, position[1]]);
      }
      return winnerSequence;
    case 'right':
      for (let i = 0; i < 4; i += 1) {
        winnerSequence.push([position[0], position[1] + i]);
      }
      return winnerSequence;
    case 'diagonalRight':
      for (let i = 0; i < 4; i += 1) {
        winnerSequence.push([position[0] - i, position[1] + i]);
      }
      return winnerSequence;
    case 'diagonalLeft':
      for (let i = 0; i < 4; i += 1) {
        winnerSequence.push([position[0] - i, position[1] - i]);
      }
      return winnerSequence;
    default:
      return null
  };
};

const verifyUp = (position, dCMoves) => {
  for (let i = 0; i < 4; i += 1) {
    if (dCMoves.includes(JSON.stringify([position[0] - i, position[1]])) === false) {
      return false;
    }
  }
  const winningMove = getWinningMove(position, "up");
  return [true, winningMove];
}

const verifyRight = (position, dCMoves) => {
  for (let i = 0; i < 4; i += 1) {
    if (dCMoves.includes(JSON.stringify([position[0], position[1] + i])) === false) {
      return false;
    }
  }
  const winningMove = getWinningMove(position, "right");
  return [true, winningMove];
}

const verifyDiagonalRight = (position, dCMoves) => {
  for (let i = 0; i < 4; i += 1) {
    if (dCMoves.includes(JSON.stringify([position[0] - i, position[1] + i])) === false) {
      return false;
    }
  }
  const winningMove = getWinningMove(position, "diagonalRight");
  return [true, winningMove];
}

const verifyDiagonalLeft = (position, dCMoves) => {
  for (let i = 0; i < 4; i += 1) {
    if (dCMoves.includes(JSON.stringify([position[0] - i, position[1] - i])) === false) {
      return false;
    }
  }
  const winningMove = getWinningMove(position, "diagonalLeft");
  return [true, winningMove];
}

const verifyAdjacents = (moves, dCMoves) => {
  let result;
  for (let p = 0; p < moves.length; p += 1) {
    result = verifyUp(moves[p], dCMoves);
    if (result[0]) return result[1];
    result = verifyRight(moves[p], dCMoves);
    if (result[0]) return result[1];
    result = verifyDiagonalRight(moves[p], dCMoves);
    if (result[0]) return result[1];
    result = verifyDiagonalLeft(moves[p], dCMoves);
    if (result[0]) return result[1];
  }
  return false;
}

const checkWinner = (moves, deepCompareMoves) => {
  const winningMove = verifyAdjacents(moves, deepCompareMoves);
  if (winningMove) {
    return winningMove;
  }

  return false;
};

export default checkWinner;
