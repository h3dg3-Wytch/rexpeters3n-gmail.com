import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Square from './components/Square';
import RejectionButton from './components/RejectionButton';
import Header from './components/Header'

import { reducer, initialState, getWinner, isBoardFull, getStatus } from './reducer/gridReducer';

import { ticTacToeAction, reset } from './actions/gameActions';
import Game from './components/Game';

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const resetOnClick = () => reset(dispatch);
  const ticTacToeClick = (index, winner) => ticTacToeAction(dispatch, index, winner);

  const { squares, isCurrentlyX } = state;
  const winner = getWinner(squares);
  const boardFull = isBoardFull(squares);
  const status = getStatus(winner, boardFull, isCurrentlyX);

  return (
    <Game status={status} resetOnClick={resetOnClick} squares={squares} ticTacToeClick={ticTacToeClick} winner={winner} />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  game: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  boardRow: {
    flexDirection: 'row'
  },
  gameStatus: {
    marginTop: 20,
    width: '30%',
    color: 'red'
  },
  restartButton: { 
    height: 20,
    marginTop: 10,
    width: 100,
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor: 'red' 
  },
});
