import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import ScreenStack from './src/navigation/ScreenStack';
import { AppRegistry } from 'react-native';

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <ScreenStack />
    </NavigationContainer>
  )
}

AppRegistry.registerComponent('clearly-app', () => App);

export default App
