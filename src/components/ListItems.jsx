import { View, Text } from 'react-native'
import React from 'react'

const ListItems = ({ text }) => {
  return (
    <View>
      <Text style={{ fontFamily: 'Frutiger' }} className='font-light text-xl py-2 text-justify'>
        {`\u2022  ${text}`} 
      </Text>
    </View>
  )
}

export default ListItems