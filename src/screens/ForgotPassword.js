import React, { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'


import { height, COLORS } from '../components/styles';

const ForgotPassword = () => {

    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [otpSent, setOtpSent] = useState()

    const navigation = useNavigation()

    {/* function to handle back button press*/ }
    const handleBackButtonPress = () => {
        navigation.goBack()
    }

    {/* function to handle Next button press depending on user's choice*/ }
    const onNextButtonPress = () => {
        navigation.navigate('PasswordRecoveryOTPScreen')
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
                        <Text style={styles.chooseText}>Choose your preferred mode to reset your password</Text>
                    </View>
                </View>

                {/* phoneinput */}
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
                </View>

                {/* divider */}
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
                </View>

                {/* emailinput */}
                <View style={[styles.input, { marginTop: 30 }]}>
                    <TextInput
                        placeholder="Email"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                        style={{ flex: 1, paddingRight: 10, fontSize: 18, fontWeight: '500' }}
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
        paddingHorizontal: 120,
        paddingVertical: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 50,
    },

    nexttext: {
        fontSize: 22,
        fontWeight: '500',
        color: COLORS.white,
    },
})

export default ForgotPassword