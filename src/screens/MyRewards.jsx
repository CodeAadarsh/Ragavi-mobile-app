import { View, Text, Touchable } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MyRewards = () => {

    const headerDetails = 'My Rewards'
    return (
        <>
            <View className='bg-white'>
                {/* Header Component */}
                <HeaderComponent headerDetails={headerDetails} />
            </View>
            <View className='bg-white flex-1 p-14 justify-center items-center'>
                <View>
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-lg text-gray-500 text-center'>
                        CURRENTLY YOU HAVE NO ACTIVE REWARDS.
                    </Text>
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-lg text-gray-500 text-center my-3'>
                        YOU CAN PLACE AN ORDER AND GET 5% CASHBACK ON EACH ORDER 15 DAYS AFTER THE DELIVERY IS COMPLETED.
                    </Text>
                </View>
                <TouchableOpacity className='mt-10 border border-solid border-primary w-32 justify-center items-center h-10'><Text style={{ fontFamily: 'Frutiger' }} className='text-lg text-primary'>SHOP NOW</Text></TouchableOpacity>
            </View>
        </>
    )
}

export default MyRewards