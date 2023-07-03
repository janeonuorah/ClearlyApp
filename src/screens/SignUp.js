import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TextInput,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { DataContext } from '../components/UserData';

import { COLORS, height, width } from '../components/styles';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const { setData } = useContext(DataContext)
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true)
    const [password_confirmation, setPassword_confirmation] = useState('');
    const navigation = useNavigation();

    const onEyePress = () => { setHidePassword(!hidePassword) }

    const handleSendOTP = async () => {
        // Function to validate email format
        const validateEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        if (email.length === 0 || mobile === 0) {
            Alert.alert('Error', 'Please enter your details.');
            return;
        }

        // Validate email format
        if (!validateEmail(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }

        try {
            const response = await axios.post(
                'https://backend-nyux.onrender.com/api/v1/users/signup',
                { email, mobile, username, password, password_confirmation },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Handle the response and update your app's state or UI accordingly
            console.log(response.data);

            // Handle successful OTP sending, navigate to the OTP screen, etc.
            navigation.navigate('PasswordRecoveryOTPScreen', { receivedOTP });
            handleDataUpdate();
        }

        catch (error) {
            // Handle error responses from the API
            console.log(error.response.status);
            // Check if the error message indicates an existing user
            if (error.response && error.response.status === 500) {
                Alert.alert('Error', 'User already exists. Please log in instead.');
            }
            else {
                Alert.alert('Error', 'Failed to send OTP. Please try again.');
            }
        }

    };



    const backButton = () => {
        navigation.goBack();
    };

    return (
        <ScrollView>

            <SafeAreaView style={{ backgroundColor: COLORS.primary }}>
                <View style={{ paddingHorizontal: 5 }}>
                    <View
                        style={{
                            marginTop: 10,
                            marginLeft: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <Icon
                            name="arrow-left"
                            onPress={backButton}
                            style={{
                                fontSize: 25,
                                color: 'white',
                            }}
                        />
                        <Image resizeMode="contain" source={require('../Images/logo.png')} />
                        <View style={{ marginLeft: 20 }}></View>
                    </View>

                    {/* SignUp Container */}
                    <View
                        style={{
                            marginTop: 40,
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 22,
                                fontWeight: '600',
                            }}>
                            SIGN UP
                        </Text>
                    </View>

                    {/* Phone number input */}
                    <View style={styles.container}>
                        <Text
                            style={styles.textInputHeader}>
                            Phone:
                        </Text>

                        <PhoneInput
                            defaultValue={mobile}
                            defaultCode="IN"
                            containerStyle={styles.phoneContainer}
                            textContainerStyle={styles.textInput}
                            onChangeFormattedText={(text) => { setMobile(text); }}
                            withShadow
                            autoFocus
                        />

                        {/* Email input */}
                        <Text
                            style={styles.textInputHeader}>
                            Email Address:
                        </Text>

                        <View style={styles.input}>
                            <Icon name="email-outline" style={styles.icon} />
                            <TextInput
                                placeholder="Enter your email address"
                                autoCorrect={false}
                                keyboardType="email-address"
                                value={email}
                                onChangeText={(text) => setEmail(text.toLowerCase())}
                                style={{
                                    flex: 1,
                                    paddingHorizontal: 10,
                                    fontSize: 17,
                                }}
                                autoCapitalize='none'
                            />
                        </View>

                        {/* Username input */}
                        <Text
                            style={styles.textInputHeader}>
                            Username:
                        </Text>
                        <View style={styles.input}>
                            <Icon name="account-circle-outline" style={styles.icon} />
                            <TextInput
                                placeholder="Enter your preferred username"
                                autoCorrect={false}
                                keyboardType="default"
                                onChangeText={(text) => setUsername(text)}
                                style={{
                                    flex: 1,
                                    paddingHorizontal: 10,
                                    fontSize: 17,
                                }}
                                autoCapitalize='none'
                            />
                        </View>

                        {/* Password input */}
                        <Text
                            style={styles.textInputHeader}>
                            Password:
                        </Text>
                        <View style={styles.input}>
                            <Icon name="lock-outline" style={styles.icon} />
                            <TextInput
                                secureTextEntry={hidePassword}
                                placeholder="Enter your preferred Password"
                                autoCorrect={false}
                                keyboardType='default'
                                onChangeText={(text) => setPassword(text)}
                                autoCapitalize='none'
                                style={{
                                    flex: 1,
                                    paddingHorizontal: 10,
                                    fontSize: 17
                                }}
                            />
                            <Icon
                                name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                                style={styles.passwordEye}
                                onPress={onEyePress}
                            />
                        </View>

                        {/* Password confirmation */}
                        <Text
                            style={styles.textInputHeader}>
                            Confirm Password:
                        </Text>
                        <View style={styles.input}>
                            <Icon name="lock-outline" style={styles.icon} />
                            <TextInput
                                secureTextEntry={hidePassword}
                                placeholder="Confirm Password"
                                autoCorrect={false}
                                keyboardType="default"
                                onChangeText={(text) => setPassword_confirmation(text)}
                                style={{
                                    flex: 1,
                                    paddingHorizontal: 10,
                                    fontSize: 17,
                                }}
                                autoCapitalize='none'
                            />
                            <Icon
                                name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                                style={styles.passwordEye}
                                onPress={onEyePress}
                            />
                        </View>

                        {/* Send OTP button */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSendOTP}
                            android_ripple="red">
                            <Text style={styles.text1}>Send OTP</Text>
                        </TouchableOpacity>

                        <View style={{ marginTop: 20 }}>
                            <Text
                                style={{
                                    color: 'white',
                                    width: 350,
                                    fontSize: 15,
                                }}>
                                A code will be sent to the email address provided to verify your account and also
                                to recover your password
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            alignItems: 'center',
                            marginVertical: 30,
                        }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                            or
                        </Text>
                    </View>

                    <View
                        style={{
                            position: 'relative',
                            width: width * 0.85,
                            marginLeft: 20,
                            gap: 5,
                        }}>
                        <TouchableOpacity style={styles.continueContainers}>
                            <Image
                                resizeMode="contain"
                                source={require('../Images/gmail.png')}
                            />
                            <Text style={styles.continueTexts}> Continue with Email</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.continueContainers}
                            onPress={() => navigation.navigate('WithFacebook')}>
                            <Image
                                resizeMode="contain"
                                source={require('../Images/facebook.png')}
                                style={{ marginLeft: 30 }}
                            />
                            <Text style={styles.continueTexts}> Continue with Facebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.continueContainers}
                            onPress={() => navigation.navigate('WithGoogle')}>
                            <Image
                                resizeMode="contain"
                                source={require('../Images/google.png')}
                                style={{ marginLeft: 10 }}
                            />
                            <Text style={styles.continueTexts}> Continue with Google</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Image
                            resizeMode="contain"
                            source={require('../Images/LowerBackground.png')}
                            style={{ marginTop: height * 0.19 }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },

    phoneContainer: {
        width: width * 0.9,
        height: height * 0.05,
        borderRadius: 10,
    },

    button: {
        marginTop: 30,
        width: '90%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e97fb0',
        borderRadius: 10,
    },

    textInput: {
        paddingVertical: 0,
        borderRadius: 10,
    },

    text1: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 22,
    },

    continueTexts: {
        color: COLORS.grey,
    },

    continueContainers: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 50,
        borderRadius: 10,
        gap: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textInputHeader: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginVertical: 10
    },

    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.white,
        paddingHorizontal: 10,
        // marginTop: 30,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.05,
        borderRadius: 10,
        flexDirection: 'row',
    },

    icon: {
        fontSize: 22,
        color: COLORS.grey,
        marginRight: 5,
    },

    passwordEye: {
        fontSize: 22,
        color: 'grey',
    },
});

export default SignUpScreen;