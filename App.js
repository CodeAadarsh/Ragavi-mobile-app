
import './gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeStack from './src/routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})