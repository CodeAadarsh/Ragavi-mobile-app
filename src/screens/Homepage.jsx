import React from 'react'
import {  Text, View } from 'react-native'
import ActivityLoading from '../components/ActivityLoading';
const isLoading = true;
const Homepage = () => {
    if (isLoading){
        return(
            <ActivityLoading/>
        )
    }
  return (
    <View className="flex-1 items-center justify-center bg-red-300">
        <Text className="text-3xl">Homepage</Text>
        <Text className="text-3xl">Homepage</Text>
    </View>
  )
}

export default Homepage