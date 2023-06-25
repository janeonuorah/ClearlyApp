import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
    View,
    TextInput,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, height, width } from '../components/styles';
import PersonalProfileInputs from '../components/PersonalProfileInputs';

const PersonalProfile = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_Confirmation] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleCheckboxChange = () => {
        setAgreeTerms(!agreeTerms);
    };

    const handleSubmit = () => {
        // Handle form submission with form data
        navigation.navigate('HomeScreen')
    };

    return (
        <SafeAreaView
            style={{
                backgroundColor: COLORS.white,
                flex: 1,
            }}
        >
            <View>
                <Icon
                    name="arrow-left"
                    onPress={() => navigation.goBack()}
                    style={{
                        fontSize: 32,
                        marginLeft: 10,
                        marginTop: 10,
                        color: COLORS.black,
                        fontWeight: 'bold'
                    }} />
            </View>
            <View>
                <Text
                    style={{
                        paddingVertical: 15,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontSize: 20,
                        fontWeight: '700',
                    }}
                >Personal Profile
                </Text>
            </View>
            <View>
                <PersonalProfileInputs 
                placeholder='First Name'
                value= {firstName}
                setValue={setFirstName}
                />
               
                <PersonalProfileInputs 
                placeholder='Last Name                                     Other Names'
                value= {lastName}
                setValue={setLastName}
                />
               
                <PersonalProfileInputs 
                placeholder='Birth Date (mm/dd/yyyy)'
                value= {birthdate}
                setValue={setBirthdate}
                />
               
                <PersonalProfileInputs 
                placeholder='Country'
                value= {country}
                setValue={setCountry}
                />
               
                <PersonalProfileInputs 
                placeholder='Email'
                value= {email}
               setValue={setEmail}
                />
               
                <PersonalProfileInputs 
                placeholder='Password'
                value= {password}
                setValue={setPassword}
                />
               
                <PersonalProfileInputs 
                placeholder='Confirm Password'
                value= {password_confirmation}
                setValue={setPassword_Confirmation}
                />
               
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 30,
                        width: 270,
                        paddingLeft: 12
                    }}
                >
                    <CheckBox
                        value={agreeTerms}
                        onValueChange={handleCheckboxChange}
                    />
                    <Text style={{ marginLeft: 8 }}>Tick the box to agree to Clearly App <Text>Terms and Conditions.</Text></Text>
                </View>

                <View style={styles.agreeTermsContainer}>
                    <Text
                        onPress={handleSubmit}
                        style={styles.agreeTerms}
                    >
                        Agree and Continue
                    </Text>

                </View>

                <View>
                    <Image
                        resizeMode='contain'
                        source={require('../Images/LowerBackground.png')}
                        style={{
                            marginTop: height * 0.19
                        }} />
                </View>
            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#05509b',
        width: 370,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 20
    },

    agreeTermsContainer: {
        backgroundColor: COLORS.primary,
        width: width * 0.80,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },

    agreeTerms: {
        color: COLORS.white,
        fontWeight: 600,
        fontSize: 17
    }
})


export default PersonalProfile;