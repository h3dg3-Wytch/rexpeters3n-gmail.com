import React from "react";
import { Text, StyleSheet, View } from 'react-native';
import Header from './Header';
import Square from './Square';
import RejectionButton from './RejectionButton';


function Game({ status, resetOnClick, squares, winner, ticTacToeClick }) {

    const renderSquare = index => <Square value={squares[index]} onPress={() => ticTacToeClick(index, winner)}/>

    return (
        <View style={styles.container}>
         <Header status={status}/> 
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
            <RejectionButton reset={resetOnClick}/> 
          </View>
        </View>
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
  
export default Game;