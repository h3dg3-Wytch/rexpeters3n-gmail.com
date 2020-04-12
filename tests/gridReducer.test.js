import { reducer, initialState } from '../reducer/gridReducer';

describe('Reducer', () =>  {

    
    it('matches initialState', () => {
        expect(reducer(initialState, { type: 'foo'})).toEqual(initialState);
    });
});