import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Platform
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { height, COLORS, width } from '../components/styles';
import LoginButton from '../components/loginButtons';
import { useNavigation } from '@react-navigation/native';

const LogIn = ({ error }) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [rememberMe, setRememberMe] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        retrieveSavedEmail();
    }, []);

    // functions for the toogles to show and hide password as well as remember me checkbox
    const onEyePress = () => { setHidePassword(!hidePassword) }
    const onRememberMeToggle = () => {
        setRememberMe(!rememberMe);
        if (rememberMe && email) {
            saveEmail(email);
        }
        else {
            clearSavedEmail()
        }
    }

    // handling remember me with async storage
    const saveEmail = async (email) => {
        try {
            await AsyncStorage.setItem('savedEmail', email);
        }
        catch (error) {
            console.log('Error saving email:', error)
        }
    }

    const retrieveSavedEmail = async () => {
        try {
            const savedEmail = await AsyncStorage.getItem('savedEmail');
            if (savedEmail) {
                setEmail(savedEmail);
                setRememberMe(true);
            }
        }
        catch (error) {
            console.log('Error retrieving email:', error)
        }
    }

    const clearSavedEmail = async () => {
        try {
            await AsyncStorage.removeItem('savedEmail');
        }
        catch (error) {
            console.log('Error clearing saved email:', error)
        }
    }

    const onLoginPress = () => {
        navigation.navigate('HomeScreenAlso')
    }

    // function to handle clearing of password one charcter at a time
    const handlePasswordBackspace = () => {
        setPassword(password.slice(0, -1));
    };

    const navigation = useNavigation()

    const onForgotPasswordPress = () => {
        navigation.navigate('ForgotPassword')
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View
                style={{
                    paddingHorizontal: 20,
                    alignItems: 'center'
                }}>

                <Image
                    source={require('../Images/logo.png')}
                    style={styles.logo}
                />

                {/* Welcome Text */}
                <View style={{ marginTop: 120 }}>
                    <Text style={[
                        styles.text,
                        {
                            fontWeight: 'bold',
                            fontSize: 25
                        }]}>Welcome Back!
                    </Text>
                    <Text
                        style={[
                            styles.text,
                            {
                                fontWeight: '500'
                            }]}>Log in to your account
                    </Text>
                </View>

                {/* Input boxes, errors and focus */}
                {/* email */}
                <View style={styles.input}>
                    <Icon name="email-outline" style={styles.icon} />
                    <TextInput
                        placeholder="Enter your email address"
                        autoCorrect={false}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                        style={{
                            flex: 1,
                            paddingHorizontal: 10,
                            fontSize: 17
                        }}
                    />
                </View>
                {error &&
                    <Text style={styles.errorMessage}>{error = '* Input email'}</Text>
                }

                {/* password */}
                <View style={styles.input}>
                    <Icon name="lock-outline" style={styles.icon} />
                    <TextInput
                        secureTextEntry={hidePassword}
                        placeholder="Password"
                        autoCorrect={false}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {
                                handlePasswordBackspace();
                            }
                        }}
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
                {error &&
                    <Text style={styles.errorMessage}>{error = '* Input Password'}</Text>
                }

                {/* Remember me and forgot password */}
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 90,
                    }}
                    >
                        <Icon
                            name={rememberMe ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
                            style={styles.checkbox}
                            onPress={onRememberMeToggle}
                        />
                        <Text style={{
                            color: COLORS.white,
                            fontSize: 15,
                            fontWeight: '500'
                        }}>Remember Me</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={onForgotPasswordPress}>
                            <Text style={{ color: COLORS.white }}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {/* <LoginButtons/> */}
                <LoginButton
                    onLoginPress={onLoginPress}
                />

            </View>


            <Image
                source={require('../Images/LowerBackground.png')}
                style={{
                    ...Platform.select({
                        ios: {
                            marginTop: 190
                        },
                        android: {
                           marginTop: 170
                        },
                    }),
                }}
            />
        </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'cover',
        marginTop: 50
    },

    text: {
        color: COLORS.white,
        fontSize: 20,
        lineHeight: 27
    },

    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.white,
        paddingHorizontal: 10,
        marginTop: 30,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        width: width * 0.80,
        height: height * 0.05,
        borderRadius: 10,
        flexDirection: 'row',
    },

    icon: {
        fontSize: 22,
        color: COLORS.grey,
        marginRight: 5
    },

    errorMessage: {
        color: COLORS.red,
        marginTop: 8,
        left: -110,
        fontSize: 15
    },

    passwordEye: {
        fontSize: 22,
        color: 'grey',
    },

    checkbox: {
        fontSize: 22,
        color: COLORS.white,
        marginRight: 3
    }
})

export default LogIn