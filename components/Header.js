import { View, Text } from 'react-native'
import React from 'react'

export default function Header(props) {
  console.log(props);
  console.log(props.appName);
  return (
    <View>
      <Text>Welcome to {props.appName}</Text>
    </View>
  )
}