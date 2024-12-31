import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, StatusBar } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { windowHeight as screenHeight, windowWidth as screenWidth } from "../Dimensions/dimensionsfile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { navigationTypeChecking } from "../navigation/NavigationTypes";
import { BlurView } from "@react-native-community/blur";

type WelcomeCaroselScreenProps = NativeStackScreenProps<navigationTypeChecking, 'WelcomeCaroselScreen'>;

const WelcomeCarouselScreen: React.FC<WelcomeCaroselScreenProps> = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        require('../../assets/images/welcomecarosel/one.png'),
        require('../../assets/images/welcomecarosel/two.png'),
        require('../../assets/images/welcomecarosel/three.png'),
    ];

    const data = [
        {
            headingText: 'Discover something new',
            subheadingText: 'Special new arrivals just for you',
        },
        {
            headingText: 'Update trendy outfit',
            subheadingText: 'Favorite brands and hottest trends',
        },
        {
            headingText: 'Explore your true style',
            subheadingText: 'Relax and let us bring the style to you',
        },
    ];

    const animatedImageStyle = (isActive: boolean) =>
        useAnimatedStyle(() => ({
            height: withTiming(isActive ? screenHeight * 0.60 : screenHeight * 0.4),
        }));

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)" barStyle="dark-content" />

            {/* Text Section */}
            <View style={styles.textContainer}>
                <Text style={styles?.headingText}>{data[currentIndex]?.headingText}</Text>
                <Text style={styles?.subheadingText}>{data[currentIndex]?.subheadingText}</Text>
            </View>

            {/* Carousel Section */}
            <View style={styles.carouselContainer}>
                <Carousel
                    autoPlay
                    autoPlayInterval={3000}
                    data={images}
                    width={screenWidth}
                    loop={false}
                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 0.80,
                        parallaxScrollingOffset: 120,
                        parallaxAdjacentItemScale: 0.75,
                    }}
                    onProgressChange={(_, absoluteProgress) =>
                        setCurrentIndex(Math.round(absoluteProgress))
                    }
                    renderItem={({ item, index }) => {
                        const isActive = currentIndex === index;
                        return (
                            <View style={styles.carouselItem}>
                                <Animated.Image
                                    source={item}
                                    style={[styles.image, animatedImageStyle(isActive)]}
                                    resizeMode="contain"
                                />
                            </View>
                        );
                    }}
                />
                {/* Pagination Dots */}
                <View style={styles.paginationContainer}>
                    {images.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.paginationDot,
                                currentIndex === index && styles.activeDot,
                            ]}
                        />
                    ))}
                </View>
            </View>

            {/* Button Section */}
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <BlurView
                        style={styles.blurContainer}
                        blurType="light"
                        blurAmount={1}
                        reducedTransparencyFallbackColor="gray"
                    >
                        <Pressable
                            style={styles.button}
                            onPress={() => navigation.navigate('SignUpScreen')}
                        >
                            <Text style={styles.buttonText}>Shopping now</Text>
                        </Pressable>
                    </BlurView>
                </View>
            </View>

            {/* Bottom Background Section */}
            <View style={styles.bottomBackground} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
    },
    textContainer: {
        alignItems: "center",
        gap: screenHeight * 0.02,
    },
    headingText: {
        fontSize: screenWidth * 0.06,
        fontFamily: "RedHatDisplay-Bold",
        textAlign: "center",
    },
    subheadingText: {
        fontSize: screenWidth * 0.043,
        fontFamily: "RedHatDisplay-Medium",
        textAlign: "center",
    },
    carouselContainer: {
        height: screenHeight * 0.60,
        justifyContent: "center", 
    },
    carouselItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: screenWidth * 0.99,
        borderRadius: 15,
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    paginationDot: {
        width: 6,
        height: 6,
        borderRadius: 5,
        backgroundColor: "#D6D6D6",
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "white",
        width: 8,
        height: 8,
    },
    buttonContainer: {
        marginTop: screenHeight * 0.05,
        alignItems: "center",
    },
    button: {
        backgroundColor: "#747375",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    buttonText: {
        color: "white",
        fontSize: screenWidth * 0.04,
        fontFamily: "RedHatDisplay-SemiBold",
        textAlign: "center",
    },
    bottomBackground: {
        backgroundColor: '#464447',
        height: screenHeight * 0.47,
        width: '100%',
        position: 'absolute',
        zIndex: -1,
        bottom: 0,
    },
    buttonWrapper: {
        width: screenWidth * 0.56,
        height: screenHeight * 0.07,
        borderRadius: 30,
        overflow: 'hidden',
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blurContainer: {
        width: '100%',
        height: '100%',
    },
});

export default WelcomeCarouselScreen;
