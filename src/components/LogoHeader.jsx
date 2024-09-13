import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Logo from '../../assets/SVG_Jsx/Logo'
import ShoppingBag from '../../assets/SVG_Jsx/ShoppingBag'

const LogoHeader = () => {
  return (
    <View className='p-4 pt-12 flex bg-white flex-row justify-between'>
      <TouchableOpacity>
        <Logo />
      </TouchableOpacity>
      <TouchableOpacity>
        <ShoppingBag />
      </TouchableOpacity>
    </View>
  )
}

export default LogoHeader