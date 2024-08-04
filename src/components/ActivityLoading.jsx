import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function CustomActivityLoading() {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };

    startRotation();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <StyledView className="flex-1 justify-center items-center bg-white">
      {/* Custom Circular Loader */}
      <Animated.View
        style={[
          {
            width: 50,
            height: 50,
            borderWidth: 4,
            borderColor: '#e5e7eb', // Light gray for the unfilled part
            borderTopColor: '#A50102', // Your primary color
            borderRadius: 25,
          },
          { transform: [{ rotate }] },
        ]}
        className="mb-4"
      />

      {/* Text */}
      <StyledText className="text-primary text-lg font-semibold text-center px-4">
        Sometimes it will take time, so be patient and hold tight.
      </StyledText>
    </StyledView>
  );
}
