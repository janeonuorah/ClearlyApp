import React from 'react'
import {
    View,
    Image,
    SafeAreaView,
    Text,
    Pressable
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const WithGoogle = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View
                style={{
                    marginTop: 46,
                    marginLeft: 20,
                    flexDirection: 'row'
                }}>
                <Icon
                    name="arrow-left"
                    onPress={() => navigation.navigate('SignUp')}
                    style={{
                        fontSize: 25,
                        color: "black",
                    }} />
                <Image
                    resizeMode='contain'
                    source={require('../Images/logo.png')}
                    style={{ marginLeft: 30, height: 80 }}
                />
            </View>

            <View>
                <Text>Choose an account</Text>
                <Text>to continue to Clearly App</Text>
            </View>

            <Pressable>

            </Pressable>
        </SafeAreaView>

    )
}

export default WithGoogle