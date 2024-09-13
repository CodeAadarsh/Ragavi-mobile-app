import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Logo from '../../assets/SVG_Jsx/Logo'
import ShoppingBag from '../../assets/SVG_Jsx/ShoppingBag'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import ChevronLeft from '../../assets/SVG_Jsx/ChevronLeft'
import { useNavigation } from '@react-navigation/native'
import { ShoppingBagIcon } from 'react-native-heroicons/outline'

const LogoHeader = ({backbutton}) => {
  const navigation = useNavigation()
  return (
    <View className='p-4 pt-14 flex bg-white flex-row justify-between'>
      <TouchableOpacity onPress={()=>navigation.goBack()} className="flex flex-row items-center justify-center">
     {backbutton && <View className='mx-2'>
                    <ChevronLeft />
                </View>}
        <Logo />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("MyCart")}>
        <ShoppingBagIcon color={"#000"} size={25}/>
      </TouchableOpacity>
    </View>
  )
}

export default LogoHeader