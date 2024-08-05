import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ActivityLoading from '../components/ActivityLoading';

const isLoading = false;
const { height } = Dimensions.get('window'); // Get the screen height

const Productspage = () => {
  if (isLoading) {
    return (
      <ActivityLoading />
    );
  }

  return (
    <View className='flex-1'>
      {/* Carousel Images */}
      <ScrollView className=''>
        <View className=''>
          <Image className='' source={require('../../assets/Images/ProductImg1.png')} />
        </View>
        <View >
          <Image className='' source={require('../../assets/Images/ProductImg3.png')} />
        </View>
        <View>
          <Image className='' source={require('../../assets/Images/ProductImg3.png')} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Productspage;
