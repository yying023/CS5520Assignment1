import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';

// GameScreen component
function GameScreen({ onLogout }) {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

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
    } else {
      setAttempts(attempts + 1);
    }
  }

  // restart the game
  function restartGame() {
    setRandomNumber(generateRandomNumber());
    setUserGuess('');
    setAttempts(0);
    setIsGameOver(false);
  }

  return (
    <View style={styles.container}>
        <View style={styles.logoutButtonContainer}>
            <Button title = "Logout" onPress={onLogout}/>
        </View>
      {isGameOver ? (
        <View style={styles.card}>
          <Text>Congratulations! You guessed the number.</Text>
          <Text>Number of attempts: {attempts}</Text>
          <Image
            source={{ uri: `https://picsum.photos/id/${randomNumber}/100/100` }}
            style={styles.image}
          />
          <Button title="New Game" onPress={restartGame} />
        </View>
      ) : (
        <View style={styles.card}>
          <Text>Guess a number between 10 and 20:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setUserGuess(text)}
            value={userGuess}
            keyboardType="numeric"
          />
          <Button title="Reset" onPress={handleReset} />
          <Button title="Confirm" onPress={handleGuess} />
        </View>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 20, 
    right: 20, 
  },
});

export default GameScreen;
