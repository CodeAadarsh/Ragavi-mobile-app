import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ChevronLeft from '../../assets/SVG_Jsx/ChevronLeft'
import { useNavigation } from '@react-navigation/native'
const HeaderComponent = ( { headerDetails} ) => {
  const navigation = useNavigation();
  return (
    <View>
       <TouchableOpacity onPress={()=>navigation.goBack()} className='bg-white px-8 py-4 flex items-center flex-row pt-16'>
                <View className=''>
                    <ChevronLeft />
                </View>
                <Text style={{ fontFamily: 'Frutiger' }} className='text-2xl mx-4'>{headerDetails}</Text>
            </TouchableOpacity>
    </View>
  )
}

export default HeaderComponent