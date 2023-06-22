import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../components/styles'
import HomeProfileAndNameContainer from './HomeScreenProfilePictureAndNameContainer';


const HomeScreenHeader = () => {
    const navigation = useNavigation()

    const onSettingsPress = () => {
        navigation.navigate('Settings')
    }

    const profilePicture = 'https://example.com/profile-picture.jpg'

    return (
        <View>
            <View style={styles.headerContainer}>
                <Image
                    source={require('../Images/logo.png')}
                    style={styles.logo}
                />
                <View style={styles.headerIconsContainer}>
                    <Icon
                        name='cog'
                        style={styles.headerIcons}
                        onPress={onSettingsPress}
                    />
                    <Icon
                        name='bell-outline'
                        style={[styles.headerIcons, { marginLeft: 10 }]}
                    />
                </View>
            </View>

            <View style={styles.profileBackground}>
                <HomeProfileAndNameContainer profilePicture={profilePicture} />
            </View>

            <View style={styles.interestPromptContainer}>
                <Text style={styles.interestPrompt}>Select Your Interest</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1
    },

    logo: {
        width: 160,
        height: 80,
        marginLeft: 10,
        resizeMode: 'contain'
    },

    headerIconsContainer: {
        flexDirection: 'row',
        marginRight: 30,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerIcons: {
        fontSize: 30,
        color: COLORS.primary,
    },

    profileBackground: {
        backgroundColor: COLORS.primary,
        width: '100%',
        height: '32%',
        zIndex: -1,
        top: -7,
        alignItems: 'center',
        justifyContent: 'center'
    },

    interestPromptContainer: {
        backgroundColor: COLORS.primary,
        alignSelf: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 5
    },

    interestPrompt: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: '700'
    }

})


export default HomeScreenHeader;