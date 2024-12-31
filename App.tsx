import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from './src/ui/welcomeSection/WelcomeScreen'
import { navigationTypeChecking } from './src/ui/navigation/NavigationTypes';
import WelcomeCarouselScreen from './src/ui/welcomecarosel/WelcomeCaroselScreen';
import SignUpScreen from './src/ui/signup/SignUpScreen';
import LogInScreen from './src/ui/login/LogInScreen';
import FPEmailScreen from './src/ui/forgotpassword/FPEmailScreen';
import FPVerificationCodeScreen from './src/ui/forgotpassword/FPVerificationCodeScreen';
import CreateNewPass from './src/ui/forgotpassword/CreateNewPass';


const Stack = createNativeStackNavigator<navigationTypeChecking>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeCaroselScreen"
          component={WelcomeCarouselScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"LogInScreen"}
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"FPEmailScreen"}
          component={FPEmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"FPVerificationCodeScreen"}
          component={FPVerificationCodeScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name={"CreateNewPass"}
          component={CreateNewPass}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
