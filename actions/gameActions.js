export const reset = () => ({ type: 'reset'});

export const ticTacToeAction = (index, winner) => 
  ({type: 'click', payload: {index, winner} })