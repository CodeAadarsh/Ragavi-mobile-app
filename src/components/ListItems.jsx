import { View, Text } from 'react-native'
import React from 'react'

const ListItems = ({ text }) => {
  return (
    <View>
      <Text className='font-light text-xl py-2'>
        {`\u2022  ${text}`} 
      </Text>
    </View>
  )
}

export default ListItems