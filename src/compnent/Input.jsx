import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme';

const Input = props => {
  const {onChangeText, value, secureTextEntry, placeholder} = props;
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.inputStyle}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputStyle: {
    paddingHorizontal: 12,
    borderColor: COLORS.secondaryColor,
    borderWidth: 0.5,
    width: '80%',
    borderRadius: 8,
    marginVertical: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
