import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-reanimated/lib/typescript/Animated'

export default function Temp() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'red'
            }}
        >
            <View>
                <View>
                    <Text>
                        Discover something new
                    </Text>
                    <Text>
                        Special new arrivals just for you
                    </Text>
                </View>
                <View>
                    <Image source={require('../../assets/images/welcomecarosel/one.png')} resizeMode="cover" />
                </View>
                <Pressable>
                    <Text>
                        Shopping now
                    </Text>
                </Pressable>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})