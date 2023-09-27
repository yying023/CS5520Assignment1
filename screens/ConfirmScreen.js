import React from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import Card from '../components/Card';

export default function ConfirmScreen({ isVisible, userData, onClose, onContinue, setUserData }) {
  if (!isVisible) {
    return null; // 如果不可见，则不渲染任何内容
  }

  const setUserDataInConfirm = (newUserData) => {
    setUserData(newUserData); // 更新 StartingScreen 中的用户数据状态
  };

  return (
    <Modal visible={isVisible} animationType="slide">
        <View style={styles.container}>
            <Card>
                <Text>Hello {userData.name}!</Text>
                <Text>Please confirm the following information is correct by pressing the continue button.</Text>
                <Text>Name: {userData.name}</Text>
                <Text>Email: {userData.email}</Text>
                <Text>Phone: {userData.phone}</Text>

                <Button
                title="Go Back"
                onPress={() => {
                    setUserData(userData)
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
});
