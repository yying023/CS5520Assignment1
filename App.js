import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import StartingScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';


export default function App(){
  const [currentScreen, setCurrentScreen] = useState('starting'); // 初始屏幕为 StartingScreen
  const [showModal, setShowModal] = useState(false);
  const makeModalVisible = () => { setShowModal(true) }
  const makeModalInvisible = () => { setShowModal(false) }
  const [showStartingScreen, setShowStartingScreen] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [userData, setUserData] = useState({});

  // 切换到 Confirm Screen
  const showConfirmScreen = () => {
    makeModalVisible();
  };

  // 切换到 Game Screen
  const showGameScreen = () => {
    console.log("showGameScreen called");
    setStartGame(true);
    setShowModal(false); // 确保在切换到Game Screen时关闭模态框
  };

  const gameContinueHandler = () => {
    setStartGame(true);
    makeModalInvisible();
  }

  const startScreenHandler = (userData) => {
    makeModalVisible()
    setUserData(userData)
  }

  const handleLogout = () => {
    // 在这里处理退出游戏的逻辑
    setStartGame(false); // 将startGame状态重置为false
    setUserData({}); // 清空用户信息
    setCurrentScreen('starting'); // 返回到StartingScreen界面
  };


  


  // let content = <StartingScreen onStartScreen={startScreenHandler}/>
  // if (showModal) {
  //   console.log("here99")
  //   content = <ConfirmScreen modal={showModal} userData={userData}
  //   onClose={() => {
  //     makeModalInvisible(); // 关闭模态框
  //   }}
  //   onContinue={() => {{gameContinueHandler}
  //     // setShowStartingScreen(false);
  //     // setShowModal(false); // 关闭模态框
  //     // // setCurrentScreen('game');
  //   }}/>
  //   console.log("here999")
  //   console.log(userData)
  // }
  // if (startGame) {
  //   content = <GameScreen />
  //   console.log("game screen showed")
  // }


  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});








//   return (
//     <View style={styles.container}>
//       {/* <StartingScreen /> */}
//       {content}
//       {/* {currentScreen === 'starting' && (
//         <StartingScreen
//           onConfirm={showConfirmScreen} // 回调函数用于切换到 Confirm Screen
//         />
//       )}
//       {currentScreen === 'confirm' && (
//         <ConfirmScreen
//           onGame={showGameScreen} // 回调函数用于切换到 Game Screen
//           setCurrentScreen={setCurrentScreen}
//         />
//       )}
//       {currentScreen === 'game' && (
//         <GameScreen />
//       )} */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


