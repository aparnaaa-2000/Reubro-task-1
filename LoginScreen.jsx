// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username && password) {
      // Store data in AsyncStorage
      try {
        await AsyncStorage.setItem('userData', JSON.stringify({ username, password }));
        Alert.alert('Login Successful');
        navigation.navigate('Dashboard');
      } catch (e) {
        console.log(e);
        Alert.alert('Error storing data');
      }
    } else {
      Alert.alert('Please enter both fields');
    }
  };

  return (
    <View style={{ padding: 20 , flex:2, alignContent:'center'}}>
      <Text>Username</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
