import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import StartingScreen from './screens/StartingScreen';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './components/Colors';


export default function App(){
  const [showModal, setShowModal] = useState(false);
  const makeModalVisible = () => { setShowModal(true) }
  const makeModalInvisible = () => { setShowModal(false) }
  const [userData, setUserData] = useState({});

  // Switch to Confirm Screen
  const showConfirmScreen = () => {
    makeModalVisible();
  };


  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[
          Colors.Top,
          Colors.Bottom,
         ]}
        style={styles.background}
      />
      <StartingScreen
          onStartScreen={(userData) => {
            setUserData(userData);
            showConfirmScreen(); // Switch to Confirm Screen
          }}
        />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
});


