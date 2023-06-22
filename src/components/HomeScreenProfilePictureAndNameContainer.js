import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons';

import { COLORS } from '../components/styles'


const HomeProfileAndNameContainer = ({ profilePicture, firstName }) => {
    return (
        <View style={styles.profileContainer}>
            {profilePicture ? (
                <View style={styles.profilePicture}>
                    <Image source={{ uri: profilePicture }} style={styles.picture} />
                </View>
            ) : (
                <Icon name="account-circle" style={styles.icon} />
            )}

            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Hello {firstName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        height: 90,
        width: 330,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    profilePicture: {
        width: '23%',
        height: 75,
        borderWidth: 1,
        borderRadius: '100%',
        borderColor: COLORS.black,
        backgroundColor: COLORS.white,
    },

    nameContainer: {
        width: '40%',
        backgroundColor: COLORS.white,
        alignSelf: 'center'
    },

    nameText: {
        padding: 10,
        fontSize: 22,
        fontWeight: '600',
        color: '#6E6E6E'
    }
})

export default HomeProfileAndNameContainer