import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from '../compnent';
import {COLORS} from '../theme';
import auth from '@react-native-firebase/auth';

const SignupScreens = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User account created');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signUpText}>Sign Up Screen</Text>
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
      <Button onPress={onPress} />
    </View>
  );
};

export default SignupScreens;

const styles = StyleSheet.create({
  signUpText: {
    color: COLORS.black,
    fontWeight: '500',
    textAlign: 'center',
  },
  container: {
    top: '25%',
    marginTop: 10,
    gap: 10,
  },
});
