import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Square from './components/Square';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.game}>
          <View style={styles.boardRow}>
            <Square onClick={testTap} value={"fire and blood"}/>
            <Square onClick={testTap} value={"fire and blood"}/>
            <Square onClick={testTap} value={"fire and blood"}/>
          </View>
          <View style={styles.boardRow}>
            <Square onClick={testTap} value={"fire and blood"}/>
            <Square onClick={testTap} value={"fire and blood"}/>
            <Square onClick={testTap} value={"fire and blood"}/>
          </View>
          <View style={styles.boardRow}>
            <Square onClick={testTap} value={"fire and blood"}/>
            <Square onClick={testTap} value={"fire and blood"}/>
            <Square onClick={testTap} value={"fire and blood"}/>
          </View>

          <View style={{ display: 'flex', justifyContent: "center", alignItems: 'center'}}>
            <TouchableOpacity style={{ height: 20, marginTop: 10, width: 100,justifyContent:'center', alignItems:'center', backgroundColor: 'red' }}>
              <Text>Game Status</Text> 
            </TouchableOpacity>
          </View>

          <View style={{ display: 'flex', justifyContent: "center", alignItems: 'center'}}>
            <TouchableOpacity style={{ height: 20, marginTop: 10, width: 100,justifyContent:'center', alignItems:'center', backgroundColor: 'red' }}>
              <Text>Restart</Text> 
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