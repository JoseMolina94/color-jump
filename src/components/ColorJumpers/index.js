import React from 'react';
import {View, TouchableOpacity, Animated, Easing} from 'react-native';
import {jumpersStyle} from './styles';

export const ColorJumpers = props => {
  const {children} = props;
  let spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={{
        ...jumpersStyle,
        transform: [{rotate: spin}],
      }}>
      {children}
    </Animated.View>
  );
};
