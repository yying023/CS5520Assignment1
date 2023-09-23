import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';


export default function App() {
  const name = "yingying";
  const arr = useState("");
  const [text, setText] = useState("");
  const [enteredText, setEnteredText] = useState("");
  console.log(arr);
  // update this callback function to receive the changed text
  function changeTextHandler(changedText){
    console.log("callback function called");
    console.log(changedText);
    setText(changedText);
  }

  function changedDataHandler(data){
    console.log("callback function called", data);
    setText(data);
  }
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app on {name}!</Text> */}
      <Header appName={name}/>
      <StatusBar style="auto" />
      {/* <TextInput style={styles.input} onChangeText={changeTextHandler} value={text} placeholder='hello'/> */}
      <Input changedHandler={changedDataHandler}/>
      {/* <Input changeHandler={props.changeHandler}/>???? */}
      {/* {inside this text show what user to typing} */}
      <Text>{text}123</Text>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
