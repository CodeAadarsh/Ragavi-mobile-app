import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const LogoHeader = () => {
  return (
      <View className='mt-16 flex flex-row justify-between'>
        <TouchableOpacity>
          <Image
            style={{ width: 120, height: 40, resizeMode: 'contain' }}
            source={require('../../assets/Images/RagaviLogo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
            source={require('../../assets/Images/ShoppingCart.png')}
          />
        </TouchableOpacity>
      </View>
  )
}

export default LogoHeader