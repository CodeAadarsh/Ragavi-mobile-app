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
    <TouchableOpacity
      className='mb-4 bg-white shadow-2xl h-32 w-full'
      onPress={handlePress}
    >
      <View className='flex flex-row '>
        <View className={` mt-2 ml-2 bg-white w-3 h-3 ${isPressed ? 'bg-primary ' : 'border border-solid'}`}>
        </View>
        <Image className={`h-28 w-20 m-2 object-contain  ${isPressed ? 'opacity-100' : 'opacity-60'}`} source={path} />
        <View className='my-3'>
          <Text style={{ fontFamily: 'Frutiger' }} className='text-lg font-semibold'>{name}</Text>
          <Text style={{ fontFamily: 'Frutiger' }} className='font-normal'>Size: {size} | QTY : {quantity} </Text>
          <Text style={{ fontFamily: 'Frutiger' }} className=' mt-6 text-base'> Price :  ₹ {price}</Text>
        </View>
      </View>
    </TouchableOpacity>

  )
}

export default MyCartCard