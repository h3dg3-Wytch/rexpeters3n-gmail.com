import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';


function RejectionButton({ restart }) {
  return (
    <View style={styles.rejectContainer}>
            <TouchableOpacity style={styles.rejectButton}>
              <Text onPress={restart}>Restart</Text> 
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    rejectButton: { 
      height: 40, 
      marginTop: 10, 
      width: 100,
      justifyContent:'center', 
      alignItems:'center', 
      backgroundColor: 'red', 
      borderRadius: '24px' },
    rejectContainer: {
      display: 'flex', 
      justifyContent: "center", 
      alignItems: 'center'  
    }
});
export default RejectionButton;