import { View, Text, Touchable } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AddressCard = ({ name, addLine1, addLine2, phone }) => {

  const [isPressed, setIsPressed] = useState(false)
  return (

    <View className='bg-white shadow-2xl  m-2'>

      {/* Name + Edit Button */}
      <TouchableOpacity
      onPress={() => setIsPressed(!isPressed)}
      >
      <View className={`border border-solid absolute top-2 left-2  bg-white w-3 h-3 ${isPressed ?  'bg-primary' : '' }`}>

      </View>
      </TouchableOpacity>
      <View className='py-4 px-10'>
        <View className='flex flex-row justify-between'>
          <Text className='text-xl'>{name} </Text>
          <TouchableOpacity >
            <Text className='text-base font-light underline'>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text className='text-lg font-normal'>
          {addLine1}
        </Text>
        <Text className='text-lg font-normal mb-2'>
          {addLine2}
        </Text>
        <Text className='text-base font-normal'>
          {phone}
        </Text>
        
      </View>
    </View>

  )
}

export default AddressCard