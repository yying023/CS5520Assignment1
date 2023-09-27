import { View, StyleSheet } from 'react-native'
import React from 'react'
import Colors from './Colors';

export default function Card(props) {

  return (
    <View style={styles.card}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        padding: 80,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 3,
      },
});