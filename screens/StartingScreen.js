import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import Card from '../components/Card';
import Header from '../components/Header';
import ConfirmScreen from './ConfirmScreen'; 
import GameScreen from './GameScreen'; 


export default function StartingScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [startGame, setStartGame] = useState(false);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });


  // Switch to Game Screen
  const showGameScreen = () => {
    setStartGame(true);
    setShowModal(false); 
  };

  const handleLogout = () => {
    setStartGame(false); 
    resetInputs();
  };


  const validateInputs = () => {
    let isValid = true;

    // Validate name
    var hasNumber = /\d/;
    if (name.length < 2 || hasNumber.test(name)) {
      setErrorName('Invalid name');
      isValid = false;
    } else {
      setErrorName('');
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorEmail('Invalid email');
      isValid = false;
    } else {
      setErrorEmail('');
    }

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
      setErrorPhone('Invalid phone number');
      isValid = false;
    } else {
      setErrorPhone('');

    }

    if (name !== '' && email !== '' && phone !== '' && isChecked === true) {
      setUserData({
        name,
        email,
        phone,
      });
    }

    if (isValid && isChecked === true){
      setShowModal(true);
      props.onStartScreen({
        name,
        email,
        phone,
      });
    } else {
      setShowModal(false); 
    }
};

  const resetInputs = () => {
    setName('');
    setEmail('');
    setPhone('');
    setIsChecked(false);
    setErrorName('');
    setErrorEmail('');
    setErrorPhone('');
  };


  const handleCheckboxChange = (value) => {
    setIsChecked(value);
  };

  if (showModal) {
    return (
      <ConfirmScreen
          isVisible={showModal}
          userData={userData}
          onClose={() => {
            setShowModal(false); 
          }}
          onContinue={() => {
            showGameScreen(); 
          }}
          setUserData={userData} 
        />
    );
  } else if (startGame) {
    return <GameScreen onLogout={handleLogout} /> 
  } else {
    return (
        <View style={styles.container}>
          <Header title="Welcome"></Header>
          <Card>
            <Text>Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setName(text)}
              value={name}
            />
            {errorName ? <Text style={styles.errorText}>{errorName}</Text> : null}

            <Text>Email:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setEmail(text)}
              value={email}
            />
            {errorEmail ? <Text style={styles.errorText}>{errorEmail}</Text> : null}

            <Text>Phone:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setPhone(text)}
              value={phone}
            />
            {errorPhone ? <Text style={styles.errorText}>{errorPhone}</Text> : null}
            <View>
              <Checkbox
                value={isChecked}
                onValueChange={handleCheckboxChange}
              />
              <Text>I am not a rebot</Text>
            </View>

            {/* <Buttons buttonLeft='Reset' buttonRight = 'Start' onPressLeft={resetInputs} onPressRight={validateInputs}> disabled={!isChecked}</Buttons> */}


            <Button
              title="Reset"
              onPress={resetInputs}
            />

            <Button
              title="Start"
              onPress={validateInputs}
              disabled={!isChecked}
            />
          </Card>
        </View>
    );
  }
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
