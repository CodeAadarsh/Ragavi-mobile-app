import { View, Text, Image } from 'react-native';
import React from 'react';

const ProductCard = ({ discountAmount, itemName, mrp, discountedPrice, path }) => {
  return (
    <View className="mt-2 w-48 mx-1 shadow-2xl">
      <Image source={path} className="w-full h-80" />
      <View className="absolute top-2 left-2 bg-primary p-2">
        <Text className="text-white text-lg">-{discountAmount}</Text>
      </View>
      <View className="my-2">
        <Text className="text-xl font-semibold">{itemName}</Text>
        <View className="flex-row items-center m-2 ">
          <Text className="text-gray-400 line-through mr-2">{'\u20B9'}{mrp}</Text>
          <Text className="text-primary text-lg">{'\u20B9'}{discountedPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;