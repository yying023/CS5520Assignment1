import { View, StyleSheet } from 'react-native'
import React from 'react'
import Colors from './Colors';
import { Dimensions } from 'react-native';

export default function Card(props) {

  return (
    <View style={styles.card}>
      {props.children}
    </View>
  )
}

const screenWidth = Dimensions.get('window').width;

const cardWidth = screenWidth * 0.8;

const styles = StyleSheet.create({
    card: {
        width: cardWidth,
        padding: 60,
        backgroundColor: 'lightblue',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 8,
      },
});