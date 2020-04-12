import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


function Square({ value, onPress }) {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    square: {
       backgroundColor: '#add8e6',
       padding: 10,
       width: 120,
       height: 120,
       margin: 4,
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
    },
    squareText: {
        fontSize: 40,
    }
});
export default Square;