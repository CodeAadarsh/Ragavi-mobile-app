
import './gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeStack from './src/routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync()

const App = () => {
  const [loaded, error] = useFonts({
    'Inter-Black': require('./src/Assets/fonts/Frutiger.ttf'),
  });

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})