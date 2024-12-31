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
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigationTypeChecking } from '../navigation/NavigationTypes';


// Define the props for WelcomeScreen
type WelcomeScreenProps = NativeStackScreenProps<navigationTypeChecking, 'WelcomeScreen'>;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ route, navigation }) => {
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
                        style={{
                            // backgroundColor : 'red',
                            height: screenHeight * 37
                        }}
                    >
                        <View
                            style={{
                                height: screenHeight * 22,
                                width: screenWidth * 100,
                                // backgroundColor: 'gray',
                                alignContent: 'center',
                                justifyContent: 'space-between',

                            }}
                        >
                            <View
                                style={{
                                    gap: screenHeight * 1.5
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: screenWidth * 7,
                                        textAlign: 'center',
                                        fontFamily: 'RedHatDisplay-Medium',
                                        fontWeight: 700
                                    }}
                                >
                                    Welcome to GemStore!
                                </Text>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: screenWidth * 4.8,
                                        textAlign: 'center',
                                        fontFamily: 'RedHatDisplay-Medium',
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
                                        width: screenWidth * 46,
                                        height: screenHeight * 6,
                                        borderRadius: 30,
                 
                                        overflow: 'hidden',
                                        borderColor: 'white',
                                        borderWidth: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <BlurView
                                        style={styles.blurContainer}
                                        blurType="light"
                                        blurAmount={5}
                                        reducedTransparencyFallbackColor="gray"
                                    >
                                        <Pressable
                                            style={styles.buttonContainer}
                                            onPress={() => navigation.navigate('WelcomeCaroselScreen')}
                                        >
                                            <Text
                                                style={{
                                                    color: 'white',
                                                    fontSize: screenWidth * 3.5,
                                                    textAlign: 'center',
                                                    fontFamily : 'RedHatDisplay-Medium'
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
        width: '100%',
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

export default WelcomeScreen