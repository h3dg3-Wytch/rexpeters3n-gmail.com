import React, { useState, setState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Square from './components/Square';

export default function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isCurrentlyX, setIsCurrentlyX] = useState(true);

  const renderSquare = index => <Square value={squares[index]} onClick={() => xClick(index)}/>

  const xClick = index => {
    if (squares[index] != null || winner != null) {
      return;
    }
    const updatedSquares = squares.slice();
    updatedSquares[index] =  isCurrentlyX ? 'X' : 'O'; 
    setSquares(updatedSquares);
    setIsCurrentlyX(!isCurrentlyX);
  }

  const calculateWinner = squares => {
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

  function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }


  function getStatus() {
    if (winner) {
      return "Winner: " + winner;
    } else if (isBoardFull(squares)) {
      return "Draw!";
    } else {
      return "Next player: " + (isCurrentlyX ? "X" : "O");
    }
  }

  const restart = () => {
    setSquares(Array(9).fill(null));
    setIsCurrentlyX(true);
  }

  const winner = calculateWinner(squares);

  return (
    <View style={styles.container}>
      <View style={styles.game}>
          <View style={styles.boardRow}>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </View>
          <View style={styles.boardRow}>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </View>
          <View style={styles.boardRow}>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </View>

          <View style={{ display: 'flex', justifyContent: "center", alignItems: 'center'}}>
            <Text>{getStatus()}</Text>
          </View>

          <View style={{ display: 'flex', justifyContent: "center", alignItems: 'center'}}>
            <TouchableOpacity style={{ height: 20, marginTop: 10, width: 100,justifyContent:'center', alignItems:'center', backgroundColor: 'red' }}>
              <Text onPress={restart}>Restart</Text> 
            </TouchableOpacity>
          </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  game: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column'
  },
  boardRow: {
    flexDirection: 'row'
  },
  gameStatus: {
    marginTop: '20px',
    width: '30%',
    color: 'red'
  }


});


const testTap = () => alert('valar');