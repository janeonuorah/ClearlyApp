import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, height, width } from '../components/styles';
import { useNavigation } from '@react-navigation/native';


const ResetPassword2 = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const handleNewPassword = (text) => {
        setNewPassword(text);
    };

    const handleConfirmedPassword = (text) => {
        setConfirmedPassword(text);
    };

    const navigation = useNavigation();

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

            <View>
                <TextInput
                    placeholder="New Password"
                    value={newPassword}
                    onChangeText={handleNewPassword}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Confirmed Password"
                    value={confirmedPassword}
                    onChangeText={handleConfirmedPassword}
                    style={styles.textInput}
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
                onPress={() => navigation.navigate('PasswordChanged')}
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
    }
})

export default ResetPassword2