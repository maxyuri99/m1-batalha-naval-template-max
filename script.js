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

function shipPositions(){

}

function initialBoard(){

}

function allocateShips(shipPositions, initialBoard) {
  for (let i = 0; i < shipPositions.length; i++) {
    const [row, col] = shipPositions[i];
    initialBoard[row][col] = "S";
  }
  return initialBoard;
}

function checkGuesses(guesses, mountedBoard) {
  for (let i = 0; i < guesses.length; i++) {
    const [row, col] = guesses[i];
    if (mountedBoard[row][col] === "S") {
      mountedBoard[row][col] = "X";
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