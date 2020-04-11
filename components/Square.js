import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


function Square({ value, onClick }) {
  return (
    <TouchableOpacity style={styles.square} onPress={onClick}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    square: {
       backgroundColor: '#26a69a',
       padding: 10,
       width: '136px',
       height: '136px',
       margin: '4px',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
    }
});
export default Square;