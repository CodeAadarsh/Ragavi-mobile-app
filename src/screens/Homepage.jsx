import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import ActivityLoading from '../components/ActivityLoading';
import LogoHeader from '../components/LogoHeader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from '../components/ProductCard';


const isLoading = false;


const Homepage = () => {

  if (isLoading) {
    return (
      <ActivityLoading />
    )
  }

  // Carousal Data is stored here add other image path here and use them below
  const homePageCarousalData = [
    {
      path: require('../../assets/Images/HomepageImg1.png')
    }
  ]

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
      image: require('../../assets/Images/HomepageImg6.png'),

    },
    {
      discountAmount: '16%',
      itemName: 'Leheriya Kurta Set',
      mrp: '2,999',
      discountedPrice: '1,890',
      image: require('../../assets/Images/Homepageimg4.png'),

    },
    {
      discountAmount: '20%',
      itemName: 'Leheriya Kurta Set',
      mrp: '4,999',
      discountedPrice: '3,990',
      image: require('../../assets/Images/Homepageimg5.png'),

    },

  ]

  return (
    <ScrollView className="flex-1 ">

      {/* Header */}
      <View>
        <LogoHeader />
      </View>

      {/* Carousal Code Not yet done */}
      <Pressable onPress={() => { console.log('image is pressed') }}
        className=''>
        <Image style={styles.image1} source={homePageCarousalData[0].path} />
      </Pressable>


      {/* New Arrivals */}

      <View className='flex flex-row justify-between p-4'>
        <Text className='text-3xl'>
          New Arrivals
        </Text>
        <TouchableOpacity>
          <Text className='text-lg font-normal'>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View className='justify-center flex flex-row flex-wrap' >
        {/* Cards */}
        {cardDetails.map((items, index) => (
          <TouchableOpacity key={index}>

            <ProductCard
              key={index}
              discountAmount={items.discountAmount}
              itemName={items.itemName}
              mrp={items.mrp}
              discountedPrice={items.discountedPrice}
              path={items.image}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Exclusive for You */}
      <View>
        <View className='flex flex-row justify-between p-4'>
          <Text className='text-3xl'>
            Excusive For You
          </Text>
          <TouchableOpacity>
            <Text className='text-lg font-normal'>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View className='flex flex-wrap flex-row items-center justify-center p-2'>
          <TouchableOpacity>
            <Image className='mx-2' source={require('../../assets/Images/Homepageimg9.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image className='mx-2'
              source={require('../../assets/Images/HomepageImg8.png')} />
          </TouchableOpacity>
        </View>

        <View className='flex justify-center items-center'>
          <TouchableOpacity>
            <Image source={require('../../assets/Images/HomepageImg7.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/Images/HomepageImg7.png')} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bestselling Beauties */}
      <View>
        <View className='flex flex-row justify-between p-4'>
          <Text className='text-3xl'>
            Bestselling Beauties
          </Text>
          <TouchableOpacity>
            <Text className='text-lg font-normal'>
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Pressable onPress={() => { console.log('image is pressed') }}
        className='flex justify-center items-center'>
        <Image className=' w-11/12 my-2' source={require('../../assets/Images/Homepageimg5.png')} />
        <View className="my-2">
          <Text className="text-xl font-semibold text-center">{cardDetails[0].itemName}</Text>
          <View className="flex-row items-center justify-center m-2 ">
            <Text className="text-gray-400 line-through mr-2">{'\u20B9'}{cardDetails[0].mrp}</Text>
            <Text className="text-primary text-lg">{'\u20B9'}{cardDetails[0].discountedPrice}</Text>
          </View>
        </View>
      </Pressable>

      <Text className='text-3xl text-center m-2'>#Ragavi On Instagram</Text>
      <Pressable onPress={() => { console.log('image is pressed') }}
        className='flex items-center my-4 justify-center'>
        <Image className='w-11/12' source={require('../../assets/Images/HomepageImg12.png')} />
      </Pressable>

    </ScrollView>
  )
}

export default Homepage

const styles = StyleSheet.create({
  image1: {
    height: 412,
    width: 412,
  }
})