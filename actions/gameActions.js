export const reset = dispatch => dispatch({ type: 'reset'});

export const ticTacToeAction = (dispatch, index, winner)=> {
  dispatch({ type: 'click', payload: {index, winner} })
}