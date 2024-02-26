import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../theme';
import auth from '@react-native-firebase/auth';
import {Button, Input} from '../compnent';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        Alert.alert('Login Successfully');
        console.log(response, 'response');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
            Alert.alert('Password does not match');
          console.log(error);
          console.log('Error', error.message);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login Screen</Text>
      <Input
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <Input
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={onPress} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginText: {
    color: COLORS.black,
    fontWeight: '500',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
});
