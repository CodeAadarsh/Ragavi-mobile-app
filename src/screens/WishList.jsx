import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import ProductCard from '../components/ProductCard'
import { ScrollView } from 'react-native-gesture-handler'
import AddToBag from '../../assets/SVG_Jsx/AddToBag'
import { styled } from 'nativewind'

const WishList = () => {
    const StyledView = styled(View);
    const StyledText = styled(Text);
    const StyledTouchableOpacity = styled(TouchableOpacity);
    const cardDetails = [
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/HomepageImg2.png'),
            selectType : <AddToBag/>
        },
        {
            discountAmount: '25%',
            itemName: 'Leheriya Kurta Set',
            mrp: '1,999',
            discountedPrice: '1,500',
            image: require('../../assets/Images/Homepageimg3.webp'),
            selectType : <AddToBag/>

        },
        {
            discountAmount: '16%',
            itemName: 'Leheriya Kurta Set',
            mrp: '2,999',
            discountedPrice: '1,890',
            image: require('../../assets/Images/Homepageimg4.webp'),
            selectType : <AddToBag/>

        },
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/Homepageimg5.png'),
            selectType : <AddToBag/>

        },
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/HomepageImg2.png'),
            selectType : <AddToBag/>


        },
        {
            discountAmount: '16%',
            itemName: 'Leheriya Kurta Set',
            mrp: '2,999',
            discountedPrice: '1,890',
            image: require('../../assets/Images/Homepageimg4.webp'),
            selectType : <AddToBag/>


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
            <View className='flex flex-row flex-wrap justify-between '>
                {cardDetails.map((items, index) => (
                    <View className=" w-1/2 items-center justify-center">
                    <ProductCard
                        key={index}
                        discountAmount={items.discountAmount}
                        itemName={items.itemName}
                        mrp={items.mrp}
                        discountedPrice={items.discountedPrice}
                        path={items.image}
                        selectType={items.selectType}
                    />
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default WishList