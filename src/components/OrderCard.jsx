import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const OrderCard = ({ orderNumber, date, trackNumber, quantity, total, status }) => {

    return (
        <TouchableOpacity className='m-2 mx-8 shadow-2xl p-4 bg-white'>
            <View className='flex flex-row my-3 justify-between'>
                <Text className='text-xl'>
                    Order No{orderNumber}
                </Text>
                <Text className=''>
                    {date}
                </Text>
            </View>
            <Text className='font-normal text-lg'>
                Tracking Number : {trackNumber}
            </Text>
            <View className='flex flex-row justify-between my-3'>
                <Text className='text-lg font-normal'> Quantity : {quantity} </Text>
                <Text className='text-lg font-normal'> Total Amount ₹{total} </Text>
            </View>
            <View className='flex flex-row justify-between my-3'>
                <Text className='text-lg font-normal underline'> Details </Text>
                <Text className='text-lg font-normal text-green-600'>{status}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default OrderCard