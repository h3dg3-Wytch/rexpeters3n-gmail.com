import { reset, ticTacToeAction } from '../actions/gameActions';

describe('Actions', () =>  {
  it('creates a correct reset action', () => {
    expect(reset()).toEqual({ type: 'reset'})
  });
  it('creates a correct ticTacToe action', () => {
    expect(ticTacToeAction(0, null)).toEqual({ type: 'click', payload: { index: 0, winner: null}})
  });
});