import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import ProductCard from '../components/ProductCard'
import { ScrollView } from 'react-native-gesture-handler'

const WishList = () => {

    const cardDetails = [
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/HomepageImg2.png'),
        },
        {
            discountAmount: '25%',
            itemName: 'Leheriya Kurta Set',
            mrp: '1,999',
            discountedPrice: '1,500',
            image: require('../../assets/Images/Homepageimg3.webp'),

        },
        {
            discountAmount: '16%',
            itemName: 'Leheriya Kurta Set',
            mrp: '2,999',
            discountedPrice: '1,890',
            image: require('../../assets/Images/Homepageimg4.webp'),

        },
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/Homepageimg5.png'),

        },
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/HomepageImg2.png'),

        },
        {
            discountAmount: '16%',
            itemName: 'Leheriya Kurta Set',
            mrp: '2,999',
            discountedPrice: '1,890',
            image: require('../../assets/Images/Homepageimg4.webp'),

        },


    ]

    const headerDetails = 'WishList'
    return (
        <ScrollView className='flex'>

            {/* Header */}
            <HeaderComponent
                headerDetails={headerDetails}
            />
            {/* Number of results */}
            <View className='border border-solid border-gray-300 p-5 px-8'>
                <Text className='text-lg '>{cardDetails.length} Results</Text>
            </View>
            {/* Cards */}
            <View className='flex-row items-center  flex-wrap mt-3'>
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

export default WishList