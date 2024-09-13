import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const OrderCard = ({ orderNumber, date, trackNumber, quantity, total, status }) => {

    return (
        
        <TouchableOpacity className='my-2 mx-6 shadow-2xl p-4 bg-white'>
            <View className='flex flex-row my-3 justify-between'>
                <Text style={{ fontFamily: 'Frutiger' }} className='text-base font-bold'>
                    Order No{orderNumber}
                </Text>
                <Text style={{ fontFamily: 'Frutiger' }} className=''>
                    {date}
                </Text>
            </View>

            <Text style={{ fontFamily: 'Frutiger' }} className='font-normal text-base'>
                Tracking Number : {trackNumber}
            </Text>

            <View className='flex flex-row justify-between '>
                <Text style={{ fontFamily: 'Frutiger' }} className='text-base font-normal'> Quantity : {quantity} </Text>
                <Text style={{ fontFamily: 'Frutiger' }} className='text-base font-normal'> Total Amount:  ₹ {total} </Text>
            </View>

            <View className='flex flex-row justify-between my-3'>
                <Text style={{ fontFamily: 'Frutiger' }} className='text-base font-normal underline'> Details </Text>
                <Text style={{ fontFamily: 'Frutiger' }} className='text-base font-normal text-green-600'>{status}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default OrderCard