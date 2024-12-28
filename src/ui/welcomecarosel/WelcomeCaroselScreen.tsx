// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { useSharedValue } from "react-native-reanimated";
// import Carousel from "react-native-reanimated-carousel";
// import { Dimensions } from "react-native";


// const defaultDataWith6Colors = [
//     "#B0604D",
//     "#899F9C",
//     "#B3C680",
//     "#5C6265",
//     "#F5D399",
//     "#F1F1F1",
// ];

// function WelcomeCaroselScreen() {
//     const progress = useSharedValue<number>(0);

//     return (
//         <View style={styles.container}>
//             <Carousel
//                 autoPlayInterval={2000}
//                 data={defaultDataWith6Colors}
//                 height={258}
//                 loop
//                 width={400}
//                 mode="parallax" // Change to 'default' if issues persist
//                 modeConfig={{
//                     parallaxScrollingScale: 0.9,
//                     parallaxScrollingOffset: 50,
//                 }}

//                 renderItem={({ item }) => (
//                     <View style={[styles.item, { backgroundColor: item }]}>
//                         <Text style={styles.text}>Hello!</Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     item: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 10,
//     },
//     text: {
//         color: "#fff",
//         fontSize: 20,
//     },
// });

// export default WelcomeCaroselScreen;



import { BlurView } from "@react-native-community/blur";
import React, { useState } from "react";
import { Image, View, StyleSheet, Text, Pressable, StatusBar } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { windowHeight as screenHeight, windowWidth as screenWidth } from "../Dimensions/dimensionsfile";

const WelcomeCarouselScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log('*********************************************************************')
    console.log(currentIndex)
    console.log('*********************************************************************')
    const carouselData = [
        require('../../assets/images/welcomecarosel/one.png'),
        require('../../assets/images/welcomecarosel/two.png'),
        require('../../assets/images/welcomecarosel/three.png'),
    ];

    const Data = [
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
    ]

    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                backgroundColor="rgba(255, 255, 255, 0)"
                barStyle={'dark-content'}
            />

            {/* Text Section */}
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>
                    {Data[currentIndex].headingText}
                </Text>
                <Text style={styles.subheadingText}>
                    {Data[currentIndex].subheadingText}
                </Text>
            </View>

            {/* Carousel Section */}
            <View style={styles.carouselContainer}>
                <Carousel
                    autoPlay
                    autoPlayInterval={2000}
                    data={carouselData}
                    width={screenWidth * 0.99}
                    loop={false}
                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 0.90,
                        parallaxScrollingOffset: 160,
                        // parallaxAdjacentItemScale : -0.7
                    }}
                    onProgressChange={(_, absoluteProgress) =>
                        setCurrentIndex(Math.round(absoluteProgress))}
                    renderItem={({ item, index }) => {
                        const isActive = currentIndex === index;
                        const imageHeight = isActive ? screenHeight * 0.55 : screenHeight * 0.4;
                        return (
                            <View style={styles.carouselItem}>
                                <Image source={item} style={[styles.image, { height: imageHeight }]} resizeMode="contain" />
                            </View>
                        );
                    }}
                />
                {/* Pagination Dots */}
                <View style={styles.paginationContainer}>
                    {carouselData.map((_, index) => (
                        <View
                            key={index}
                            style={[styles.paginationDot, currentIndex === index && styles.activeDot]}
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
                        blurAmount={6}
                        reducedTransparencyFallbackColor="gray"
                    >
                        <Pressable
                            style={styles.button}
                            onPress={() => console.log('Get Started pressed')}
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
        position: "relative",
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
        gap: 15,
        height: screenHeight * 0.15,
    },
    headingText: {
        fontSize: screenWidth * 0.04,
        fontWeight: 'bold',
        color: 'black',
    },
    subheadingText: {
        fontSize: screenWidth * 0.03,
        color: 'black',
        marginTop: 5,
    },
    carouselContainer: {
        height: screenHeight * 0.62,
        justifyContent: 'center',
        // backgroundColor : 'red'
    },
    carouselItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth * 0.99,
    },
    image: {
        width: screenWidth * 0.99,
        borderRadius: 15,
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    paginationDot: {
        width: 6,
        height: 6,
        borderRadius: 5,
        // backgroundColor: "#D6D6D6",
        borderColor: 'white',
        borderWidth: 1,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "white",
        width: 8,
        height: 8,
    },
    buttonContainer: {
        width: '100%',
        height: screenHeight * 0.13,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor : 'green'
    },
    buttonWrapper: {
        width: screenWidth * 0.46,
        height: screenHeight * 0.07,
        borderRadius: 30,
        overflow: 'hidden',
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blurContainer: {
        width: '100%',
        height: '100%',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: screenWidth * 0.037,
        textAlign: 'center',
        fontFamily: 'RedHatDisplay-SemiBold',
    },
    bottomBackground: {
        backgroundColor: '#464447',
        height: screenHeight * 0.5,
        width: '100%',
        position: 'absolute',
        zIndex: -1,
        bottom: 0,
    },
});

export default WelcomeCarouselScreen;

