import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeCaroselScreen from './src/ui/welcomecarosel/WelcomeCaroselScreen'
import SignUpScreen from './src/ui/signup/SignUpScreen'
import LogInScreen from './src/ui/login/LogInScreen'
import FPEmailScreen from './src/ui/forgotpassword/FPEmailScreen'
import FPVerificationCodeScreen from './src/ui/forgotpassword/FPVerificationCodeScreen'
import CreateNewPass from './src/ui/forgotpassword/CreateNewPass'
import BTMSheet from './src/ui/forgotpassword/BTMSheet'

export default function App() {
  return (
    // <WelcomeCaroselScreen />
    // <SignUpScreen />
    // <LogInScreen />
    // <FPEmailScreen />
    // <FPVerificationCodeScreen />
    <CreateNewPass/>
    // <BTMSheet />
  )
}

const styles = StyleSheet.create({})