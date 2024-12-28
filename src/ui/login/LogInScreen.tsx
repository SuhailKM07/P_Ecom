import { Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { screenHeight, screenWidth } from '../Dimensions/dimensionsfile';
import Inputcust from '../globalComp/Inputcust';
import BtnCust from '../globalComp/BtnCust';

export default function SignUpScreen() {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={{
            backgroundColor: 'white',
            flex: 1,
            paddingHorizontal: screenWidth * 8,
            paddingVertical: screenHeight * 5
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
                gap: screenHeight * 2,
                paddingTop: screenHeight * 5,
            }} >
                <Text style={{
                    fontSize: screenWidth * 5.5,
                    fontFamily: 'RedHatDisplay-Bold',
                }}>
                    Log into
                </Text>
                <Text
                    style={{

                        fontSize: screenWidth * 5.5,
                        fontFamily: 'RedHatDisplay-Bold',
                    }}
                >
                    your account
                </Text>
            </View>

            <View style={{
                height: screenHeight * 33,
                justifyContent: 'center',
                gap: screenHeight * 2,
                // backgroundColor : 'green'
            }}>

                <Inputcust
                    inputStyle={styles.inputStyle}
                    onChangeFun={onChangeEmail}
                    placeholder="Email address"
                    placeholderColor={'black'}
                    keyboardType="numeric"
                    value={email}
                />


                <View
                    style={{
                        gap: screenHeight * 3
                    }}
                >
                    <Inputcust
                        inputStyle={styles.inputStyle}
                        onChangeFun={onChangePassword}
                        placeholder="Password"
                        placeholderColor={'black'}
                        keyboardType="numeric"
                        value={password}
                    />
                    <Text style={{ textAlign: 'right', fontFamily: 'RedHatDisplay-Light' }} >
                        Forgot Password?
                    </Text>
                </View>

            </View>

            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // paddingTop: screenHeight * 2.5,
                    flex: 1,
                }}
            >

                <View style={{ gap: screenHeight * 2 }} >
                    <BtnCust
                        buttonContent='LOG IN'
                        buttonStyle={{
                            backgroundColor: '#2D201C',
                            height: screenHeight * 6,
                            width: screenWidth * 30,
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
                    <Text
                        style={{
                            textAlign: 'center',
                            color: '#666666',
                            fontFamily: 'RedHatDisplay-Light'
                        }}
                    >
                        or log in with
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: screenWidth * 3
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
                </View>

                <View style={{ marginBottom: screenHeight * 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{
                            width: screenWidth * 32,
                            fontFamily: 'RedHatDisplay-Medium',
                            fontSize: screenWidth * 3,
                        }}>
                            Don’t have an account?
                        </Text>
                        <Text style={{
                            width: screenWidth * 15,
                            textDecorationLine: 'underline',
                            fontFamily: 'RedHatDisplay-Medium',
                            fontSize: screenWidth * 3,
                            textDecorationStyle: 'dashed',
                            // backgroundColor : 'green',
                            textAlign: 'center'
                        }}>
                            Sign Up
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
        fontFamily: 'ProductSans-Light'
    },
    imgStyle: {
        width: screenWidth * 9,
        height: screenWidth * 9
    }
})