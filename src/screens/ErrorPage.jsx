import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const Error404 = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      {/* SVG Icon */}
      <Svg
        width={150}
        height={150}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <Path d="M8 13v-1a4 4 0 1 1 8 0v1"></Path>
        <Path d="M5 12v-1a7 7 0 1 1 14 0v1"></Path>
        <Path d="M12 17v.01"></Path>
        <Path d="M12 21v.01"></Path>
      </Svg>

      {/* Text Content */}
      <Text className="text-2xl font-bold text-gray-800 mt-4">Page Not Found</Text>
      <Text className="text-gray-500 text-center mt-2">
        The page you are looking for doesn't exist or has been moved.
      </Text>

      {/* Go to Home Button */}
      <TouchableOpacity
        className="mt-6 bg-primary py-3 px-6 rounded-lg"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-white font-semibold">Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error404;
