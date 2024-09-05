// Dashboard.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from AsyncStorage
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data !== null) {
          setUserData(JSON.parse(data));
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    // Clear AsyncStorage
    try {
      await AsyncStorage.removeItem('userData');
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      {userData ? (
        <>
          <Text style={styles.welcomeText}>Welcome, {userData.username}!</Text>
          <Text style={styles.infoText}>Your password: {userData.password}</Text>
          {/* <View style={styles.buttonContainer}>
            <Button title="Logout" onPress={handleLogout} />
          </View> */}
        </>
      ) : (
        <Text style={styles.infoText}>No user data found</Text>
      )}
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f0f0f0', // Light background color
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333', // Dark text color
      marginBottom: 10,
      textAlign: 'center',
    },
    infoText: {
      fontSize: 18,
      color: '#555',
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonContainer: {
      marginTop: 20,
      width: '100%',
    },
  });
