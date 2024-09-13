import { View, Text, Touchable } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MyRewards = () => {

    const headerDetails = 'My Orders'
    return (
        <>
            <View>

                {/* Header Component */}
                <HeaderComponent headerDetails={headerDetails} />
            </View>
            <View className='flex-1 justify-center items-center'>
                <View className='p-20 '>
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-2xl text-gray-400 text-center'>
                        LOOKS LIKE YOU HAVEN'T ORDERED ANYTHING YET
                    </Text>
                    
                </View>
                <TouchableOpacity className='border border-solid border-primary w-32 justify-center items-center h-10'>
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-lg text-primary'>SHOP NOW</Text>
                    </TouchableOpacity>
            </View>
        </>
    )
}

export default MyRewards