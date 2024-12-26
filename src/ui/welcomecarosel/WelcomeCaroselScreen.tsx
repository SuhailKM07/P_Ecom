// import { BlurView } from "@react-native-community/blur";
// import React, { useState } from "react";
// import { Image, View, StyleSheet, Dimensions, Text, Pressable, StatusBar } from "react-native";
// import Carousel from "react-native-reanimated-carousel";
// const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// const WelcomeCarouselScreen = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const carouselData = [
//         require('../../assets/images/welcomecarosel/one.png'),
//         require('../../assets/images/welcomecarosel/two.png'),
//         require('../../assets/images/welcomecarosel/three.png'),
//     ];

//     return (
//         <View style={styles.container}>

//             <StatusBar
//                 translucent
//                 backgroundColor="rgba(255, 255, 255, 0)"
//                 barStyle={'dark-content'}
//             />

//             <View style={styles.textContainer}>
//                 <Text style={styles.headingText}>Discover something new</Text>
//                 <Text style={styles.subheadingText}>Special new arrivals just for you</Text>
//             </View>

//             <View
//                 style={{
//                     height: screenHeight * 0.60,
//                     // backgroundColor : 'red'
//                 }}
//             >
//                 <Carousel
//                     autoPlay
//                     autoPlayInterval={10000}
//                     data={carouselData}
//                     width={screenWidth * 0.99}
//                     style={styles.carousel}
//                     mode="parallax"
//                     modeConfig={{
//                         parallaxScrollingScale: 0.90,
//                         parallaxScrollingOffset: 160,
//                     }}
//                     onProgressChange={(_, absoluteProgress) =>
//                         setCurrentIndex(Math.round(absoluteProgress))
//                     }
//                     renderItem={({ item, index }) => {
//                         const isActive = currentIndex === index;
//                         const imageHeight = isActive ? screenHeight * 0.55 : screenHeight * 0.4;
//                         return (
//                             <View style={styles.carouselItem}>
//                                 <Image source={item} style={[styles.image, { height: imageHeight }]} resizeMode="contain" />
//                             </View>
//                         );
//                     }}
//                 />

//                 <View style={styles.paginationContainer}>
//                     {carouselData.map((_, index) => (
//                         <View
//                             key={index}
//                             style={[
//                                 styles.paginationDot,
//                                 currentIndex === index && styles.activeDot,
//                             ]}
//                         />
//                     ))}
//                 </View>
//             </View>
//             <View
//             style = {{
//                 // backgroundColor : 'red',
//                 width:  '100%',
//                 height : screenHeight * 0.13
//             }}
//             >
//                 <View
//                     style={{
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                     }}>
//                     <View
//                         style={{
//                             width: screenWidth * 0.46,
//                             height: screenHeight * 0.07,
//                             borderRadius: 30,
//                             overflow: 'hidden',
//                             borderColor: 'white',
//                             borderWidth: 2,
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                         }}
//                     >
//                         <BlurView
//                             style={styles.blurContainer}
//                             blurType="light"
//                             blurAmount={6}
//                             reducedTransparencyFallbackColor="gray"
//                         >
//                             <Pressable
//                                 style={styles.buttonContainer}
//                                 onPress={() => console.log('Get Started pressed')}
//                             >
//                                 <Text
//                                     style={{
//                                         color: 'white',
//                                         fontSize: screenWidth * 0.037,
//                                         textAlign: 'center',
//                                         fontFamily: 'RedHatDisplay-SemiBold'
//                                     }}
//                                 >
//                                     Get Started
//                                 </Text>
//                             </Pressable>
//                         </BlurView>
//                     </View>


//                 </View>
//             </View>
//             <View
//                 style={{
//                     backgroundColor: '#464447',
//                     height: screenHeight * 0.5,
//                     width: '100%',
//                     position: 'absolute',
//                     zIndex: -1,
//                     bottom: 0
//                 }}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: "gray",
//         alignItems: "center",
//         justifyContent: "space-evenly",
//         position: "relative",
//     },
//     textContainer: {
//         alignItems: 'center',
//         gap: 15
//     },
//     headingText: {
//         fontSize: screenWidth * 0.04,
//         fontWeight: 'bold',
//         color: 'black',
//     },
//     subheadingText: {
//         fontSize: screenWidth * 0.03,
//         color: 'black',
//         marginTop: 5,
//     },
//     carousel: {
//         alignSelf: "center",
//         // backgroundColor : 'green',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     carouselItem: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: screenWidth * 0.99,
//     },
//     image: {
//         width: screenWidth * 0.99,
//         borderRadius: 15,
//     },
//     paginationContainer: {
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: 10,
//     },
//     paginationDot: {
//         width: 5,
//         height: 5,
//         borderRadius: 5,
//         backgroundColor: "#D6D6D6",
//         marginHorizontal: 5,
//     },
//     activeDot: {
//         backgroundColor: "white",
//         width: 8,
//         height: 8,
//     },
//     blurContainer: {
//         width: screenWidth * 40,
//         height: screenHeight * 7,
//         borderRadius: 10,
//         overflow: 'hidden',
//     },
//     buttonContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

// export default WelcomeCarouselScreen;










import { BlurView } from "@react-native-community/blur";
import React, { useState } from "react";
import { Image, View, StyleSheet, Text, Pressable, StatusBar, useWindowDimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { windowHeight as screenHeight , windowWidth as screenWidth } from "../Dimensions/dimensionsfile";

const WelcomeCarouselScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselData = [
        require('../../assets/images/welcomecarosel/one.png'),
        require('../../assets/images/welcomecarosel/two.png'),
        require('../../assets/images/welcomecarosel/three.png'),
    ];

    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                backgroundColor="rgba(255, 255, 255, 0)"
                barStyle={'dark-content'}
            />

            {/* Text Section */}
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Discover something new</Text>
                <Text style={styles.subheadingText}>Special new arrivals just for you</Text>
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
                            <Text style={styles.buttonText}>Get Started</Text>
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
        // justifyContent: "space-evenly",
        position: "relative",
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
        gap: 15,
        height: screenHeight * 0.15,
        // backgroundColor : 'red'
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
        width: 5,
        height: 5,
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





