import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { TextInput } from 'react-native-gesture-handler'

const EditProfile = () => {
    const headerDetails = 'Edit Profile'
    return (
        <>
            <View>
                {/* Header Elements */}
                <HeaderComponent headerDetails={headerDetails} />
                <View className='ml-14 mr-4'>
                    <Text className='text-lg font-bold'>Provile details about yourself and any other pertinent information.</Text>
                </View>
                <View className='border border-gray-200 my-5'></View>
            </View>
            <ScrollView className='flex-1 p-5'>
                {/* Profile Images */}
                <View className='flex flex-row'>
                    <View className=''>
                        <Image
                            className='w-24 h-24'
                            source={require('../../assets/Images/Vector.png')}
                        />
                    </View>
                    {/* Profile Image Header */}
                    <View className='flex flex-col mx-6'>
                        <Text className='text-xl my-4 font-bold'>Basic Information</Text>
                        <Text className='text-lg font-bold'>Profile Photo</Text>
                        <View className='flex flex-row my-1'>
                            <Text className='text-base text-primary font-bold  mr-3'>Change </Text>
                            <Text className='text-base text-primary font-bold'>Remove </Text>
                        </View>
                    </View>

                </View>
                <View>

                    {/* Details Form */}
                    <View className='my-10'>
                        <View className=''>
                            <Text className='text-lg my-1 '>Full Name</Text>
                            <TextInput className='border border-solid h-8 px-3 w-full' />
                        </View>
                        <View className=''>
                            <Text className='text-lg my-1 '>Mobile Number</Text>
                            <TextInput className='border border-solid h-8 w-full px-3' />
                        </View>
                        <View className=''>
                            <Text className='text-lg my-1 '>Email</Text>
                            <TextInput className='border border-solid h-8 w-full px-3' />
                        </View>
                        <View className=''>
                            <Text className='text-lg my-1 '>Password</Text>
                            <TextInput className='border border-solid h-8 w-full px-3' />
                        </View>

                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default EditProfile