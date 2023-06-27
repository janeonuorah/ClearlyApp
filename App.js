import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import ScreenStack from './src/navigation/ScreenStack';

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <ScreenStack />
    </NavigationContainer>
  )
}


export default App
