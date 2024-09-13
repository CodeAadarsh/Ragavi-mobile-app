import { Image, StyleSheet, Text, View, Dimensions, ScrollView, FlatList, TouchableOpacity, TextInput, } from 'react-native';
import React, { useEffect, useState } from 'react';
import ActivityLoading from '../components/ActivityLoading';
import ChevronLeft from "../../assets/SVG_Jsx/ChevronLeft"
import AddToWish from '../../assets/SVG_Jsx/AddToWish'
import Star from '../../assets/SVG_Jsx/Star'
import ProductCard from '../components/ProductCard';
import ChevronRight from '../../assets/SVG_Jsx/ChevronRight'
import IndiaSign from '../../assets/SVG_Jsx/IndiaSign'
import HandSign from '../../assets/SVG_Jsx/HandSign'
import DeliverySign from '../../assets/SVG_Jsx/DeliverySign'
import { useNavigation, useRoute } from '@react-navigation/native';
const isLoading = false;
const { height } = Dimensions.get('window'); // Get the screen height

export type ScrollViewRef = ScrollView & {
  flashScrollIndicators: () => void;
};

const Productspage = () => {
  const Route = useRoute();
  console.log(Route.params)
  const Navigation = useNavigation();
  const scrollViewRef = React.useRef<ScrollViewRef | null>(null);
  useEffect(() => {
    setTimeout(function () {
      scrollViewRef.current?.flashScrollIndicators();
    }, 500);
  }, []);
  if (isLoading) {
    return (
      <ActivityLoading />
    );
  }
  const [isPressed, setIsPressed] = useState([false, false, false, false, false]);

  const handlePress = (index) => {
    setIsPressed((prevIsPressed) => {
      const newIsPressed = prevIsPressed.map((item, i) => (i === index ? !item : false));
      return newIsPressed;
    });
  };
  const handlePressBack = () =>{
    Navigation.goBack()
  }
  const youMayLikeData = [
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

      <ScrollView ref={scrollViewRef} className='flex-1 bg-white'>
        {/* Carousel Images */}
        <View className="relative">
          <TouchableOpacity className="top-[7.5%] left-[7.5%] z-50  absolute " onPress={handlePressBack}>

            <ChevronLeft />
          </TouchableOpacity>
          <TouchableOpacity className="absolute bottom-[1%] shadow-xl z-50 right-3">
            <AddToWish />
          </TouchableOpacity>
          <View>
            <ScrollView horizontal={true} >
              <Image className='' source={require('../../assets/Images/ProductImg1.png')} />
              <Image className='' source={require('../../assets/Images/ProductImg3.png')} />
              <Image className='' source={require('../../assets/Images/ProductImg3.png')} />
            </ScrollView>
          </View>

        </View>



        <View className="px-3 py-1  flex-row justify-between">
          <View className="shrink ">
            <Text style={{ fontFamily: 'Frutiger' }} className="font-normal text-3xl">H&M</Text>
            <Text style={{ fontFamily: 'Frutiger' }} className="font-normal text-[#b4b4b4] text-sm">Short Blue Dress</Text>

          </View>
          <View className="flex  items-end">
            <Text style={{ fontFamily: 'Frutiger' }} className="font-semibold text-3xl">₹{Route.params?.productData.discountedPrice}/-</Text>
            <View className="flex-row mr-4">
              {[1, 2, 3, 4, 5].map((item, index) => (<Star key={index} />))}
              <Text style={{ fontFamily: 'Frutiger' }} className="font-normal text-gray-600  text-xs">(10)</Text>
            </View>
          </View>
        </View>


        <View className="p-4  flex-row justify-between -top-2">
          <View>
            <Text style={{ fontFamily: 'Frutiger' }} className="font-bold text-xs ">SELECT SIZE</Text>
            <View className="flex-row justify-between space-x-2 flex-wrap w-[80%] ">

              { ["S", "M", "L", "XL", "XXL"].map((items, index) => (
                <TouchableOpacity key={index} onPress={() => handlePress(index)} className={`w-9 h-9 justify-center items-center my-3 ${isPressed[index] ? 'bg-primary' : 'bg-[#F1F4FB]'}`}>
                  <Text style={{ fontFamily: 'Frutiger' }} className={`${isPressed[index] ? 'text-white' : 'text-black'} `}>{items}</Text>
                </TouchableOpacity>
              ))}


            </View>

          </View>

          <TouchableOpacity>

            <Text style={{ fontFamily: 'Frutiger' }} className="text-xs font-bold underline">SIZE CHART</Text>
          </TouchableOpacity>
        </View>



        <View className="-my-5">
          <Text style={{ fontFamily: 'Frutiger' }} className="w-[90%] px-4 text-lg font-light">Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.</Text>
        </View>
        <View className="py-6 w-2/3 ">
          <Text style={{ fontFamily: 'Frutiger' }} className="w-[90%] px-4 my-2 font-bold text-lg">SELECT DELIVERY LOCATION</Text>
          <View className="border py-2 mx-3 justify-between flex-row items-center rounded-full px-4">
            <TextInput style={{ fontFamily: 'Frutiger' }} placeholder='Enter Pincode' />
            <TouchableOpacity>
              <ChevronLeft className="rotate-180" />
            </TouchableOpacity>

          </View>
        </View>



        {/* 3 Wierd Signs */}
        <View className='flex flex-row justify-around pb-2'>
          <View className='flex justify-center items-center flex-wrap '>
            <IndiaSign />
            <Text style={{ fontFamily: 'Frutiger' }} className='text-base font-normal text-center mb-3'>Made in India</Text>
          </View>
          <View className='flex justify-center items-center flex-wrap w-[20%]'>
            <HandSign />
            <Text style={{ fontFamily: 'Frutiger' }} className='text-base font-normal text-center'>Handcrafted with love</Text>
          </View>
          <View className='flex justify-center items-center flex-wrap w-[20%]'>
            <DeliverySign />
            <Text style={{ fontFamily: 'Frutiger' }} className='text-base font-normal text-center'>Pan India Delivery</Text>
          </View>
        </View>


        {/* Product Info */}
        <View className=''>
          <TouchableOpacity className='py-3 px-8 flex flex-row justify-between border border-[#f2f2f2]'>
            <Text style={{ fontFamily: 'Frutiger' }} className='text-xl'>Product info</Text>
            <View className='-rotate-90'><ChevronRight /></View>
          </TouchableOpacity>

          <View className='py-3 px-8 '>
            <Text style={{ fontFamily: 'Frutiger' }} className='text-lg'>
              Color: Nude
            </Text>
            <Text style={{ fontFamily: 'Frutiger' }} className='text-lg'>
              Type : Dress
            </Text>
            <Text style={{ fontFamily: 'Frutiger' }} className='text-lg'>
              Fabric : Chiffon
            </Text>
            <Text style={{ fontFamily: 'Frutiger' }} className='text-lg'>
              Work : SOLID
            </Text>
          </View>
        </View>

        {/* Care Guide Button */}
        <TouchableOpacity className='py-3 px-8 flex flex-row justify-between border border-[#f2f2f2]'>
          <Text style={{ fontFamily: 'Frutiger' }} className='text-xl'>Care Guide</Text>
          <View><ChevronRight /></View>
        </TouchableOpacity>
        <TouchableOpacity className='py-3 px-8 flex flex-row justify-between border border-[#f2f2f2]'>
          <Text style={{ fontFamily: 'Frutiger' }} className='text-xl'>Additional Info</Text>
          <View><ChevronRight /></View>
        </TouchableOpacity>

        {/* You May Also Like */}

        <View>
          <View className='flex flex-row justify-between p-4'>
            <Text style={{ fontFamily: 'Frutiger' }} className='text-3xl'>
              You May Also Like
            </Text>
            <TouchableOpacity>
              <Text style={{ fontFamily: 'Frutiger' }} className='text-lg font-normal'>
                See All
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView horizontal={true} className='m-5 space-x-4'>
          {youMayLikeData.map((items, index) => (
            <ProductCard
              key={index}
              discountAmount={items.discountAmount}
              itemName={items.itemName}
              mrp={items.mrp}
              discountedPrice={items.discountedPrice}
              path={items.image}
              selectType={items.selectType}
            />
          ))}
        </ScrollView>


      </ScrollView>


      {/* Add to Cart Button */}
      <View className="w-full  py-5 px-8 justify-center z-40 items-center dropShadow-otherShadow bg-[#F8FAFF]  ">
        <TouchableOpacity className="bg-primary w-full justify-center items-center p-5" >
          <Text style={{ fontFamily: 'Frutiger' }} className="text-white font-semibold" >ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Productspage;

const styles = StyleSheet.create({
  youMayLikest: {
    margin: 10,
    padding: 1
  }
})