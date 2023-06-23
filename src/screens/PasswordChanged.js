import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { COLORS, height } from '../components/styles'
import { useNavigation } from '@react-navigation/native'

const PasswordChanged = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                alignItems: 'center'
            }}>
            <Image
                resizeMode='contain'
                source={require('../Images/logo.png')}
                style={{
                    marginLeft: 20,
                    marginTop: 20,
                    alignSelf: 'flex-start'
                }}
            />

            <Image
                resizeMode='contain'
                source={require('../Images/PasswordChanged.png')}
                style={{
                    height: 250,
                    width: 250,
                    marginTop: 30
                }}
            />

            <Text
                style={{
                    fontWeight: 700,
                    fontSize: 22,
                    marginBottom: 50
                }}
            >Success
            </Text>

            <Text
                style={{
                    fontWeight: 500,
                    fontSize: 22,
                    marginBottom: 50,
                    color: COLORS.grey,
                    textAlign: 'center'
                }}
            >Your Password has been successfully changed!
            </Text>

            <Text
                style={{
                    fontWeight: 500,
                    fontSize: 22,
                    marginBottom: 50,
                    color: COLORS.grey,
                    textAlign: 'center'
                }}
            >Click Done to Continue
            </Text>

            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderColor: '#80CAFF',
                    borderRadius: 5,
                    paddingVertical: 15,
                    paddingHorizontal: 50,
                    backgroundColor: COLORS.primary,
                }}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: COLORS.white,
                    }}
                >
                    Done
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

export default PasswordChanged