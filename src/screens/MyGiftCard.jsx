import { View, Text, Touchable } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MyRewards = () => {

    const headerDetails = 'Gift Cards'
    return (
        <>
            <View className='bg-white'>
                {/* Header Component */}
                <HeaderComponent headerDetails={headerDetails} />
            </View>
            <View className='bg-white flex-1 p-14 justify-center items-center'>
                <View>
                    <Text className='text-lg text-gray-500 text-center'>
                    CURRENTLY YOUR GIFT VOUCHER CODE HAS NO BALANCE,
                    </Text>
                    <Text className='text-lg text-gray-500 text-center my-3'>
                    YOUR INFORMATION WILL BE UPDATED ONCE YOU MAKE A PURCHASE WITH RAGAVI.
                    </Text>
                </View>
                <TouchableOpacity className='mt-10 border border-solid border-primary w-32 justify-center items-center h-10'><Text className='text-lg text-primary'>SHOP NOW</Text></TouchableOpacity>
            </View>
        </>
    )
}

export default MyRewards