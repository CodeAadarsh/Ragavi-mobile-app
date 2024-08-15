import { Image, StyleSheet, Text, View, Dimensions,ScrollView, FlatList, TouchableOpacity, TextInput, } from 'react-native';
import React,{useEffect} from 'react';
import ActivityLoading from '../components/ActivityLoading';
import ChevronLeft from "../../assets/SVG_Jsx/ChevronLeft"
import AddToWish from '../../assets/SVG_Jsx/AddToWish'
import Star from '../../assets/SVG_Jsx/Star'

const isLoading = false;
const { height } = Dimensions.get('window'); // Get the screen height
export type ScrollViewRef = ScrollView & {
  flashScrollIndicators: () => void;
};
const Productspage = () => {
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

  return (
    <>

    <ScrollView className='flex-1 bg-white'>
      {/* Carousel Images */}
      <View className="relative">
      <TouchableOpacity className="top-[7.5%] left-[7.5%] z-50  absolute ">
        
        <ChevronLeft/>
      </TouchableOpacity>
        <TouchableOpacity className="absolute bottom-[1%] shadow-xl z-50 right-3">
          <AddToWish/>
      </TouchableOpacity>
        <View>
      <ScrollView horizontal={true} snapToAlignment  persistentScrollbar={true} ref={scrollViewRef}>
          <Image className='' source={require('../../assets/Images/ProductImg1.png')} />
          <Image className='' source={require('../../assets/Images/ProductImg3.png')} />
          <Image className='' source={require('../../assets/Images/ProductImg3.png')} />
      </ScrollView>
      </View>
      
      </View>
      <View className="px-3 py-1  flex-row justify-between">
        <View className="shrink ">
        <Text className="font-semibold text-3xl">H&M</Text>
        <Text className="font-normal text-gray-600 text-sm">Short Blue Dress</Text>

        </View>
        <View className="flex  items-end">
        <Text className="font-semibold text-3xl">₹4,490/-</Text>
        <View className="flex-row">
       { [1,2,3,4,5].map((item,index)=>(<Star/>))}
        <Text className="font-normal text-gray-600  text-xs">(10)</Text>
        </View>
        </View>
      </View>
      <View className="p-4  flex-row justify-between -top-2">
        <View>
      <Text className="font-semibold text-[11%] ">SELECT SIZE</Text>
      <View className="flex-row justify-between space-x-2 flex-wrap w-[80%] ">
        <TouchableOpacity className="w-9 bg-[#F1F4FB] h-9 justify-center items-center my-3">
          <Text>S</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-9 bg-[#F1F4FB] h-9 justify-center items-center my-3">
          <Text>S</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-9 bg-[#F1F4FB] h-9 justify-center items-center my-3">
          <Text>S</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-9 bg-[#F1F4FB] h-9 justify-center items-center my-3">
          <Text>S</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-9 bg-[#F1F4FB] h-9 justify-center items-center my-3">
          <Text>S</Text>
        </TouchableOpacity>
 

      </View>

        </View>
        <TouchableOpacity>

      <Text className="font-semibold text-[11%] underline">SIZE CHART</Text>
        </TouchableOpacity>
      </View>
<View className="-my-5">
  <Text className="w-[90%] px-4">Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.</Text>
</View>
<View className="py-6 w-2/3 ">
  <Text className="w-[90%] px-4 my-2 font-bold text-base capitalize">SELECT DELIVERY LOCATION</Text>
  <View className="border py-2 mx-3 justify-between flex-row items-center rounded-full px-4">
    <TextInput placeholder='Enter Pincode'/>
    <TouchableOpacity>
    <ChevronLeft className="rotate-180"/>
    </TouchableOpacity>

  </View>
</View>
      

    </ScrollView>
      {/* Other content */}

      
      {/* Add to Cart Button */}
      <View className="w-full  py-5 px-8 justify-center z-40 items-center dropShadow-otherShadow bg-[#F8FAFF]  ">
        <TouchableOpacity className="bg-primary w-full justify-center items-center p-5" >
          <Text className="text-white font-semibold" >ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Productspage;
