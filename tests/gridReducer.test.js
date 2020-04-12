import { reducer, initialState, getWinner, getCurrentSymbol, getStatus, isBoardFull } from '../reducer/gridReducer';

describe('Reducer', () =>  {
    
    const defaultState = {
        squares: Array(9).fill(null),
        isCurrentlyX: true
    };

    const exampleSquares = [
        'X', '0', 'X',
        null, null, null,
        null, null, null
    ];

    const drawSqaures = [
        'O', 'O', 'X',
        'X', 'X', 'O',
        'O', 'X', 'X'
    ];

    const winningSquares = [
        'X', 'O', 'X',
        'O', 'X', 'O',
        'X', null, null
    ];

    const exampleState = squareConfiguration => ({
        squares: squareConfiguration,
        isCurrentlyX: true
    });

    const updatedState = {
        squares: [
          'X',  '0',  'X',
          null, null, null,
          null, null, 'X'
        ],
        isCurrentlyX: false
      }

    it('matches initialState', () => {
        expect(reducer(initialState, { type: 'foo' } )).toEqual(defaultState);
    });

    it('matches initialState on reset', () => {
        expect(reducer(exampleState(exampleSquares), {type: 'reset'})).toEqual(initialState);
    });
     
    it('updates square on click', () => {
        expect(reducer(exampleState(exampleSquares),
          { type: 'click',
            payload: { index: 8, winner: null}
          })).toEqual(updatedState);
    });

    it('can determine the correct symbol', () => {
        expect(getCurrentSymbol(true)).toEqual('X');
        expect(getCurrentSymbol(false)).toEqual('O');
    });

    it('can determine winning symbol', () => {
        expect(getWinner(winningSquares)).toEqual('X');
        expect(getWinner(exampleSquares)).toEqual(null);
    });

    it('can determine if it is a draw', () => {
        expect(isBoardFull(drawSqaures)).toEqual(true);
        expect(isBoardFull(exampleSquares)).toEqual(false);
    });

    it('can get the correct status', () => {
        expect(getStatus(null, false, false)).toEqual('Current player: O');
        expect(getStatus(null, false, true)).toEqual('Current player: X');
        expect(getStatus(null, true, true)).toEqual('Draw');
        expect(getStatus('X', true, true)).toEqual('Winner: X');
    });

});