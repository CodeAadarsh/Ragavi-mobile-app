import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import ChevronLeft from '../../assets/SVG_Jsx/ChevronLeft'
import HeaderComponent from '../components/HeaderComponent'

const MyAddressForm = () => {
    const headerDetails = 'My Addresses'
    return (
        <>
            <ScrollView className='flex-1 bg-white'>
                {/* My Address Header */}
                <HeaderComponent headerDetails={headerDetails}
                />

                {/* Address Form */}

                {/* Name */}
                <View className='mx-6'>
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-lg m-2'>Full Name</Text>
                    <TextInput style={{ fontFamily: 'Frutiger' }} className='border border-solid h-8 w-full' />
                </View>

                {/* Phone Number */}
                <View className='mx-6'>
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-lg m-2'>Phone Number</Text>
                    <TextInput style={{ fontFamily: 'Frutiger' }} className='border border-solid h-8 w-full' />
                </View>

                {/* State + City */}
                <View className='mx-6 my-2 flex flex-row justify-between items-center'>
                    <View>
                        <Text style={{ fontFamily: 'Frutiger' }} className='text-lg'>State</Text>
                        <TextInput style={{ fontFamily: 'Frutiger' }} className='border border-solid h-8 w-40' />
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'Frutiger' }} className='text-lg'>City</Text>
                        <TextInput style={{ fontFamily: 'Frutiger' }} className='border border-solid h-8 w-40' />
                    </View>
                </View>

                {/* AddressLine 1 */}
                <View className='mx-6'>
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-lg m-2'>Address Line 1</Text>
                    <TextInput style={{ fontFamily: 'Frutiger' }} className='border border-solid h-8 w-full' />
                </View>
                {/* Address Line 2 */}
                <View className='mx-6'>
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-lg m-2'>Address Line 2</Text>
                    <TextInput style={{ fontFamily: 'Frutiger' }} className='border border-solid h-8 w-full' />
                </View>

                {/* Landmark + Pincode */}
                <View className='mx-6 my-2 flex flex-row justify-between items-center'>
                    <View>
                        <Text style={{ fontFamily: 'Frutiger' }} className='text-lg'>Nearby (Landmark)</Text>
                        <TextInput style={{ fontFamily: 'Frutiger' }} className='border border-solid h-8 w-40' />
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'Frutiger' }} className='text-lg'>Pincode</Text>
                        <TextInput style={{ fontFamily: 'Frutiger' }} className='border border-solid h-8 w-40' />
                    </View>
                </View>

                {/* Buttons */}
            </ScrollView>
            <View className='bg-white flex flex-row justify-around px-8 pb-4'>
                <TouchableOpacity className=' border h-10 w-40 shadow-2xl border-gray-500  justify-center items-center'>
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-black'>Discard</Text>
                </TouchableOpacity>
                <TouchableOpacity className=' bg-primary h-10 shadow-2xl w-40 justify-center items-center '>
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-white'>Apply</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}

export default MyAddressForm
