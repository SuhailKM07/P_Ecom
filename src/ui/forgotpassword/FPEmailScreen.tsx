import { Pressable, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-basic-elements'
import { screenHeight, screenWidth } from '../Dimensions/dimensionsfile'
import Inputcust from '../globalComp/Inputcust'

export default function FPEmailScreen() {

    const [rePassword, setRePassword] = useState('')

    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    paddingHorizontal: screenWidth * 5,
                    paddingVertical: screenHeight * 3
                }}
            >

                <StatusBar
                    translucent
                    backgroundColor="rgba(255, 255, 255, 0)"
                    barStyle={'dark-content'}
                />
                <View style={{
                    justifyContent: 'space-evenly',
                    height: screenHeight * 40
                }}>
                    <Pressable
                        style={{
                            backgroundColor: 'white',
                            width: screenWidth * 8,
                            height: screenWidth * 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 50,
                            elevation: 2
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
                        paddingTop : screenHeight * 2
                    }}>
                        <Text style={{
                            fontFamily: 'RedHatDisplay-Bold',
                            fontSize: screenWidth * 5
                        }}>
                            Forgot password?
                        </Text>
                        <Text style={{
                            fontFamily: 'RedHatDisplay-Light',
                            fontSize: screenWidth * 3.5
                        }}>
                            Enter email associated with your account and we’ll send and email with intructions to reset your password
                        </Text>
                    </View>

                    <Inputcust
                        placeholder='enter your email here'
                        placeholderColor='black'
                        onChangeFun={setRePassword}
                        value={rePassword}
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
                        }}
                        inputStyle={{
                            fontFamily: 'RedHatDisplay-Light',
                            flex : 1
                        }}
                    />


                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})