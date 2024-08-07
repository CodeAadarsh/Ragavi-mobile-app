import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import ActivityLoading from '../components/ActivityLoading';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LogoHeader from '../components/LogoHeader';
import SearchIcon from '../../assets/SVG_Jsx/SearchIcon'

const isLoading = false;

const categories = [
  'Suits', 'Kurta', 'Indian Wear', 'Western', 'Collection', 'Sale', 'Mens', 'Dresses', 'Pants'
];

const SearchPageCategories = () => {
  if (isLoading) {
    return (
      <ActivityLoading />
    )
  }
  return (
    <View className='flex-1'>

      {/* Header */}
      <LogoHeader />


      {/* Input */}
      <View className='p-1 mx-5 mt-10 flex-row items-center bg-gray-200 rounded'>
        <SearchIcon/>
        <TextInput
          placeholder='What do you looking for?'
          className='bg-gray-200 h-12 flex-1 px-4'
        />
      </View>

      {/* Categories */}
      <ScrollView className='mt-10'>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} className='py-2 border-b border-t border-gray-300'>
            <Text className='text-lg mx-5'>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default SearchPageCategories
