import React from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Buttons from '../components/Buttons';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../components/Colors';

export default function ConfirmScreen({ isVisible, userData, onClose, onContinue, setUserData }) {
  if (!isVisible) {
    return null; 
  }

  return (
    <Modal visible={isVisible} animationType="slide">
        <LinearGradient
        colors={[
          Colors.Top,
          Colors.Bottom,
         ]}
        style={styles.background}
      />
        <View style={styles.container}>
            <Card>
                <Text>Hello {userData.name}!</Text>
                <Text>Please confirm the following information is correct by pressing the continue button.</Text>
                <View>
                    <Text style={styles.userInfo}>Name: {userData.name}</Text>
                    <Text style={styles.userInfo}>Email: {userData.email}</Text>
                    <Text style={styles.userInfo}>Phone: {userData.phone}</Text>
                </View>
                
                {/* <Buttons buttonLeft='Go Back' buttonRight = 'Confirm' onPressLeft={onClose()} onPressRight={() => {
                    onContinue(); // 处理继续游戏的操作
                    onClose();
                }}></Buttons> */}

                <Button
                title="Go Back"
                onPress={() => {
                    onClose(); 
                }}
                />

                <Button
                title="Continue"
                onPress={() => {
                    onContinue(); 
                    onClose();
                }}
                />
            </Card>
        </View> 
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    color: 'darkred',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
});
