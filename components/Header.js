import React from "react";
import { Text, StyleSheet, View } from 'react-native';


function Header({ status }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 4,
  },
  headerText: {
    fontSize:40 
  }
});

export default Header;