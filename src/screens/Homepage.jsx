import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import ActivityLoading from '../components/ActivityLoading';
import LogoHeader from '../components/LogoHeader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from '../components/ProductCard';
import HomePageCh from '../../assets/SVG_Jsx/HomePageCh'
import AddToWish from '../../assets/SVG_Jsx/AddToWish'
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

const isLoading = false;
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);


const Homepage = () => {
  const Navigation = useNavigation();
  if (isLoading) {
    return (
      <ActivityLoading />
    )
  }

  // Carousal Data is stored here add other image path here and use them below
  const homePageCarousalData = [
    {
      path: require('../../assets/Images/HomepageImg1.png')
    },
    {
      path: require('../../assets/Images/HomeCarousalImg1.png')
    },
    {
      path: require('../../assets/Images/HomeCarousalImg2.png')
    },
  ]

  const bestSellingData = [
    {
      name: 'Leheriya Kurta Set',
      mrp: 4999,
      price: 3990,
      path: require('../../assets/Images/Homepageimg5.png'),
    },
    {
      name: 'Black Mini Dress',
      mrp: 5999,
      price: 4499,
      path: require('../../assets/Images/bestSelling1.png'),
    },
    {
      name: 'Pink Suit Floral Design',
      mrp: 4000,
      price: 3499,
      path: require('../../assets/Images/bestSelling2.webp'),
    },
  ]

  const instagramData = [
    {
      path: require('../../assets/Images/HomePageImg13.webp'),
    },
    {
      path: require('../../assets/Images/HomePageImg13.webp'),
    },
    {
      path: require('../../assets/Images/HomePageImg13.webp'),
    },
  ]

  const cardDetails = [
    {
      discountAmount: '20%',
      itemName: 'Leheriya Kurta Set',
      mrp: '4,999',
      discountedPrice: '3,990',
      image: require('../../assets/Images/HomepageImg2.png'),
      selectType: <AddToWish />
    },
    {
      discountAmount: '25%',
      itemName: 'Leheriya Kurta Set',
      mrp: '1,999',
      discountedPrice: '1,500',
      image: require('../../assets/Images/Homepageimg3.webp'),
      selectType: <AddToWish />


    },
    {
      discountAmount: '16%',
      itemName: 'Leheriya Kurta Set',
      mrp: '2,999',
      discountedPrice: '1,890',
      image: require('../../assets/Images/Homepageimg4.webp'),
      selectType: <AddToWish />


    },
    {
      discountAmount: '20%',
      itemName: 'Leheriya Kurta Set',
      mrp: '4,999',
      discountedPrice: '3,990',
      image: require('../../assets/Images/Homepageimg5.png'),
      selectType: <AddToWish />


    },

  ]

  return (
    <>
      <View>
        <LogoHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-white">

        {/* Header */}


        {/* Carousal Code Not yet done */}
        <ScrollView horizontal={true}>
          {homePageCarousalData.map((item, index) => (

            <Pressable onPress={() => Navigation.navigate('Productspage')}
              key={index}>
              <Image className='h-80 w-full' style={styles.image1} source={item.path} />
            </Pressable>
          ))}
        </ScrollView>


        {/* New Arrivals */}

        <StyledView className="flex flex-row justify-between p-4">
          <StyledText className="text-3xl">
            New Arrivals
          </StyledText>
          <StyledTouchableOpacity onPress={() => Navigation.navigate('SeeAll')}>
            <StyledText className="text-lg font-normal">
              See All
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>

        {/* Grid Layout */}
        <StyledView className="flex flex-row flex-wrap justify-between ">
          {/* Cards */}
          {cardDetails.map((items, index) => (
            <StyledView
              key={index}
              className="w-[50%] mb-4"
            >
              <ProductCard
                discountAmount={items.discountAmount}
                itemName={items.itemName}
                mrp={items.mrp}
                discountedPrice={items.discountedPrice}
                path={items.image}
                selectType={items.selectType}
              />
            </StyledView>
          ))}
        </StyledView>


        {/* Exclusive for You */}
        <View>
          <StyledView className='flex flex-row justify-between p-4'>
            <Text style={{ fontFamily: 'Frutiger' }} className='text-3xl'>
              Excusive For You
            </Text>
            <TouchableOpacity onPress={() => Navigation.navigate('SeeAll')}>
              <Text style={{ fontFamily: 'Frutiger' }} className='text-lg font-normal'>
                See All
              </Text>
            </TouchableOpacity>
          </StyledView>

          <View className='flex flex-row items-center justify-center p-2'>
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
              <HomePageCh />
            </TouchableOpacity>
            <TouchableOpacity>
              <HomePageCh />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bestselling Beauties */}
        <View>
          <View className='flex flex-row justify-between p-4'>
            <Text style={{ fontFamily: 'Frutiger' }} className='text-3xl'>
              Bestselling Beauties
            </Text>
            <TouchableOpacity>
              <Text style={{ fontFamily: 'Frutiger' }} className='text-lg font-normal'>
                See All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal={true}>
          {bestSellingData.map((items, index) => (
            <Pressable onPress={() => { console.log('image is pressed') }}
              key={index}
              className='flex justify-center items-center'>

              <Image className='' style={styles.image1} source={items.path} />
              <View className="my-2">
                <Text style={{ fontFamily: 'Frutiger' }} className="text-xl font-semibold text-center">{items.name}</Text>
                <View className="flex-row items-center justify-center m-2 ">
                  <Text style={{ fontFamily: 'Frutiger' }} className="text-gray-400 line-through mr-2">{'\u20B9'}{items.mrp}</Text>
                  <Text style={{ fontFamily: 'Frutiger' }} className="text-primary text-lg">{'\u20B9'}{items.price}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>


        <Text style={{ fontFamily: 'Frutiger' }} className='text-3xl text-center m-2'>#Ragavi On Instagram</Text>
        <ScrollView horizontal={true}>
          {instagramData.map((items, index) => (
          <Pressable onPress={() => { console.log('image is pressed') }}
            className='flex items-center my-4 justify-center'
            key={index}>
            <Image className='' style={styles.image1} source={items.path}/>
          </Pressable>
          ))}
        </ScrollView>

          <Text style={{ fontFamily: 'Frutiger' }} className='text-center text-xl text-red-500 py-4'>Join Our World</Text>
      </ScrollView>
    </>

  )
}

export default Homepage

const styles = StyleSheet.create({
  image1: {
    objectFit: 'contain',
    height: 412,
    width: 412,
  }
})