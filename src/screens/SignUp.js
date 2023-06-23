import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    Pressable,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS, height, width } from '../components/styles'
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const phoneInput = React.useRef(null);

    const OnPress = () => {
        if (phoneNumber.length !== 0) {
            Alert.alert(
                "Confirm Number",
                phoneNumber,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                    },

                    {
                        text: "OK",
                        onPress: () => console.log("OK Pressed"),
                    },
                ],
            );
        }
    }

    const navigation = useNavigation()

    const backButton = () => {
        navigation.navigate('LogIn')
    }

    const onSendOTPPress = () => {
        navigation.navigate('PasswordRecoveryOTPScreen')
    }

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.primary }}>
            <View style={{ paddingHorizontal: 5 }}>
                <View
                    style={{
                        marginTop: 10,
                        marginLeft: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                    <Icon
                        name="arrow-left"
                        onPress={backButton}
                        style={{
                            fontSize: 25,
                            color: "white"
                        }} />
                    <Image
                        resizeMode='contain'
                        source={require('../Images/logo.png')}
                    />
                    <View style={{ marginLeft: 20 }}></View>
                </View>

                {/* SignUp Container */}
                <View
                    style={{
                        marginTop: 40,
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 22,
                            fontWeight: '600'
                        }}>SIGN UP
                    </Text>
                </View>

                <View style={styles.container}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: '500',
                            marginBottom: 5,
                            alignSelf: 'flex-start',
                            marginLeft: 20
                        }}>Phone:
                    </Text>

                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phoneNumber}
                        containerStyle={styles.phoneContainer}
                        textContainerStyle={styles.textInput}
                        onChangeFormattedText={text => {
                            setPhoneNumber(text);
                        }}
                        defaultCode="IN"
                        layout='first'
                        withShadow
                        autoFocus
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { OnPress(), onSendOTPPress() }}
                        android_ripple="red"
                    >
                        <Text style={styles.text1}>Send OTP</Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: 20 }}>
                        <Text
                            style={{
                                color: 'white',
                                width: 350,
                                fontSize: 15,
                            }}>
                            A code will be sent to your registered number to verify
                            your account and also to recover your password
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        alignItems: 'center',
                        marginVertical: 30
                    }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>or</Text>
                </View>

                <View
                    style={{
                        position: 'relative',
                        width: width * 0.85,
                        marginLeft: 20,
                        gap: 5,
                    }}
                >
                    <View
                        style={styles.continueContainers}>
                        <Image
                            resizeMode='contain'
                            source={require('../Images/gmail.png')}
                        />
                        <Text style={styles.continueTexts}> Continue with Email</Text>
                    </View>
                    <View
                        style={styles.continueContainers}>
                        <Image
                            resizeMode='contain'
                            source={require('../Images/facebook.png')}
                            style={{ marginLeft: 30 }}
                        />
                        <Text style={styles.continueTexts}> Continue with Facebook</Text>
                    </View>
                    <View
                        style={styles.continueContainers}>
                        <Image
                            resizeMode='contain'
                            source={require('../Images/google.png')}
                            style={{ marginLeft: 10 }}
                        />
                        <Text style={styles.continueTexts}> Continue with Google</Text>
                    </View>
                </View>

                <View>
                    <Image
                        resizeMode='contain'
                        source={require('../Images/LowerBackground.png')}
                        style={{ marginTop: height * 0.19 }} />
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },

    phoneContainer: {
        width: width * 0.90,
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
        borderRadius: 10
    },

    text1: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 22
    },

    continueTexts: {
        color: COLORS.grey
    },

    continueContainers: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 50,
        borderRadius: 10,
        gap: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default SignUpScreen;