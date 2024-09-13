import { View, Text, Image, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import ActivityLoading from '../components/ActivityLoading';
import LogoHeader from '../components/LogoHeader';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ProductCard from '../components/ProductCard';
import AddToWish from '../../assets/SVG_Jsx/AddToWish'
import { useNavigation } from '@react-navigation/native';

const isLoading = false;

const SearchPage = () => {
    const navigation = useNavigation();
    const cardDetails = [
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/CardImg1.png'),
            selectType: <AddToWish />

        },
        {
            discountAmount: '25%',
            itemName: 'Leheriya Kurta Set',
            mrp: '1,999',
            discountedPrice: '1,500',
            image: require('../../assets/Images/CardImg2.png'),
            selectType: <AddToWish />


        },
        {
            discountAmount: '16%',
            itemName: 'Leheriya Kurta Set',
            mrp: '2,999',
            discountedPrice: '1,890',
            image: require('../../assets/Images/CardImg3.png'),
            selectType: <AddToWish />


        },
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/CardImg4.png'),
            selectType: <AddToWish />


        },
        {
            discountAmount: '20%',
            itemName: 'Leheriya Kurta Set',
            mrp: '4,999',
            discountedPrice: '3,990',
            image: require('../../assets/Images/CardImg1.png'),
            selectType: <AddToWish />

        },
        {
            discountAmount: '16%',
            itemName: 'Leheriya Kurta Set',
            mrp: '2,999',
            discountedPrice: '1,890',
            image: require('../../assets/Images/CardImg3.png'),
            selectType: <AddToWish />


        },
    ]
  
    return (
        <>
                <LogoHeader backbutton={true} />
                <ScrollView className='flex-1 bg-white'>

<View className=' '>
    {/* Header */}

    <View className='px-4'>

        {/* Input */}


        <View className='  mt-5 flex-row items-center bg-gray-200 rounded'>
            <Image className='h-6 w-6 ml-4' source={require('../../assets/Images/Search.png')} />
            <TextInput onChangeText={(e)=>console.log(e)} style={{ fontFamily: 'Frutiger' }}
                placeholder='What do you looking for?'
                className='bg-gray-200 text-black h-12 flex-1 px-4'
            />
        </View>

        {/* Heading 2 */}
        <View className='flex flex-row justify-between my-8'>
            <Text style={{ fontFamily: 'Frutiger' }} className='text-3xl'>Search Results</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("SeeAll")}>
                <Text style={{ fontFamily: 'Frutiger' }} className='text-lg'>See All</Text>
            </TouchableOpacity>
        </View>


    </View>

    {/* Cards */}
    <View
        className='flex flex-row flex-wrap justify-center items-center' >
        {/* Cards */}
        {cardDetails.map((items, index) => (
            <View   key={index} className="w-1/2 items-center ">

            <ProductCard
              
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
</View>
</ScrollView>
        </>
       
    )
}

export default SearchPage
