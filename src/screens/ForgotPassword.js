import React, { useContext, useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


import { height, COLORS } from '../components/styles';
import { DataContext } from '../components/UserData';

const ForgotPassword = () => {
    // const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const {data, setData} = useContext(DataContext)

    const navigation = useNavigation()

    {/* function to handle back button press*/ }
    const handleBackButtonPress = () => {
        navigation.goBack()
    }

    {/* function to handle Next button press depending on user's choice*/ }
    const onNextButtonPress = async () => {
        if (email.length === 0) {
            Alert.alert('Error', 'Please enter your email.');
            return;
        }

        // Function to validate email format
        const validateEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        // Validate email format
        if (!validateEmail(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }

        setData({...data, email})

        try {
            const response = await axios.post(
                'https://backend-nyux.onrender.com/api/v1/users/forgotpassword',
                { email },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Handle the response and update your app's state or UI accordingly
            console.log(response.data);

            // Show a success message to the user indicating that the password reset email has been sent
            Alert.alert('Success', 'Password reset verification email has been sent.');

            // Navigate to the appropriate screen, e.g., a screen where users can enter the reset token/code
            navigation.navigate('ResetPassword1');
        }

        catch (error) {
            // Handle error responses from the API
            console.log(error.response.status);
            // Check if the error message indicates an existing user
            if (error.response && error.response.status === 400) {
                Alert.alert('Error', 'User does not exist.');
            }
            else {
                Alert.alert('Error', 'Failed to send OTP. Please try again.');
            }
        }
    }

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
                    source={require('../Images/forgotPassword.jpeg')}
                    style={{
                        width: '80%',
                        height: '20%',
                        alignSelf: 'center',
                        backgroundColor: COLORS.white,
                        marginTop: 10
                    }} />

                {/* forgot password header */}
                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <View>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        <Text style={styles.chooseText}>Enter your registered email and new password to reset your password</Text>
                    </View>
                </View>

                {/* phoneinput
                <View style={styles.input}>
                    <TextInput
                        placeholder="Phone"
                        autoCorrect={false}
                        keyboardType='number-pad'
                        value={phone}
                        returnKeyType='done'
                        onChangeText={setPhone}
                        style={{ flex: 1, paddingRight: 10, fontSize: 18, fontWeight: '500' }}
                    />
                </View> */}

                {/* divider 
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 20,
                    marginTop: 50,
                }}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>or</Text>
                    <View style={styles.line} />
                </View> */}

                {/* emailinput */}
                <View style={[styles.input, { marginTop: 30 }]}>
                    <TextInput
                        placeholder="Email"
                        autoCorrect={false}
                        value={email}
                        onChangeText={text => setEmail(text.toLowerCase())}
                        style={{ flex: 1, paddingRight: 10, fontSize: 18 }}
                    />
                </View>

                {/* Next button */}
                <TouchableOpacity
                    style={styles.nextcontainer}
                    onPress={onNextButtonPress}
                >
                    <Text style={styles.nexttext}>Next</Text>
                </TouchableOpacity>

            </ImageBackground>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        alignSelf: 'center',
        lineHeight: 29,
        fontSize: 22,
        fontWeight: 'bold'
    },

    chooseText: {
        color: COLORS.grey,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 10
    },

    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.primary,
        padding: 10,
        marginTop: 50,
        alignSelf: 'center',
        width: '85%',
        height: '6%',
        flexDirection: 'row',
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.grey,
        marginHorizontal: 20
    },

    orText: {
        marginHorizontal: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.grey,
    },

    nextcontainer: {
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#80CAFF',
        borderRadius: 5,
        marginTop: 80,
        paddingVertical: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 50,
    },

    nexttext: {
        fontSize: 22,
        fontWeight: '500',
        color: COLORS.white,
    },

    passwordEye: {
        fontSize: 22,
        color: 'grey',
        alignSelf: 'center'
    },
})

export default ForgotPassword