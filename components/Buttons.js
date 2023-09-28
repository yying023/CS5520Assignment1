import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "./Colors";


export default function Buttons(props) {
  return (
    <View style={styles.buttons}>
      <Button
        title={props.buttonLeft}
        color={Colors.ButtonRed}
        onPress={props.onPressLeft}
      />
      <Button
        title={props.buttonRight}
        color={Colors.ButtonBlue}
        onPress={props.onPressRight}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    alignSelf: "center",
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 25,
    width: 280,
  },
});