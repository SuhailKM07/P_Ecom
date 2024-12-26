import {
    ImageBackground,
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { screenHeight, screenWidth } from '../Dimensions/dimensionsfile';

export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent
                backgroundColor="rgba(255, 255, 255, 0)"
                barStyle={'dark-content'}
            />
            <ImageBackground
                source={require('../../assets/images/welcomeSection/welmain.png')}
                resizeMode="cover"
                style={styles.imageBackground}
            >
                <View style={styles.content}>
                    <View
                    style = {{
                        // backgroundColor : 'red',
                        height : screenHeight * 42
                    }}
                    >
                        <View
                            style={{
                                height: screenHeight * 38,
                                width: screenWidth * 100,
                                // backgroundColor: 'gray',
                                alignContent: 'center',
                                justifyContent: 'space-evenly',

                            }}
                        >
                            <View
                            style = {{
                                gap : 15
                            }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: screenWidth * 5.5,
                                        textAlign: 'center',
                                        fontFamily: 'Georama_Condensed-SemiBold',
                                        fontWeight : 700
                                    }}
                                >
                                    Welcome to GemStore!
                                </Text>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: screenWidth * 4,
                                        textAlign: 'center',
                                        fontFamily: 'Georama_Condensed-Medium',
                                    }}
                                >
                                    The home for a fashionista
                                </Text>
                            </View>
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <View
                                    style={{
                                        width: screenWidth * 40,
                                        height: screenHeight * 7,
                                        borderRadius: 30,
                                        overflow: 'hidden',
                                        borderColor : 'white',
                                        borderWidth : 2,
                                        alignItems : 'center',
                                        justifyContent : 'center'
                                    }}
                                >
                                    <BlurView
                                        style={styles.blurContainer}
                                        blurType="light"
                                        blurAmount={3}
                                        reducedTransparencyFallbackColor="gray"
                                    >
                                        <Pressable
                                            style={styles.buttonContainer}
                                            onPress={() => console.log('Get Started pressed')}
                                        >
                                            <Text
                                                style={{
                                                    color: 'white',
                                                    fontSize: screenWidth * 4,
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Get Started
                                            </Text>
                                        </Pressable>
                                    </BlurView>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    blurContainer: {
        width: screenWidth * 40,
        height: screenHeight * 7,
        borderRadius: 10,
        overflow: 'hidden',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
