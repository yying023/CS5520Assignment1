import React from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

export default function ConfirmScreen({ isVisible, userData, onClose, onContinue, onGame }) {
  if (!isVisible) {
    return null; // 如果不可见，则不渲染任何内容
  }

  return (
    <Modal visible={isVisible} animationType="slide">
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>Hello {userData.name}!</Text>
                <Text>Please confirm the following information is correct by pressing the continue button.</Text>
                <Text>Name: {userData.name}</Text>
                <Text>Email: {userData.email}</Text>
                <Text>Phone: {userData.phone}</Text>

                <Button
                title="Go Back"
                onPress={() => {
                    onClose(); // 关闭模态框
                }}
                />

                <Button
                title="Continue"
                onPress={() => {
                    onContinue(); // 处理继续游戏的操作
                    onClose();
                }}
                />
            </View>
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
  card: {
    padding: 20,
    backgroundColor: 'white',
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
