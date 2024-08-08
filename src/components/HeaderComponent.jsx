import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ChevronLeft from '../../assets/SVG_Jsx/ChevronLeft'

const HeaderComponent = ( { headerDetails} ) => {
  return (
    <View>
       <TouchableOpacity className='p-8 flex flex-row pt-16'>
                <View className='mt-1'>
                    <ChevronLeft />
                </View>
                <Text className='text-3xl mx-4'>{headerDetails}</Text>
            </TouchableOpacity>
    </View>
  )
}

export default HeaderComponent