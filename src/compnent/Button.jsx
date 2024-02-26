import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../theme';

const Button = ({onPress}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={styles.btnStyle}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.font,
            fontWeight: '500',
          }}>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
    marginVertical: 5,
    borderRadius: 8,
  },
});
