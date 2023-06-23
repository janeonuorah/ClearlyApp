import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, width, height } from '../components/styles';


const ResetPassword1 = ({ navigation }) => {

    const [code, onChangeText] = React.useState('');

    const handleChangeText = (text) => {
        onChangeText(text)
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
                        width: width * 0.7,
                        textAlign: 'center',
                        color: COLORS.grey,
                        marginBottom: 20,
                        fontSize: 18
                    }}
                >Input the 6 digits code sent to your phone number/Email</Text>
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
                        fontWeight: '500',
                        fontSize: 18
                    }}
                    placeholder='Code'
                    onChangeText={handleChangeText}
                    value={code}
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
                onPress={() => navigation.navigate('ResetPassword2')}
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