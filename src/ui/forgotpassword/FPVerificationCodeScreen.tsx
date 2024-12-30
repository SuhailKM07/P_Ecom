import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { Icon } from 'react-native-basic-elements';
import { screenHeight, screenWidth } from '../Dimensions/dimensionsfile';

export default function FPVerificationCodeScreen() {
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
      // Call your API or verification logic here
    }
  };

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
            height: screenHeight * 50,
            // backgroundColor : 'gray'
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
          style = {{
            height : screenHeight * 30,
            justifyContent : 'space-around',
            // backgroundColor : 'green'
          }}
          >
            <View
              style={{
                gap: screenHeight * 2,
                height: screenHeight * 18,
                // backgroundColor: 'red',
                paddingTop: screenHeight * 3,
              }}
            >
              <Text
                style={{
                  fontFamily: 'RedHatDisplay-Bold',
                  fontSize: screenWidth * 5,
                }}
                >
                Verification code
              </Text>
              <Text
                style={{
                  fontFamily: 'RedHatDisplay-Light',
                  fontSize: screenWidth * 3.5,
                }}
                >
                Please enter the verification code we sent to your email address.
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent : 'center',
                gap : screenWidth * 3
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
              // backgroundColor : 'red'
            }}
          >
            <Text
              style={{
                fontFamily: 'RedHatDisplay-Light',
                fontSize: screenWidth * 3,
                color: '#88898f',
              }}
            >
              Resend in 00:10
            </Text>
          </View>

          {/* <Pressable
              onPress={handleSubmit}
              style={{
                marginTop: screenHeight * 2,
                backgroundColor: '#1e3354',
                paddingVertical: screenHeight * 2,
                paddingHorizontal: screenWidth * 10,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'RedHatDisplay-Bold',
                  fontSize: screenWidth * 4,
                }}
              >
                Verify
              </Text>
            </Pressable> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  verificationInpStyle: {
    borderColor: '#a5a7ac',
    borderWidth: 1.5,
    width: screenWidth * 13,
    height: screenWidth * 13,
    borderRadius: 50,
    textAlign: 'center',
    fontSize: screenWidth * 5,
  },
});
