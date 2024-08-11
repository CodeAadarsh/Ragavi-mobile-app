import { View, Text, Image, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import ActivityLoading from '../components/ActivityLoading'


const isLoading = false;


const SignUp = () => {

    return (
        <View className="flex-1 m-6">
            {/* For the Chevron Icon */}
            <TouchableOpacity className="mt-12">
                <Image
                    className="w-6 h-6"
                    source={require('../../assets/Images/Chevron.png')}
                />
            </TouchableOpacity>


            {/* For the Heading, Input Fields, Submit Buttons */}
            <View className="m-4 mt-4">

                {/* Login Heading */}
                <Text className=" text-5xl my-10">
                    Sign Up
                </Text>

                {/* Email, Password Inputs */}
                <TextInput
                    placeholder='Name'
                    className="mt-2 h-16 w-full rounded-lg shadow-xl border border-solid border-gray-300 text-lg p-4 text-gray-400"
                />
                <TextInput
                    placeholder='Email'
                    className="mt-2 h-16 w-full rounded-lg shadow-xl border border-solid border-gray-300 text-lg p-4 text-gray-400"
                />
                <TextInput
                    placeholder='Password'
                    className="mt-2 h-16 w-full rounded-lg shadow-xl border border-solid border-gray-300 text-lg p-4 text-gray-400"
                />


                {/* Login Button */}
                <TouchableOpacity className='mt-6 shadow-xl justify-center items-center w-full h-14 bg-primary'>
                    <Text className='text-2xl text-white'>SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="m-2 mt-4 text-base ">Already have an account?</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default SignUp