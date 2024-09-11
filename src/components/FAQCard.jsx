import { Pressable, ScrollView, StyleSheet, Text, Touchable, View } from 'react-native'
import React, { useState } from 'react'
import PlusSign from '../../assets/SVG_Jsx/PlusSign'
import { TouchableOpacity } from 'react-native-gesture-handler';

const FAQCard = ({ key, title, details, type }) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <TouchableOpacity onPress={buttonHandler} className='bg-[#eeeeee] w-full mx-6 m-2'>
            <View className='flex flex-row justify-between p-4'>
                <Text className='text-lg'>{title}</Text>
                <TouchableOpacity onPress={buttonHandler} className='mx-2'>
                    <PlusSign />
                </TouchableOpacity>
            </View>
            <View className={`px-4 bg-white overflow-hidden transition-transform ${isOpen ? 'h-auto' : 'h-0'} `}>
                <View className={` ${isOpen ? 'opacity-100' : 'opacity-0'} font-normal mt-4 transition-opacity duration-1000`}>
                    <Text className='text-lg'>{details} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FAQCard

const styles = StyleSheet.create({})