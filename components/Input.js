import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

const Input = ({changedHandler}) =>{
    const [enteredText, setEnteredText] = useState("");
    // update this callback handler to receive the changed text and store it in text state variable 
    function changeTextHandler(changedText){
        console.log(changedText);
        setEnteredText(changedText);
    }
    function confirmHandler(){
      // call a function that is passed to me from App.js and pass the enteredText via it
        changedHandler(enteredText);
    } 
    return (
      <View>
        {/* <Text>Input</Text> */}
        <TextInput style={styles.input} onChangeText={changeTextHandler} value={enteredText} />
        <Button title="Confirm" onPress={confirmHandler} />
      </View>
    )
}
export default Input;

const styles = StyleSheet.create({
  input:{
    borderColor:"blue",
    borderWidth: 2,
    width: 200
  },
});