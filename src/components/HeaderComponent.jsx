import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ChevronLeft from '../../assets/SVG_Jsx/ChevronLeft'

const HeaderComponent = ( { headerDetails} ) => {
  return (
    <View>
       <TouchableOpacity className='px-8 py-4 flex items-center flex-row pt-16'>
                <View className='mt-1'>
                    <ChevronLeft />
                </View>
                <Text className='text-xl font-semibold mx-4'>{headerDetails}</Text>
            </TouchableOpacity>
    </View>
  )
}

export default HeaderComponent