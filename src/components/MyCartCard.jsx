import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const MyCartCard = ({ name, size, quantity, price, path, handleSelection, isSelected }) => {
    const [isPressed, setIsPressed] = useState(false)

  const handlePress = () => {
    setIsPressed(!isPressed);
    handleSelection();
  };

    return (
        <ScrollView className='bg-white shadow-2xl h-40 m-2'>
            <View className='flex flex-row'>
                <TouchableOpacity
                    className='m-4'
                    onPress={handlePress}
                    
                >
                    <View className={`border border-solid  bg-white w-3 h-3 ${isPressed ? 'bg-primary' : ''}`}>
                    </View>
                </TouchableOpacity>
                <Image className='h-36 w-24 m-2' source={path}/>
                <View className='my-3'>
                    <Text className='text-lg'>{name}</Text>
                    <Text className='font-normal'>Size: {size} | Quantity : {quantity} </Text>
                    <Text className='mt-14 text-base'> Price :  ₹ {price}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default MyCartCard