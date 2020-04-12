export const initialState = {
    squares: Array(9).fill(null),
    isCurrentlyX: true
};

export function reducer(state, {type, payload}) {
  switch (type) {
    case 'reset':
      return initialState;
    case 'click':
      if (state.squares[payload.index] != null || payload.winner != null) {
        return state;
      }
      const updatedSquares = state.squares.slice();
      updatedSquares[payload.index] =  getCurrentSymbol(state.isCurrentlyX);
      return { ...state, squares: updatedSquares, isCurrentlyX: !state.isCurrentlyX };
    default:
      return state;
  }
}

export const getWinner = squares => {
    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < possibleLines.length; i++) {
      const [a, b, c] = possibleLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  export const isBoardFull = squares => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }

  export const getStatus = (winner, isBoardFull, isCurrentlyX) => {
    if (winner) {
      return "Winner: " + winner;
    } else if (isBoardFull) {
      return "Draw";
    } else {
      return "Current player: " + (isCurrentlyX ? "X" : "O");
    }
  }

  export const getCurrentSymbol = isCurrentlyX => isCurrentlyX ? 'X' : '0';