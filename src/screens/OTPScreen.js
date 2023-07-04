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
    Keyboard,
    Dimensions,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { height, COLORS, width } from '../components/styles';

const OTPScreen = ({ route }) => {
    const receivedOTP = route.params?.receivedOTP

    const [Tokennumber, onChangeText] = React.useState('');
    const [keyboardOffset, setKeyboardOffset] = useState(0);
    const navigation = useNavigation();

    const handleChangeText = (text) => {
        onChangeText(text)
    }

    const handleBackButtonPress = () => {
        navigation.goBack();
    };

    //on confirm button press
    const handleOTPSubmit = async () => {
        if (Tokennumber.length === 0) {
            Alert.alert('Error', 'Please input the 6-digit code that was sent to your email');
            return;
        }

        try {
            const response = await axios.post(
                'https://backend-nyux.onrender.com/api/v1/users/verifyToken',
                { token: Tokennumber },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Handle the response and update your app's state or UI accordingly
            console.log(response.data);

            // Check if the token verification is successful
            if (response.data.status === "success") {
                // Show a success message to the user indicating that the token is verified
                Alert.alert('Success', 'Token verification successful.');

                // Navigate to the appropriate screen for resetting the password
                navigation.navigate('LogIn');
            }
            else {
                // Show an error message if the token verification failed
                Alert.alert('Error', 'Invalid token. Please check the entered code.');
            }
        }

        catch (error) {
            // Handle error responses from the API
            console.log(error);           
                Alert.alert('Error', 'Invalid Code. Please try again.');
         

        };
    }


    //onresend code press
    const handleResendCode = async () => {
        try {
            // Make an API call to resend the OTP
            const response = await axios.post(
                //request api to handle resend otp
                'https://backend-nyux.onrender.com/api/v1/users/sendVerificationCode',
                { email: route.params?.email },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Handle the response and show a success message
            console.log(response.data);
            Alert.alert('Success', 'OTP has been resent to your email address.');
        }
        catch (error) {
            // Handle error responses from the API
            console.log(error.response.data);
            Alert.alert('Error', 'Failed to resend OTP. Please try again.');
        }
    };


    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
            if (Platform.OS === 'ios') {
                setKeyboardOffset(e.endCoordinates.height);
            } else {
                const screenHeight = Dimensions.get('window').height;
                const keyboardHeight = e.endCoordinates.height;
                const offset = screenHeight - keyboardHeight - height * 0.95;
                setKeyboardOffset(offset);
            }
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOffset(0);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleDoneButtonPress = () => {
        Keyboard.dismiss();
    };

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white }}>
            <ImageBackground
                source={require('../Images/appBackground.png')}
                style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: height * 0.95,
                }}
            >
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
                        marginTop: 10,
                    }}
                />

                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <View>
                        <Text style={styles.inputText}>Enter the 6 digits code we sent to your number</Text>
                    </View>
                </View>

                <OTPInputView
                    style={[styles.otpInput, { marginBottom: keyboardOffset }]}
                    pinCount={6}
                    code={Tokennumber}
                    onCodeChanged={handleChangeText}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.otpInputField}
                    codeInputHighlightStyle={styles.otpInputHighlight}
                    onCodeFilled={handleOTPSubmit}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text>Didn't receive code? Click</Text>
                    <TouchableOpacity
                        onPress={handleResendCode}>
                        <Text style={{ color: COLORS.primary }}>
                            Resend Code
                        </Text>
                    </TouchableOpacity>
                </View>

                {Platform.OS === 'ios' && keyboardOffset > 0 && (
                    <KeyboardAvoidingView behavior='padding' style={styles.accessoryContainer}>
                        <View style={styles.doneButtonContainer}>
                            <TouchableOpacity onPress={handleDoneButtonPress}>
                                <Text style={styles.doneButton}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                )}

                <TouchableOpacity
                    style={styles.nextContainer}
                    onPress={() => { handleOTPSubmit(); }}
                >
                    <Text style={styles.nextText}>Confirm</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputText: {
        color: COLORS.grey,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
    },

    otpInput: {
        width: width * 0.8,
        height: 100,
        alignSelf: 'center',
        marginTop: 10,
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
        paddingVertical: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 50,
        marginTop: 30,
        justifyContent: 'center',
        minWidth: 200,
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
});

export default OTPScreen;
