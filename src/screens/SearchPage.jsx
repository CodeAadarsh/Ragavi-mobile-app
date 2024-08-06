import { View, Text, Image, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import ActivityLoading from '../components/ActivityLoading';
import LogoHeader from '../components/LogoHeader';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ProductCard from '../components/ProductCard';

const isLoading = false;


const SearchPage = () => {
    const cardDetails = [
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '₹4,999',
            discountedPrice: '₹3,990',
            image: require('../../assets/Images/CardImg1.png'),
        },
        {
            discountAmount: '25%',
            itemName: 'Leheriya Kurta Set',
            mrp: '₹1,999',
            discountedPrice: '₹1,500',
            image: require('../../assets/Images/CardImg2.png'),

        },
        {
            discountAmount: '16%',
            itemName: 'Leheriya Kurta Set',
            mrp: '₹2,999',
            discountedPrice: '₹1,890',
            image: require('../../assets/Images/CardImg3.png'),

        },
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '₹4,999',
            discountedPrice: '₹3,990',
            image: require('../../assets/Images/CardImg4.png'),

        },
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '₹4,999',
            discountedPrice: '₹3,990',
            image: require('../../assets/Images/CardImg1.png'),
        },
        {
            discountAmount: '16%',
            itemName: 'Leheriya Kurta Set',
            mrp: '₹2,999',
            discountedPrice: '₹1,890',
            image: require('../../assets/Images/CardImg3.png'),

        },
    ]

    return (
        <ScrollView className='flex-1 p-4 bg-white'>

            {/* Header */}
            <LogoHeader />

            {/* Input */}
            <View className='border mt-10 flex-row items-center bg-gray-200 rounded'>
                <Image className='h-6 w-6 ml-4' source={require('../../assets/Images/Search.png')} />
                <TextInput
                    placeholder='What do you looking for?'
                    className='bg-gray-200 h-12 flex-1 px-4'
                />
            </View>

            {/* Heading 2 */}
            <View className='flex flex-row justify-between my-8'>
                <Text className='text-3xl'>Search Results</Text>
                <TouchableOpacity>
                    <Text className='text-lg'>See All</Text>
                </TouchableOpacity>
            </View>

            {/* Cards */}
            <View 
            className='flex flex-row flex-wrap' >
                {/* Cards */}
                {cardDetails.map((items, index) => (
                    <ProductCard
                        key={index}
                        discountAmount={items.discountAmount}
                        itemName={items.itemName}
                        mrp={items.mrp}
                        discountedPrice={items.discountedPrice}
                        path={items.image}
                    />
                ))}
            </View>

        </ScrollView>
    )
}

export default SearchPage
