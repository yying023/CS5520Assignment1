import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import Card from '../components/Card';

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


  // handle user guess
  function handleGuess() {
    const guess = parseInt(userGuess);

    if (guess === randomNumber) {
      setIsGameOver(true);
      setShowSadImage(false);
      setGuessCorrect(true)
    } else {
      setAttempts(prevAttempts => prevAttempts + 1);
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
            <Button title = "Logout" onPress={onLogout}/>
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
            <Text>Congratulations! You guessed the number. You guessed it in {attempts} attempts.</Text>
            <Image
            source={{ uri: `https://picsum.photos/id/${userGuess}/100/100` }}
            style={styles.image}
            />
            <Button title="New Game" onPress={restartGame} />
        </Card>
        ) : (
        <Card>
            <Text>Guess a number between 10 and 20:</Text>
            <TextInput
            style={styles.input}
            onChangeText={text => setUserGuess(text)}
            value={userGuess}
            keyboardType="numeric"
            />
            <Button title="Reset" onPress={handleReset} />
            <Button title="Confirm" onPress={handleGuess} />
        </Card>
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
    right: 20, 
  },
});

export default GameScreen;
