import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import ConfirmScreen from './ConfirmScreen';
import Card from '../components/Card';
import Header from '../components/Header';


export default function StartingScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [showModal, setShowModal] = useState(false);
  // const [startButtonDisabled, setStartButtonDisabled] = useState(true);
  const [showStartingScreen, setShowStartingScreen] = useState(true);


  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });


  const validateInputs = () => {
    let isValid = true;

    // Validate name
    var hasNumber = /\d/;
    if (name.length < 2 || hasNumber.test(name)) {
      setErrorName('Invalid name');
      isValid = false;
      console.log("invalid name here");
    } else {
      setErrorName('');
    }
    console.log('error name is', {errorName});

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorEmail('Invalid email');
      isValid = false;
      console.log("invalid email here");
    } else {
      setErrorEmail('');
    }
    console.log('error email is', {errorEmail});

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
      setErrorPhone('Invalid phone number');
      isValid = false;
      console.log("invalid phone herehahahaha");
      console.log('error phone is', {errorPhone});
    } else {
      setErrorPhone('');
      console.log("phone is correct");

    }
    console.log('error phone is', {errorPhone});

    if (name !== '' && email !== '' && phone !== '' && isChecked === true) {
      setUserData({
        name,
        email,
        phone,
      });
    }

    if (isValid && isChecked === true){
      setShowModal(true);
    } else {
      setShowModal(false); // 不显示模态框
    }

    props.onStartScreen({
      name,
      email,
      phone,
    });
    console.log(123)
};

  const resetInputs = () => {
    setName('');
    setEmail('');
    setPhone('');
    setIsChecked(false);
    setErrorName('');
    setErrorEmail('');
    setErrorPhone('');
    // setStartButtonDisabled(true);
  };


  const handleCheckboxChange = (value) => {
    setIsChecked(value);
  };

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
