import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ActivityLoading from '../components/ActivityLoading'
import { TextInput } from 'react-native-gesture-handler';

const isLoading = false;

const LoginPage = () => {

    if (isLoading) {
        return (
            <ActivityLoading />
        )
    }
    return (
        // Main View for the whole page
        <View className="flex-1 p-3 bg-secondary">


            {/* For the Chevron Icon */}
            <TouchableOpacity className="mt-16">
                <Image
                    className="w-5 h-5"
                    source={require('../../assets/Images/Chevron.png')}
                />
            </TouchableOpacity>


            {/* For the Heading, Input Fields, Submit Buttons */}
            <View className="m-4 mt-16">

                {/* Login Heading */}
                <Text className=" text-5xl">
                    Enter Your Mobile Number
                </Text>

                {/* Email, Password Inputs */}
                <View className='mt-10'>
                    <TextInput
                        placeholder='Mobile Number'
                        className="h-16 my-2 w-full shadow-xl  text-lg p-4 bg-white text-gray-400"
                    />
                </View>

                {/* Login Button */}
                <TouchableOpacity className='mt-6 shadow-2xl justify-center items-center w-full h-14 bg-primary'>
                    <Text className='text-2xl text-white'>Send OTP</Text>
                </TouchableOpacity>

                <TouchableOpacity className="m-2 mt-4 text-base ">
                    <Text className='font-normal text-lg'>Already have an account?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginPage