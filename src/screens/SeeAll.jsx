import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import ProductCard from '../components/ProductCard'
import { ScrollView } from 'react-native-gesture-handler'
import AddToBag from '../../assets/SVG_Jsx/AddToBag'
import { styled } from 'nativewind'
import FilterComponent from '../components/FilterComponent'
import LogoHeader from '../components/LogoHeader'
const SeeAll = () => {
    const cardDetails = [
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/HomepageImg2.png'),
            selectType: <AddToBag />
        },
        {
            discountAmount: '25%',
            itemName: 'Leheriya Kurta Set',
            mrp: '1,999',
            discountedPrice: '1,500',
            image: require('../../assets/Images/Homepageimg3.webp'),
            selectType: <AddToBag />

        },
        {
            discountAmount: '16%',
            itemName: 'Leheriya Kurta Set',
            mrp: '2,999',
            discountedPrice: '1,890',
            image: require('../../assets/Images/Homepageimg4.webp'),
            selectType: <AddToBag />

        },
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/Homepageimg5.png'),
            selectType: <AddToBag />

        },
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/HomepageImg2.png'),
            selectType: <AddToBag />


        },
        {
            discountAmount: '16%',
            itemName: 'Leheriya Kurta Set',
            mrp: '2,999',
            discountedPrice: '1,890',
            image: require('../../assets/Images/Homepageimg4.webp'),
            selectType: <AddToBag />


        },


    ]
    const headerDetails = ''
    return (
        <>
            {/* <View className='bg-white'> */}
                <LogoHeader backbutton={true}
                // headerDetails={headerDetails}
                />
                <FilterComponent />
                <ScrollView showsVerticalScrollIndicator={false} className='flex bg-white'>



                    <View className='flex flex-row flex-wrap justify-between '>
                        {cardDetails.map((items, index) => (
                            <View
                                key={index}
                                className=" w-1/2 items-center justify-center">
                                <ProductCard
                                    discountAmount={items.discountAmount}
                                    itemName={items.itemName}
                                    mrp={items.mrp}
                                    discountedPrice={items.discountedPrice}
                                    path={items.image}
                                    selectType={items.selectType}
                                // fromWhere="wish"
                                />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            {/* </View> */}

        </>
    )
}

export default SeeAll