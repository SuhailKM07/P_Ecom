import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { screenHeight, screenWidth } from '../Dimensions/dimensionsfile';
import Inputcust from '../globalComp/Inputcust';
import BtnCust from '../globalComp/BtnCust';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigationTypeChecking } from '../navigation/NavigationTypes';

// Define the props for WelcomeScreen
type WelcomeScreenProps = NativeStackScreenProps<navigationTypeChecking, 'SignUpScreen'>;

const SignUpScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {

  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [conPassword, onChangeConPassword] = useState('');

  return (

    <View style={{
      backgroundColor: 'white',
      flex: 1,
      paddingHorizontal: screenWidth * 7,
      paddingVertical: screenHeight * 5,

    }}>

      <StatusBar
        translucent
        backgroundColor="rgba(255, 255, 255, 0)"
        barStyle={'dark-content'}
      />

      <View style={{
        height: screenHeight * 18,
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: screenHeight * 1.5,
        paddingTop: screenHeight * 5,
      }} >
        <Text style={{
          fontSize: screenWidth * 7.4,
          fontFamily: 'RedHatDisplay-Bold',
        }}>
          Create
        </Text>
        <Text
          style={{

            fontSize: screenWidth * 7.4,
            fontFamily: 'RedHatDisplay-Bold',
          }}
        >
          your account
        </Text>
      </View>

      <View style={{
        height: screenHeight * 40,
        justifyContent: 'space-evenly',
      }}>

        <Inputcust
          inputStyle={styles.inputStyle}
          onChangeFun={onChangeName}
          placeholder="Enter your name"
          placeholderColor={'black'}
          keyboardType="default"
          value={name}
        />


        <Inputcust
          inputStyle={styles.inputStyle}
          onChangeFun={onChangeEmail}
          placeholder="Email address"
          placeholderColor={'black'}
          keyboardType="email-address"
          value={email}
        />


        <Inputcust
          inputStyle={styles.inputStyle}
          onChangeFun={onChangePassword}
          placeholder="Password"
          placeholderColor={'black'}
          keyboardType="default"
          value={password}
        />


        <Inputcust
          inputStyle={styles.inputStyle}
          onChangeFun={onChangeConPassword}
          placeholder="Confirm password"
          placeholderColor={'black'}
          keyboardType="default"
          value={conPassword}
        />

      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingTop: screenHeight * 2.5
        }}
      >

        <BtnCust
          buttonContent='SIGN UP'
          buttonStyle={{
            backgroundColor: '#2D201C',
            height: screenHeight * 6,
            width: screenWidth * 39,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25
          }}
          buttonTextStyle={{
            color: 'white',
            fontFamily: 'RedHatDisplay-SemiBold',
            fontSize: screenWidth * 3.5
          }}
        />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: screenHeight * 25,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: '#666666',
              fontFamily: 'RedHatDisplay-Light'
            }}
          >
            or sign up with
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: screenWidth * 5
            }}
          >
            <Image
              source={require('../../assets/images/signup/apple.png')}
              style={[styles.imgStyle]}
            />
            <Image
              source={require('../../assets/images/signup/google.png')}
              style={[styles.imgStyle]}
            />
            <Image
              source={require('../../assets/images/signup/facebook.png')}
              style={[styles.imgStyle]}
            />

          </View>
          <View style={{ marginTop: screenHeight * 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
            <Text style={{
              width: screenWidth * 42,
              fontFamily: 'RedHatDisplay-Medium',
              fontSize: screenWidth * 4,
            }}>
              Already have account?
            </Text>
            <Text style={{
              width: screenWidth * 12,
              textDecorationLine: 'underline',
              fontFamily: 'RedHatDisplay-Medium',
              fontSize: screenWidth * 4,
              textDecorationStyle: 'dashed',
            }}
              onPress={() => {
                navigation.navigate('LogInScreen')
              }}
            >
              Log In
            </Text>
          </View>
        </View>

      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    fontFamily: 'ReadHatDisplay-Light'
  },
  imgStyle: {
    width: screenWidth * 12,
    height: screenWidth * 12
  }
})

export default SignUpScreen
