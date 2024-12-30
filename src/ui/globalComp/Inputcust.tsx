import React, { ReactNode } from 'react';
import {
    KeyboardTypeOptions,
    TextInput,
    StyleSheet,
    TextStyle,
    View,
    StyleProp,
    ViewStyle,
    Text
} from 'react-native';


interface InputcustTypeCheck {
    inputStyle?: StyleProp<TextStyle>;
    onChangeFun: (text: string) => void;
    placeholder: string;
    placeholderColor?: string;
    keyboardType?: KeyboardTypeOptions;
    value: string;
    prefixIcon?: ReactNode;
    surfixIcon?: ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    secureTextEntry?: boolean
}

export default function Inputcust({
    inputStyle,
    onChangeFun,
    placeholder,
    placeholderColor = '#999',
    keyboardType = 'default',
    value,
    prefixIcon,
    surfixIcon,
    containerStyle,
    secureTextEntry
}: InputcustTypeCheck) {
    return (
        <View style={[styles.container, containerStyle]}>
            {prefixIcon && <View style={{ marginRight: 8 }}>{prefixIcon}</View>}
            <TextInput
                style={inputStyle}
                onChangeText={onChangeFun}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                maxLength={30}
            />
            {surfixIcon && <View style={{ marginLeft: 8 }}>{surfixIcon}</View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
});


{/* <TextInput
style={{
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    fontFamily: 'ProductSans-Light'
}}
onChangeText={onChangeName}
value={name}
placeholder="Enter your name"
placeholderTextColor={'black'}
keyboardType="numeric"
/> */}