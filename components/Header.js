import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Color from './Colors'

export default function Header(props) {
  console.log(props);
  console.log(props.title);
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    alignSelf: "center",
    justifyContent: 'center',
    marginBottom:30,
    paddingTop: 22,
    paddingLeft:110 ,
    paddingRight:110 ,
    backgroundColor:Color.LipstickPink,
    width: '100%',
    height: 90,
    color:Color.Title,
    fontSize:20,
    fontWeight:'bold'
  },
});