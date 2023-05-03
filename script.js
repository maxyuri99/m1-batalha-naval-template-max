// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

function allocateShips(shipPositions, initialBoard) {
  for (let i = 0; i < shipPositions.length; i++) {
    const [shipLine, shipColumn] = shipPositions[i];
    initialBoard[shipLine][shipColumn] = "S";
  }
  return initialBoard;
}

function checkGuesses(guesses, mountedBoard) {
  for (let i = 0; i < guesses.length; i++) {
    const [guessesLine, gessesColumn] = guesses[i];
    if (mountedBoard[guessesLine][gessesColumn] === "S") {
      mountedBoard[guessesLine][gessesColumn] = "X";
    }
  }
  return mountedBoard;
}

function checkWinCondition(guessedBoard) {
  for (let i = 0; i < guessedBoard.length; i++) {
    for (let j = 0; j < guessedBoard[i].length; j++) {
      if (guessedBoard[i][j] === "S") {
        return false;
      }
    }
  }
  return true;
}