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
                    Forgot Password
                </Text>

                {/* Email, Password Inputs */}
                <View className='mt-10'>
                <Text className='font-normal text-base'>
                Please, enter your email address. You will receive a link to create a new password via email.
                </Text>
                    <TextInput
                        placeholder='Email'
                        className="h-16 my-2 w-full shadow-xl  text-lg p-4 bg-white text-gray-400"
                    />
                </View>

                {/* Login Button */}
                <TouchableOpacity className='mt-6 shadow-2xl justify-center items-center w-full h-14 bg-primary'>
                    <Text className='text-2xl font-normal text-white'>SEND</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default LoginPage