import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image, } from 'react-native';
import Card from '../components/Card';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import Colors from '../components/Colors';

// GameScreen component
function GameScreen({ onLogout }) {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showSadImage, setShowSadImage] = useState(false);
  const [guessCorrect, setGuessCorrect] = useState(false);

  // generate random number function
  function generateRandomNumber() {
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  }

  function handleReset() {
    setUserGuess('');
  }

//   useEffect(() => {
//     if (userGuess !== '' && userGuess !== randomNumber) {
//       setAttempts(prevAttempts => prevAttempts + 1);
//     }
//   }, [userGuess, randomNumber]);

  // handle user guess
  function handleGuess() {
    const guess = parseInt(userGuess);

    if (guess === randomNumber) {
      setIsGameOver(true);
      setShowSadImage(false);
      setGuessCorrect(true)
    } else {
      setAttempts(prevAttempts => prevAttempts + 1);
    //   setAttempts(attempts+1);
      setShowSadImage(true);
      setIsGameOver(false);
      setGuessCorrect(false);
    }
  }

  const handleTryAgain = () => {
    setUserGuess(''); 
    setShowSadImage(false); 
  };

  // restart the game
  function restartGame() {
    setRandomNumber(generateRandomNumber());
    setUserGuess('');
    setAttempts(0);
    setIsGameOver(false);
    setShowSadImage(false); 
    setGuessCorrect(false); 
  }

  return (
    <View style={styles.container}>
        <View style={styles.logoutButtonContainer}>
            <Button title = "Logout" onPress={onLogout} color={Colors.ButtonGold}/>
        </View>
      
      {showSadImage ? (
        <Card>
             <Text>Sorry, your guess is incorrect. Please Try again!</Text>
            <Image
            source={require('../assets/smileySadFace.png')}
            style={styles.image}
            />
            <Button title="Try Again" onPress={handleTryAgain} />
        </Card>
        ) : guessCorrect ? (
        <Card>
            <Text>Congratulations! You guessed the number. You guessed it in {attempts+1} attempts.</Text>
            <Image
            source={{ uri: `https://picsum.photos/id/${userGuess}/100/100` }}
            style={styles.image}
            />
            <Button title="New Game" onPress={restartGame} />
        </Card>
        ) : (
        <>
        <Header title="Guess a number between 10 and 20:"></Header>
        <Card>
            <TextInput
                style={styles.input}
                onChangeText={text => setUserGuess(text)}
                value={userGuess}
                keyboardType="numeric" />
            <Buttons buttonLeft='Reset' buttonRight='Confirm' onPressLeft={handleReset} onPressRight={handleGuess}></Buttons>
        </Card>
        </>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
    color: 'purple',
    padding: 5,
    marginBottom: 10,
    fontSize:20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 40, 
    right: 120, 
  },
});

export default GameScreen;
