import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, width, height } from '../components/styles';


const ResetPassword1 = ({ navigation }) => {

    const [Tokennumber, onChangeText] = React.useState('');

    const handleChangeText = (text) => {
        onChangeText(text)
    }

    const onNextPress = async () => {
        if (Tokennumber.length === 0 || Tokennumber.length !== 6) {
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
                navigation.navigate('ResetPassword2');
            }
            else {
                // Show an error message if the token verification failed
                Alert.alert('Error', 'Invalid token. Please check the entered code.');
            }
        }

        catch (error) {
            // Handle error responses from the API
            console.log(error);

            if (error.response && error.response.status === 400) {
                // Show an error message if the user does not exist
                Alert.alert('Error', 'User does not exist.');
            } else {
                // Show a generic error message for other errors
                Alert.alert('Error', 'Failed to verify the token. Please try again.');
            }

        };
    }



    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >

            <Icon
                name="arrow-left"
                onPress={() => navigation.goBack()}
                style={{
                    fontSize: 30,
                    color: COLORS.black,
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginLeft: 20
                }}
            />

            <View style={{ alignItems: 'center' }}>
                <Image
                    resizeMode='contain'
                    source={require('../Images/reset1.png')}
                    style={{ height: 250, width: 250 }}
                />
            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: '800', fontSize: 22, marginBottom: 30 }}>Reset Password?</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Text
                    style={{
                        width: width,
                        textAlign: 'center',
                        color: COLORS.grey,
                        fontSize: 18
                    }}
                >
                    Input the 6 digits code sent to your Email</Text>
                <Text
                    style={{
                        width: width,
                        textAlign: 'center',
                        color: COLORS.grey,
                        marginBottom: 20,
                        fontSize: 18
                    }}>
                    (If you did not receive an email, hit the back button and click on Next to receive one)
                </Text>
            </View>

            <View>
                <TextInput
                    style={{
                        height: 50,
                        margin: 12,
                        borderWidth: 1,
                        borderRadius: 5,
                        borderColor: '#05509b',
                        padding: 10,
                        marginBottom: 20,
                        marginHorizontal: 30,
                        fontWeight: '400',
                        fontSize: 18
                    }}
                    placeholder='Code'
                    onChangeText={handleChangeText}
                    value={Tokennumber}
                />
            </View>

            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderColor: '#80CAFF',
                    borderRadius: 5,
                    marginTop: 30,
                    paddingVertical: 10,
                    backgroundColor: COLORS.primary,
                    marginHorizontal: 50,
                }}
                onPress={onNextPress}
            >
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: '500',
                        color: COLORS.white,
                    }}
                >
                    Next
                </Text>
            </TouchableOpacity>

            <View>
                <Image
                    resizeMode='contain'
                    source={require('../Images/LowerBackground.png')}
                    style={{ marginTop: height * 0.26 }} />
            </View>
        </SafeAreaView>
    )
}

export default ResetPassword1