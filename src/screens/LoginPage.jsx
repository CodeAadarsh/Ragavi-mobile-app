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
        <View className="flex-1 m-6">


            {/* For the Chevron Icon */}
            <TouchableOpacity className="mt-12">
                <Image
                    className="w-6 h-6"
                    source={require('../../assets/Images/Chevron.png')}
                />
            </TouchableOpacity>


            {/* For the Heading, Input Fields, Submit Buttons */}
            <View className="m-4 mt-16">

                {/* Login Heading */}
                <Text className=" text-5xl">
                    Login
                </Text>

                {/* Email, Password Inputs */}
                <TextInput
                    placeholder='Email'
                    className="mt-10 h-16 w-full rounded-lg shadow-xl border border-solid border-gray-300 text-lg p-4 text-gray-400"
                />
                <TextInput
                    placeholder='Password'
                    className="mt-10 h-16 w-full rounded-lg shadow-xl border border-solid border-gray-300 text-lg p-4 text-gray-400"
                />


                {/* Login Button */}
                <View className='mt-6 shadow-xl justify-center items-center w-full h-14 bg-primary'>
                    <TouchableOpacity className=''>
                        <Text className='text-2xl text-white'>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className="m-2 mt-4 text-base ">
                    <Text>Forgot Your Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginPage