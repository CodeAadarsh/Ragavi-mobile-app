import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import ActivityLoading from '../components/ActivityLoading';
import LogoHeader from '../components/LogoHeader';
import { TextInput } from 'react-native-gesture-handler';

const isLoading = false;


const SearchPage = () => {

    return (
        <View className='flex-1 p-4'>

            {/* Header */}
            <LogoHeader />

            {/* Input */}
            <View className='border mt-10 flex-row items-center bg-gray-200 rounded'>
                <Image className='h-6 w-6 ml-4' source={require('../../assets/Images/Search.png')} />
                <TextInput
                    placeholder='What do you looking for?'
                    className='bg-gray-200 h-12 flex-1 px-4'
                />
            </View>

            {/* Heading 2 */}
            <View className='flex flex-row justify-between mt-8'>
                <Text className='text-3xl'>Search Results</Text>
                <TouchableOpacity>
                    <Text className='text-lg'>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchPage