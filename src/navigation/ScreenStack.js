import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from '../screens/Onboarding1';
import LogIn from '../screens/LogIn';
import SignUpScreen from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import OTPScreen from '../screens/OTPScreen';

import BottomTabs from './BottomTabs';
import TextToSpeech from '../screens/TextToSpeech';
import SpeechToText from '../screens/SpeechToText';
import Calls from '../screens/VideoConference';
import ChatListScreen from '../screens/ChatList';
import SignLanguageTranscription from '../screens/SignLanguageTranscription';
import MeetWithTranslator from '../screens/MeetWithTranslator';
import BasicSignLanguage from '../screens/BasicSignLanguage';
import Community from '../screens/Community';
import PersonalProfile from '../screens/PersonalProfile';
import ResetPassword1 from '../screens/ResetPassword1';
import ResetPassword2 from '../screens/ResetPassword2';
import PasswordChanged from '../screens/PasswordChanged';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();

const ScreenStack = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(false);

  useEffect(() => {
    const checkAppLaunched = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    };

    checkAppLaunched();
  }, []);

  if (isAppFirstLaunched === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    ); 
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAppFirstLaunched ? (
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      ) : (
        <Stack.Screen name="NoOnboardingStack" component={NoOnboardingStack} />
      )}
    </Stack.Navigator>
  );
};

const AuthStack = createStackNavigator();

// Contains authentication screens: onboarding, login, signup, forgot password, etc.
const OnboardingStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <AuthStack.Screen name="LogIn" component={LogIn} />
      <AuthStack.Screen name="HomeScreenAlso" component={MainStack} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="ResetPassword1" component={ResetPassword1} />
      <AuthStack.Screen name="ResetPassword2" component={ResetPassword2} />
      <AuthStack.Screen name="PasswordRecoveryOTPScreen" component={OTPScreen} />
      <AuthStack.Screen name="PasswordChanged" component={PasswordChanged} />
      <AuthStack.Screen name="PersonalProfile" component={PersonalProfile} />
    </AuthStack.Navigator>
  );
};

const NoOnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="HomeScreenAlso" component={MainStack} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword1" component={ResetPassword1} />
      <Stack.Screen name="ResetPassword2" component={ResetPassword2} />
      <Stack.Screen name="PasswordRecoveryOTPScreen" component={OTPScreen} />
      <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
      <Stack.Screen name="PersonalProfile" component={PersonalProfile} />
    </Stack.Navigator>
  )
}

// Contains other screens in the app as well as the bottom tabs
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="PersonalProfile" component={PersonalProfile} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword1" component={ResetPassword1} />
      <Stack.Screen name="ResetPassword2" component={ResetPassword2} />
      <Stack.Screen name="PasswordRecoveryOTPScreen" component={OTPScreen} />
      <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
      <Stack.Screen name="TextToSpeechScreen" component={TextToSpeech} />
      <Stack.Screen name="SpeechToTextScreen" component={SpeechToText} />
      <Stack.Screen name="CallsScreen" component={Calls} />
      <Stack.Screen name="ChatScreen" component={ChatListScreen} />
      <Stack.Screen name="SignLanguageTranscriptionScreen" component={SignLanguageTranscription} />
      <Stack.Screen name="MeetWithTranslatorScreen" component={MeetWithTranslator} />
      <Stack.Screen name="BasicSignLanguageScreen" component={BasicSignLanguage} />
      <Stack.Screen name="CommunityScreen" component={Community} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default ScreenStack;