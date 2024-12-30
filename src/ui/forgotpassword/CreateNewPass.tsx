import React, { useRef, useState } from 'react';
import {
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';
import { Icon } from 'react-native-basic-elements';
import { screenHeight, screenWidth } from '../Dimensions/dimensionsfile';
import Inputcust from '../globalComp/Inputcust';
import BtnCust from '../globalComp/BtnCust';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function CreateNewPass() {
    const [newPassword, onChangeNewPassword] = useState('');
    const [conPassword, onChangeConPassword] = useState('');
    const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
    const [isConfPasswordVisible, setConfPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const refRBSheet = useRef<any>(null);

    const handleGesture = () => {
        refRBSheet.current?.open();
    };

    const handleConfirm = () => {
        if (newPassword !== conPassword) {
            setErrorMessage('Passwords do not match!');
        } else {
            setErrorMessage('');
            console.log('Password successfully changed');
            handleGesture();
        }
    };

    const isButtonEnabled = newPassword.trim() !== '' && conPassword.trim() !== '';

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={[styles.container, { position: 'relative', height: screenHeight * 100 }]}>
                <StatusBar hidden={true} />
                <View style={styles.innerContainer}>
                    {/* Back Button */}
                    <Pressable style={styles.backButton}>
                        <Icon
                            name="chevron-left"
                            type="Octicons"
                            color="#1e3354"
                            size={screenWidth * 5}
                        />
                    </Pressable>

                    {/* Title Section */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Create new password</Text>
                        <Text style={styles.subTitle}>
                            Your new password must be different from the previously used password.
                        </Text>
                    </View>

                    {/* Input Fields */}
                    <View style={styles.inputFieldsContainer}>
                        {/* New Password Input */}
                        <View style={styles.inputContainer}>
                            {newPassword?.length > 0 && <Text style={styles.label}>Password</Text>}
                            <Inputcust
                                inputStyle={[
                                    styles.inputStyle,
                                    (!isNewPasswordVisible && newPassword.length > 0) ? {
                                        fontSize: screenWidth * 4,
                                        fontWeight: '700',
                                        letterSpacing: 3,
                                    } : {
                                        fontSize: screenWidth * 4,
                                    }
                                ]}
                                onChangeFun={onChangeNewPassword}
                                placeholder="New Password"
                                placeholderColor="black"
                                keyboardType="default"
                                secureTextEntry={!isNewPasswordVisible}
                                value={newPassword}
                            />
                            {newPassword?.length > 0 && (
                                <Pressable
                                    onPress={() => setNewPasswordVisible(!isNewPasswordVisible)}
                                    style={styles.eyeIcon}
                                >
                                    <Image
                                        source={
                                            isNewPasswordVisible
                                                ? require('../../assets/images/newpassword/eyeopen.png')
                                                : require('../../assets/images/newpassword/eyeclose.png')
                                        }
                                        style={styles.imageStyle}
                                    />
                                </Pressable>
                            )}
                        </View>

                        {/* Confirm Password Input */}
                        <View style={styles.inputContainer}>
                            {conPassword?.length > 0 && <Text style={styles.label}>Confirm Password</Text>}
                            <Inputcust
                                inputStyle={[
                                    styles.inputStyle,
                                    (!isConfPasswordVisible && conPassword.length > 0) ? {
                                        fontSize: screenWidth * 4,
                                        fontWeight: '700',
                                        letterSpacing: 3,
                                    } : {
                                        fontSize: screenWidth * 4,
                                    },
                                ]}
                                onChangeFun={onChangeConPassword}
                                placeholder="Confirm Password"
                                placeholderColor="black"
                                keyboardType="default"
                                secureTextEntry={!isConfPasswordVisible}
                                value={conPassword}
                            />
                            {conPassword?.length > 0 && (
                                <Pressable
                                    onPress={() => setConfPasswordVisible(!isConfPasswordVisible)}
                                    style={styles.eyeIcon}
                                >
                                    <Image
                                        source={
                                            isConfPasswordVisible
                                                ? require('../../assets/images/newpassword/eyeopen.png')
                                                : require('../../assets/images/newpassword/eyeclose.png')
                                        }
                                        style={styles.imageStyle}
                                    />
                                </Pressable>
                            )}
                        </View>
                    </View>

                    {/* Error Message */}
                    {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}

                    {/* Confirm Button */}
                    <View style={styles.buttonContainer}>
                        <BtnCust
                            buttonContent="Confirm"
                            buttonStyle={{
                                height: screenHeight * 6,
                                width: screenWidth * 35,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 25,
                                backgroundColor: isButtonEnabled ? '#000000' : '#b9b9b9',
                            }}
                            buttonTextStyle={styles.buttonText}
                            onPushFun={isButtonEnabled ? handleConfirm : () => { }}
                        />
                    </View>
                </View>

                {/* Bottom Sheet */}
                <RBSheet
                    ref={refRBSheet}
                    closeOnPressMask={true}
                    customStyles={{
                        wrapper: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        container: {
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            paddingHorizontal: 20,
                            height: screenHeight * 45,
                        },
                        draggableIcon: {
                            backgroundColor: '#8c8e93',
                        },
                    }}
                    dragOnContent={true}
                    draggable={true}
                    closeDuration={0}
                    
                >
                    <View style={styles.bottomSheetContent}>
                        <View style={styles.successIconContainer}>
                            <Image
                                source={require('../../assets/images/newpassword/cngsuccess.png')}
                                style={styles.successIcon}
                            />
                        </View>
                        <Text style={styles.successMessage}>Your password has been changed</Text>
                        <Text style={styles.successSubtitle}>Welcome back! Discover now!</Text>
                        <BtnCust
                            buttonContent="Browse home"
                            buttonStyle={styles.successButton}
                            buttonTextStyle={styles.buttonText}
                            onPushFun={() => console.log('Navigating to home')} // Replace with navigation
                        />
                    </View>
                </RBSheet>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: screenWidth * 5.4,
        paddingVertical: screenHeight * 7,
    },
    innerContainer: {
        justifyContent: 'space-around',
        gap: screenHeight * 3,
    },
    backButton: {
        backgroundColor: 'white',
        width: screenWidth * 8,
        height: screenWidth * 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 2,
    },
    titleContainer: {
        gap: screenHeight * 2,
        paddingTop: screenHeight * 3,
    },
    title: {
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: screenWidth * 5,
    },
    subTitle: {
        fontFamily: 'RedHatDisplay-Light',
        fontSize: screenWidth * 3.5,
    },
    inputFieldsContainer: {
        gap: screenWidth * 5,
        height: screenHeight * 30,
        justifyContent: 'center',
    },
    inputContainer: {
        position: 'relative',
    },
    label: {
        color: '#A6ABC4',
        position: 'absolute',
        zIndex: 2,
        top: -10,
    },
    inputStyle: {
        borderBottomColor: '#d6d6d6',
        borderBottomWidth: 1,
        fontFamily: 'ProductSans-Light',
    },
    eyeIcon: {
        position: 'absolute',
        right: 0,
        top: 20,
    },
    imageStyle: {
        width: screenWidth * 4,
        height: screenWidth * 4,
        resizeMode: 'center',
    },
    errorMessage: {
        color: 'red',
        fontSize: screenWidth * 3,
        marginTop: screenHeight * 2,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: screenWidth * 3.5,
    },
    bottomSheetContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    successIconContainer: {
        backgroundColor: '#FAFAFA',
        width: screenWidth * 20,
        height: screenWidth * 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    successIcon: {
        width: screenWidth * 11,
        height: screenWidth * 11,
        resizeMode: 'center',
    },
    successMessage: {
        textAlign: 'center',
        fontSize: screenWidth * 4,
    },
    successSubtitle: {
        textAlign: 'center',
        color: '#332218',
    },
    successButton: {
        height: screenHeight * 7,
        width: screenWidth * 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#000000',
    },
});
