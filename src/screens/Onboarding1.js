import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Image,
    View,
    SafeAreaView,
    StatusBar,
    FlatList,
    Text,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import slides from '../externalData/onboardingData';
import { width, height, COLORS } from '../components/styles';



//function on how the items are rendered (Image and texts)
const Slide = ({ item }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={item.image}
                style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )
}

//onboarding screen component proper
const OnboardingScreen = () => {
    const [activeSlideIndex, setactiveSlideIndex] = useState(0)
    const ref = useRef(null)

    // to highlight active indicator
    const updateActiveSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x
        const currentIndex = Math.round(contentOffsetX / width)
        setactiveSlideIndex(currentIndex)
    }

    const Footer = () => {
        // Next button function
        const onNextPress = () => {
            const nextSlideIndex = activeSlideIndex + 1;
            if (nextSlideIndex != slides.length) {
                const offset = nextSlideIndex * width;
                ref?.current?.scrollToOffset({ offset });
                setactiveSlideIndex(nextSlideIndex)
            }
        }

        // Skip button function
        const onSkipPress = () => {
            const lastSlideIndex = slides.length - 1
            const offset = lastSlideIndex * width
            ref?.current?.scrollToOffset({ offset })
            setactiveSlideIndex(lastSlideIndex)
        }

        const navigation = useNavigation();

        //Login button function
        const onLogInPress = () => {
            navigation.navigate('LogIn')
        }

        //SignUp button function
        const onSignUpPress = () => {
            navigation.navigate('SignUp')
        }

        //function to handle the buttons and indicator
        return (
            <View
                style={{
                    height: height * 0.25,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20
                }}>

                {/* indicator render */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20
                    }}>
                    {slides.map((_, index) => (
                        <View
                            style={[
                                styles.indicator,
                                activeSlideIndex === index && {
                                    backgroundColor: COLORS.white,
                                    width: 10
                                }
                            ]}
                            key={index} />
                    ))}
                </View>

                {/* Buttons render */}
                <View style={styles.buttonContainer}>
                    {
                        // ternary condition handling change of button details on last slide
                        // is it the last slide? Do
                        activeSlideIndex == slides.length - 1 ? (
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        {
                                            backgroundColor: COLORS.primary,
                                            borderColor: COLORS.primary,
                                            borderWidth: 1
                                        }
                                    ]}
                                    onPress={onLogInPress}>
                                    <Text
                                        style={{
                                            color: COLORS.white,
                                            fontSize: 20,
                                            fontWeight: '600'
                                        }}>LOGIN
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        {
                                            backgroundColor: COLORS.white,
                                            borderColor: 'black',
                                            borderWidth: 1
                                        }
                                    ]}
                                    onPress={onSignUpPress}>
                                    <Text style={{ fontSize: 20 }}>SIGNUP</Text>
                                </TouchableOpacity>
                            </View>)
                            // else
                            :
                            (
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={[
                                            styles.button,
                                            {
                                                backgroundColor: COLORS.primary,
                                                borderColor: COLORS.primary,
                                                borderWidth: 1
                                            }
                                        ]}
                                        onPress={onNextPress}>
                                        <Text
                                            style={{
                                                color: COLORS.white,
                                                fontSize: 20,
                                                fontWeight: '600'
                                            }}>NEXT
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[
                                            styles.button,
                                            {
                                                backgroundColor: COLORS.white,
                                                borderColor: 'black',
                                                borderWidth: 1
                                            }
                                        ]}
                                        onPress={onSkipPress}>
                                        <Text style={{ fontSize: 20 }}>SKIP</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                    }

                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar backgroundColor={COLORS.white} />
            <ImageBackground source={require('../Images/OnboardingScreenBackground.png')}
                style={{
                    resizeMode: 'contain',
                    width: width,
                    ...Platform.select({
                        ios: {
                            height: height * 0.90,
                        },
                        android: {
                            height: height * 0.95,
                        }
                    })
                }}>

                <FlatList
                    ref={ref}
                    data={slides}
                    contentContainerStyle={{ height: height * 0.75 }}
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={updateActiveSlideIndex}
                    renderItem={({ item }) => <Slide item={item} key={item.id} />}
                />

                <Footer />

            </ImageBackground>

            <Image
                source={require('../Images/LowerBackground.png')}
                style={{
                    ...Platform.select({
                        ios: {
                            height: height * 0.05
                        },
                        android: {
                            height: height * 0.12
                        },
                    }),
                }}
            />
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    image: {
        height: height * 0.45,
        width: width,
        resizeMode: 'contain',
        marginTop: 70,
    },

    title: {
        fontSize: 21,
        fontWeight: 500,
        textAlign: 'center',
    },

    indicator: {
        height: 5,
        width: 5,
        backgroundColor: '#A86A88',
        marginHorizontal: 3,
        borderRadius: 2,
    },

    buttonContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                height: height * 0.16
            },
            android: {
                height: height * 0.15
            },
        }),
    },

    button: {
        width: 220,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        fontSize: 50,
        fontWeight: 'bold',
    }
});


export default OnboardingScreen