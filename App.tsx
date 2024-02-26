import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LoginScreen, SignupScreens } from './src/screens'
import auth from "@react-native-firebase/auth"

const App = () => {
  return (
    <View style={{ flex: 1 }} >
      <LoginScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})