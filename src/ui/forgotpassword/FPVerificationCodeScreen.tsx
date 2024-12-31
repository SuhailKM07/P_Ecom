import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { Icon } from 'react-native-basic-elements';
import { screenHeight, screenWidth } from '../Dimensions/dimensionsfile';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigationTypeChecking } from '../navigation/NavigationTypes';

type FPVerificationCodeScreenProps = NativeStackScreenProps<navigationTypeChecking, 'FPVerificationCodeScreen'>

const FPVerificationCodeScreen: React.FC<FPVerificationCodeScreenProps> = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleInputChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = text;
      setOtp(updatedOtp);


      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (text === '') {
      const updatedOtp = [...otp];
      updatedOtp[index] = '';
      setOtp(updatedOtp);
    }
  };
  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join('');
    if (code.length === otp.length) {
      console.log('OTP Submitted:', code);
    }
  };

  useEffect(() => {
    if (!otp.includes('')) {
      navigation.navigate('CreateNewPass')
    }
  }, [otp])

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: screenWidth * 5,
          paddingVertical: screenHeight * 3,
        }}
      >
        <StatusBar
          translucent
          backgroundColor="rgba(255, 255, 255, 0)"
          barStyle={'dark-content'}
        />
        <View
          style={{
            justifyContent: 'space-evenly',
            height: screenHeight * 60,
          }}
        >
          <Pressable
            style={{
              backgroundColor: 'white',
              width: screenWidth * 8,
              height: screenWidth * 8,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              elevation: 2,
              marginTop: screenHeight * 2
            }}
            onPress={() => {
              navigation.pop()
            }}
          >
            <Icon
              name="chevron-left"
              type="Octicons"
              color={'#1e3354'}
              size={screenWidth * 5}
              style={{
                width: screenWidth * 2,
              }}
            />
          </Pressable>

          <View
            style={{
              height: screenHeight * 33,
              justifyContent: 'space-around',
            }}
          >
            <View
              style={{
                gap: screenHeight * 2,
                height: screenHeight * 18,
                paddingTop: screenHeight * 1,
              }}
            >
              <Text
                style={{
                  fontFamily: 'RedHatDisplay-Bold',
                  fontSize: screenWidth * 7,
                }}
              >
                Verification code
              </Text>
              <Text
                style={{
                  fontFamily: 'RedHatDisplay-Light',
                  fontSize: screenWidth * 5,
                }}
              >
                Please enter the verification code we sent to your email address.
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: screenWidth * 3
              }}
            >
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  value={value}
                  onChangeText={(text) => handleInputChange(text, index)}
                  onKeyPress={({ nativeEvent: { key } }) =>
                    handleKeyPress(key, index)
                  }
                  maxLength={1}
                  keyboardType="numeric"
                  style={styles.verificationInpStyle}
                />
              ))}
            </View>
          </View>

          <View
            style={{
              height: screenHeight * 10,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'RedHatDisplay-Light',
                fontSize: screenWidth * 3.8,
                color: '#88898f',
              }}
            >
              Resend in 00:10
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  verificationInpStyle: {
    borderColor: '#a5a7ac',
    borderWidth: 1.5,
    width: screenWidth * 17,
    height: screenWidth * 17,
    borderRadius: 50,
    textAlign: 'center',
    fontSize: screenWidth * 5,
  },
});

export default FPVerificationCodeScreen