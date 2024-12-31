import { Pressable, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-basic-elements'
import { screenHeight, screenWidth } from '../Dimensions/dimensionsfile'
import Inputcust from '../globalComp/Inputcust'
import BtnCust from '../globalComp/BtnCust'
import { navigationTypeChecking } from '../navigation/NavigationTypes'
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type FPEmailScreenProps = NativeStackScreenProps<navigationTypeChecking, 'FPEmailScreen'>

const FPEmailScreen: React.FC<FPEmailScreenProps> = ({ navigation }) => {

    const [rePassword, setRePassword] = useState('');
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        regex.test(rePassword) ? setShowBtn(true) : setShowBtn(false)
    }, [rePassword])

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
                <View style={{
                    justifyContent: 'space-evenly',
                    height: screenHeight * 50,
                }}>
                    <Pressable
                        style={{
                            backgroundColor: 'white',
                            width: screenWidth * 8,
                            height: screenWidth * 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 50,
                            elevation: 2,
                            // marginTop : screenHeight * 4
                        }}
                        onPress={() => {
                            navigation.pop()
                        }}
                    >
                        <Icon
                            name="chevron-left"
                            type="Octicons"
                            color={'#1e3354'}
                            size={screenWidth * 5} // 23
                            style={{
                                width: screenWidth * 2,
                            }}
                        />
                    </Pressable>

                    <View style={{
                        gap: screenHeight * 3,
                        height: screenHeight * 20,
                        paddingTop: screenHeight * 2
                    }}>
                        <Text style={{
                            fontFamily: 'RedHatDisplay-Bold',
                            fontSize: screenWidth * 7
                        }}>
                            Forgot password?
                        </Text>
                        <Text style={{
                            fontFamily: 'RedHatDisplay-Light',
                            fontSize: screenWidth * 5
                        }}>
                            Enter email associated with your account and we’ll send and email with intructions to reset your password
                        </Text>
                    </View>

                    <Inputcust
                        placeholder='enter your email here'
                        placeholderColor='black'
                        onChangeFun={setRePassword}
                        value={rePassword}
                        keyboardType='email-address'
                        prefixIcon={
                            <Icon
                                name="mail"
                                type="Feather"
                                size={screenWidth * 4}
                                color={'#d6d6d6'}
                                style={{
                                    width: screenWidth * 5,
                                }}
                            />
                        }
                        containerStyle={{
                            flexDirection: 'row',
                            borderBottomColor: '#efeff4',
                            borderBottomWidth: 1,
                            alignItems: 'center',
                            marginTop : screenHeight * 5
                        }}
                        inputStyle={{
                            fontFamily: 'RedHatDisplay-Light',
                            flex: 1
                        }}
                    />


                </View>

                {showBtn && <View
                    style={{
                        height: screenHeight * 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}

                >
                    <BtnCust
                        buttonContent='Get verification code'
                        buttonStyle={{
                            backgroundColor: '#2D201C',
                            height: screenHeight * 6,
                            width: screenWidth * 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        }}
                        buttonTextStyle={{
                            color: 'white',
                            fontFamily: 'RedHatDisplay-SemiBold',
                            fontSize: screenWidth * 3.5
                        }}
                        onPushFun={() => {
                            navigation.navigate('FPVerificationCodeScreen')
                        }}
                    />
                </View>}

            </View>
        </ScrollView>
    )
}

export default FPEmailScreen