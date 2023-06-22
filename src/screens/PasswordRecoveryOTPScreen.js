import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    Image,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OTPInputView from '@twotalltotems/react-native-otp-input';
// import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

import { height, COLORS } from '../components/styles';

const OTPScreen = () => {
    const [otp, setOtp] = useState('');
    const [keyboardOffset, setKeyboardOffset] = useState(0)

    const handleOTPSubmit = () => {
        // Implement your logic to verify the entered OTP
        console.log('Entered OTP:', otp);
    };

    const handleDoneButtonPress = () => {
        console.log('Hey');
    }

    const navigation = useNavigation()

    {/* function to handle back button press*/ }
    const handleBackButtonPress = () => {
        navigation.goBack()
    }


    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            (e) => {
                if (Platform.OS === 'ios') {
                    setKeyboardOffset(e.endCoordinates.height);
                } else {
                    const screenHeight = Dimensions.get('window').height;
                    const keyboardHeight = e.endCoordinates.height;
                    const offset = screenHeight - keyboardHeight - height * 0.95;
                    setKeyboardOffset(offset);
                }
            }

        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);


    const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
            setKeyboardOffset(0);
        }
    );

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white }}>
            <ImageBackground
                source={require('../Images/appBackground.png')}
                style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: height * 0.95,
                }}>

                {/* back icon */}
                <Icon
                    name='arrow-left'
                    style={{
                        fontSize: 30,
                        marginTop: 20,
                        marginLeft: 20,
                    }}
                    onPress={handleBackButtonPress}
                />

                <Image
                    source={require('../Images/otpReset.jpeg')}
                    style={{
                        width: '85%',
                        height: '28%',
                        alignSelf: 'center',
                        backgroundColor: COLORS.white,
                        marginTop: 10
                    }} />

                {/* reset password header */}
                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <View>
                        <Text style={styles.resetPassword}>Reset Password?</Text>
                        <Text style={styles.inputText}>Input the 6 digit code sent to your phone number/Email</Text>
                    </View>
                </View>


                {/* <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 50}> */}

                    <OTPInputView
                        style={[styles.otpInput, {marginBottom: keyboardOffset}]}
                        pinCount={6}
                        code={otp}
                        onCodeChanged={code => setOtp(code)}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.otpInputField}
                        codeInputHighlightStyle={styles.otpInputHighlight}
                        onCodeFilled={handleOTPSubmit}
                    />
                    {/* <KeyboardAccessoryView
                        alwaysVisible
                        hideBorder
                        style={styles.accessoryContainer}> */}
                        {/* <View style={styles.doneButtonContainer}>
                            <TouchableOpacity onPress={handleDoneButtonPress}>
                                <Text style={styles.doneButton}>Done</Text>
                            </TouchableOpacity>
                        </View> */}
                    {/* </KeyboardAccessoryView> */}


                    {/* Next button */}
                    <TouchableOpacity
                        style={styles.nextContainer}
                    // onPress={handleOTPSubmit}
                    >
                        <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity>
                {/* </KeyboardAvoidingView> */}


            </ImageBackground>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    resetPassword: {
        alignSelf: 'center',
        lineHeight: 29,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },

    inputText: {
        color: COLORS.grey,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
    },

    otpInput: {
        width: '80%',
        height: 100,
        alignSelf: 'center',
        marginTop: 10
    },

    otpInputField: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.primary,
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primary,
    },

    otpInputHighlight: {
        borderColor: COLORS.primary,
    },

    nextContainer: {
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#80CAFF',
        borderRadius: 5,
        paddingHorizontal: 120,
        paddingVertical: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 50,
        marginTop: 30
    },

    accessoryContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.white,
    },

    doneButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    doneButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
    },

    nextText: {
        fontSize: 22,
        fontWeight: '500',
        color: COLORS.white,
    },
})

export default OTPScreen