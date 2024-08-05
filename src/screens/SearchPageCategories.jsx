import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import ActivityLoading from '../components/ActivityLoading';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

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
    <View className='flex-1 m-5'>

      {/* Header */}
      <View className='mt-16 flex flex-row justify-between'>
        <TouchableOpacity>
          <Image
            style={{ width: 120, height: 40, resizeMode: 'contain' }}
            source={require('../../assets/Images/RagaviLogo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
            source={require('../../assets/Images/ShoppingCart.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Input */}
      <View className='mt-10 flex-row items-center bg-gray-200 rounded'>
        <Image className='h-6 w-6 ml-4' source={require('../../assets/Images/Search.png')} />
        <TextInput
          placeholder='What do you looking for?'
          className='bg-gray-200 h-12 flex-1 px-4'
        />
      </View>

      {/* Categories */}
      <ScrollView className='mt-10'>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} className='py-4 border-b border-t border-gray-300'>
            <Text className='text-lg'>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default SearchPageCategories
