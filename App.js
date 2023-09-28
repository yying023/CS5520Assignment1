import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import StartingScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './components/Colors';


export default function App(){
  const [currentScreen, setCurrentScreen] = useState('starting'); // 初始屏幕为 StartingScreen
  const [showModal, setShowModal] = useState(false);
  const makeModalVisible = () => { setShowModal(true) }
  const makeModalInvisible = () => { setShowModal(false) }
  const [startGame, setStartGame] = useState(false);
  const [userData, setUserData] = useState({});


  // 切换到 Confirm Screen
  const showConfirmScreen = () => {
    makeModalVisible();
  };

  // 切换到 Game Screen
  const showGameScreen = () => {
    setStartGame(true);
    setShowModal(false); // 确保在切换到Game Screen时关闭模态框
  };

  const handleLogout = () => {
    // 在这里处理退出游戏的逻辑
    setStartGame(false); // 将startGame状态重置为false
    setUserData({}); // 清空用户信息
    setCurrentScreen('starting'); // 返回到StartingScreen界面
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
      {showModal ? (
        <ConfirmScreen
          isVisible={showModal}
          userData={userData}
          onClose={() => {
            setShowModal(false); // 关闭模态框
          }}
          onContinue={() => {
            // 处理继续游戏的操作
            showGameScreen(); // 启动游戏
          }}
          setUserData={userData} 
        />
      ) : startGame ? (
        <GameScreen onLogout={handleLogout} /> 
      ) : (
        <StartingScreen
          onStartScreen={(userData) => {
            setUserData(userData);
            showConfirmScreen(); // 切换到 Confirm Screen
          }}
        />
      )}
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


