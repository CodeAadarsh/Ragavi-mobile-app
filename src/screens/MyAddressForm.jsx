import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import ChevronLeft from '../../assets/SVG_Jsx/ChevronLeft'
import HeaderComponent from '../components/HeaderComponent'

const MyAddressForm = () => {
    const headerDetails = 'My Addresses'
    return (
        <ScrollView className='flex-1 bg-white'>
            {/* My Address Header */}
             <HeaderComponent headerDetails = {headerDetails}
            />

            {/* Address Form */}

            {/* Name */}
            <View className='mx-8'>
                <Text className='text-lg m-2'>Full Name</Text>
                <TextInput className='border border-solid h-8 w-full' />
            </View>

            {/* Phone Number */}
            <View className='mx-8'>
                <Text className='text-lg m-2'>Phone Number</Text>
                <TextInput className='border border-solid h-8 w-full' />
            </View>

            {/* State + City */}
            <View className='mx-8 my-2 flex flex-row justify-between items-center'>
                <View>
                    <Text className='text-lg'>State</Text>
                    <TextInput className='border border-solid h-8 w-40' />
                </View>
                <View>
                    <Text className='text-lg'>City</Text>
                    <TextInput className='border border-solid h-8 w-40' />
                </View>
            </View>

            {/* AddressLine 1 */}
            <View className='mx-8'>
                <Text className='text-lg m-2'>Address Line 1</Text>
                <TextInput className='border border-solid h-8 w-full' />
            </View>
            {/* Address Line 2 */}
            <View className='mx-8'>
                <Text className='text-lg m-2'>Address Line 2</Text>
                <TextInput className='border border-solid h-8 w-full' />
            </View>

            {/* Landmark + Pincode */}
            <View className='mx-8 my-2 flex flex-row justify-between items-center'>
                <View>
                    <Text className='text-lg'>Nearby (Landmark)</Text>
                    <TextInput className='border border-solid h-8 w-40' />
                </View>
                <View>
                    <Text className='text-lg'>Pincode</Text>
                    <TextInput className='border border-solid h-8 w-40' />
                </View>
            </View>

            {/* Buttons */}
            <View className='flex flex-row justify-around mx-8 mt-48 mb-4'>
                <TouchableOpacity className=' border h-10 w-40 shadow-2xl border-gray-500  justify-center items-center'>
                    <Text className='text-black'>Discard</Text>
                </TouchableOpacity>
                <TouchableOpacity className=' bg-primary h-10 shadow-2xl w-40 justify-center items-center '>
                    <Text className='text-white'>Apply</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default MyAddressForm
