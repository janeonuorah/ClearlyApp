import React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { COLORS, height } from '../components/styles';
import { HomeScreenContent } from '../components/HomeScreenContent';
import  HomeScreenHeader  from '../components/HomeScreenheader';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ImageBackground
                source={require('../Images/appBackground.png')}
                style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: height * 0.95,
                }}
            >

               <HomeScreenHeader/>

                <HomeScreenContent />

            </ImageBackground>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

})

export default HomeScreen