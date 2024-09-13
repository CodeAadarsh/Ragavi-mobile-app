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
        <View className="flex-1 p-6 bg-secondary">


            {/* For the Chevron Icon */}
            <TouchableOpacity className="mt-12">
                <Image
                    className="w-5 h-5"
                    source={require('../../assets/Images/Chevron.png')}
                />
            </TouchableOpacity>


            {/* For the Heading, Input Fields, Submit Buttons */}
            <View className="m-4 mt-16">

                {/* Login Heading */}
                <Text style={{ fontFamily: 'Frutiger' }} className=" text-5xl">
                    Login
                </Text>

                {/* Email, Password Inputs */}
                <View className='mt-14'>
                    <TextInput style={{ fontFamily: 'Frutiger' }}
                        placeholder='Email'
                        className="h-16 my-2 w-full shadow-xl  text-lg p-4 bg-white text-gray-400"
                    />
                    <TextInput style={{ fontFamily: 'Frutiger' }}
                        placeholder='Password'
                        className=" h-16 w-full my-2 shadow-xl bg-white text-lg p-4 text-gray-400"
                    />

                </View>

                {/* Login Button */}
                <TouchableOpacity className='mt-6 shadow-2xl justify-center items-center w-full h-14 bg-primary'>
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-2xl text-white'>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity className="m-2 mt-4 shadow-2xl text-base ">
                    <Text style={{ fontFamily: 'Frutiger' }} className='font-normal text-lg'>Forgot Your Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginPage