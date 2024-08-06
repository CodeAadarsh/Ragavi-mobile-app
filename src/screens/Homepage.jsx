import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ActivityLoading from '../components/ActivityLoading';
import LogoHeader from '../components/LogoHeader';
const isLoading = false;
const Homepage = () => {

  if (isLoading) {
    return (
      <ActivityLoading />
    )
  }

  const homePageCarousalData = [
    {
      path :require('../../assets/Images/HomepageImg1.png')
    }
  ]
  return (
    <View className="flex-1 ">
      <View>
        <LogoHeader />
      </View>
      <View className=''>
        <Image style={styles.image1} source={homePageCarousalData[0].path} />
      </View>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  image1: {
    height: 412,
    width: 412,
  }
})