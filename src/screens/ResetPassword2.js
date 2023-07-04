import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { COLORS, height, width } from '../components/styles';
import { useNavigation } from '@react-navigation/native';
import { DataContext } from '../components/UserData';


const ResetPassword2 = () => {
    const [hidePassword, setHidePassword] = useState(true)
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { data } = useContext(DataContext)

    const onEyePress = () => { setHidePassword(!hidePassword) }

    const handlePasswordBackspace1 = () => {
        handleNewPassword(newPassword.slice(0, -1));
    };

    const handlePasswordBackspace = () => {
        handleConfirmPassword(confirmPassword.slice(0, -1));
    };

    const handleNewPassword = (text) => {
        setNewPassword(text);
    };

    const handleConfirmPassword = (text) => {
        setConfirmPassword(text);
    };

    const navigation = useNavigation();

    //API integration
    const onResetPasswordPress = async () => {

        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'New password and confirmed password do not match');
            return;
        }

        try {
            const response = await axios.post(
                'https://backend-nyux.onrender.com/api/v1/users/resetPassword',
                { email: data.email, confirmPassword, newPassword },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Handle the response
            console.log(response.data);

            if (response.data.message === 'Password updated successfully') {
                // Password updated successfully
                console.log('Password updated successfully');
                Alert.alert('Success', 'Your password has been changed successfully. Please log in with your new details')
                navigation.navigate("LogIn")
            }
            else {
                // Failed to update password
                console.log('Failed to update password');
            }
        }
        catch (error) {
            // Handle error responses from the API
            console.log(error.response.status);
            console.log(error.response.data);

            // Show an error message to the user
            if (error.response.status === 500) {
                console.log('Failed to update password');
                Alert.alert('Try again')
            }
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}>

            <Icon
                name="arrow-left"
                onPress={() => navigation.navigate('ResetPassword1')}
                style={{
                    fontSize: 30,
                    color: COLORS.black,
                    marginTop: 10,
                    marginLeft: 20,
                }}
            />

            <View style={{ alignItems: 'center' }}>
                <Image
                    resizeMode='contain'
                    source={require('../Images/reset2.png')}
                    style={{ height: 250, width: 250 }}
                />
            </View>

            <View
                style={{ alignItems: 'center' }}>
                <Text
                    style={{ fontWeight: 800, fontSize: 20, marginBottom: 50 }}>Reset Password?
                </Text>
            </View>

            <View style={styles.input}>
                <TextInput
                    secureTextEntry={hidePassword}
                    placeholder="New Password"
                    autoCorrect={false}
                    value={newPassword}
                    onChangeText={handleNewPassword}
                    style={{
                        flex: 1,
                        paddingHorizontal: 10,
                        fontSize: 17
                    }}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            handlePasswordBackspace1();
                        }
                    }}
                />
                <Icon
                    name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                    style={styles.passwordEye}
                    onPress={onEyePress}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    secureTextEntry={hidePassword}
                    placeholder="Confirmed Password"
                    autoCorrect={false}
                    value={confirmPassword}
                    onChangeText={handleConfirmPassword}
                    style={{
                        flex: 1,
                        paddingHorizontal: 10,
                        fontSize: 17
                    }}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            handlePasswordBackspace();
                        }
                    }}
                />
                <Icon
                    name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                    style={styles.passwordEye}
                    onPress={onEyePress}
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
                onPress={onResetPasswordPress}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: COLORS.white,
                    }}
                >
                    Reset Password
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

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        width: width * 0.80,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        fontSize: 18,
        fontWeight: '500'
    },

    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.primary,
        padding: 10,
        marginTop: 30,
        alignSelf: 'center',
        width: '85%',
        height: '6%',
        flexDirection: 'row',
    },

    passwordEye: {
        fontSize: 22,
        color: 'grey',
    },
})

export default ResetPassword2