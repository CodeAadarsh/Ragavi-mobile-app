import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ActivityLoading from '../components/ActivityLoading';
import { TextInput } from 'react-native-gesture-handler';

const isLoading = false;

const OtpPage = () => {

    if (isLoading) {
        return (
            <ActivityLoading />
        )
    }

    return (
        <View className="flex-1 bg-secondary">
            <View className='m-4'>
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
                    <Text style={{ fontFamily: 'Frutiger' }} className="text-4xl">
                        Enter OTP
                    </Text>

                    {/* OTP Input Fields */}
                    <View className='p-2 mt-10 flex-row shadow-2xl justify-between font-bold'>
                        <TextInput style={{ fontFamily: 'Frutiger' }}
                            value={"3"}
                            className="text-xl font-normal text-center bg-white h-20 w-1/5 p-4 "
                            keyboardType='numeric'
                            maxLength={1}
                        />
                        <TextInput style={{ fontFamily: 'Frutiger' }}
                            value={"4"}
                            className="text-xl font-normal text-center bg-white h-20 w-1/5 p-4 "
                            keyboardType='numeric'
                            maxLength={1}
                        />
                        <TextInput style={{ fontFamily: 'Frutiger' }}
                            value={"7"}
                            className="text-xl font-normal text-center bg-white h-20 w-1/5 p-4 "
                            keyboardType='numeric'
                            maxLength={1}
                        />
                        <TextInput style={{ fontFamily: 'Frutiger' }}
                            value={"9"}
                            className="text-xl font-normal text-center bg-white h-20 w-1/5 p-4"
                            keyboardType='numeric'
                            maxLength={1}
                        />
                    </View>
                    
                    {/* Login Button */}
                    <TouchableOpacity className='my-2 shadow-xl justify-center items-center w-full h-14 bg-primary'>
                        <Text style={{ fontFamily: 'Frutiger' }} className='text-lg font-normal text-white'>SEND OTP</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Frutiger' }} className="m-2 mt-4 text-base font-light">Resend</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OtpPage;