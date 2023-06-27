import React from 'react'
import {
    View,
    Text,
    Pressable,
    SafeAreaView,
    Image
} from 'react-native'

const WithFacebook = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={{ paddingTop: 50 }}>
                <View style={{ flexDirection: 'row', paddingTop: 10, backgroundColor: 'black', color: 'white', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>
                    <Text style={{ color: 'white', marginTop: 10 }}>Data mode?</Text>
                    <Pressable>
                        <Text
                            style={{ color: 'white', borderColor: 'white', padding: 10, borderWidth: 1 }}>Switch modes</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Image
                    resizeMode='contain'
                    source={require('../Images/logo.png')}
                    style={{ height: 180, width: 180, }} />



            </View>

            <View style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 100 }}>
                <Text style={{ width: 300, textAlign: 'center', fontSize: 16, color: '#bcbcbc' }}> <Text style={{ fontWeight: 800, fontSize: 17, lineHeight: 25, color: 'black' }}>Clearly App</Text> would like to access your Facebook Account</Text>
            </View>

            <View style={{}}>
                <Pressable style={{ marginBottom: 30 }}>
                    <Text style={{ color: 'white', borderRadius: 7, borderWidth: 1, backgroundColor: '#05509b', paddingTop: 12, paddingBottom: 12, paddingLeft: 100, paddingRight: 100, fontSize: 16, marginLeft: 'auto', marginRight: 'auto' }}>Continue as Emmanuel</Text>
                </Pressable>
                <Pressable>
                    <Text style={{ color: '#bcbcbc', borderRadius: 7, borderWidth: 1, borderColor: '#05509b', backgroundColor: 'white', paddingTop: 12, paddingBottom: 12, paddingLeft: 160, paddingRight: 160, fontSize: 16, marginLeft: 'auto', marginRight: 'auto' }}>Cancel</Text>
                </Pressable>

            </View>

            <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 100, alignItems: 'center' }}>
                <Text >From</Text>
                <Text style={{ color: '#fa8c8c', fontWeight: 800 }}>FACEBOOK</Text>
            </View>

            <View>
                <Image
                    resizeMode='contain'
                    source={require('../Images/LowerBackground.png')}
                    style={{}} />
            </View>
        </SafeAreaView>
    )
}

export default WithFacebook