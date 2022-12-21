import React, {useEffect, useState, useRef} from 'react';
import {View, TouchableOpacity, Animated, Easing} from 'react-native';
import {jumpersStyle} from './styles';

export const ColorJumpers = props => {
  const {
    children,
    directionRotate = ['0deg', '360deg'],
  } = props;
  let spinValue = new Animated.Value(0);
  const reference = useRef(null);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: directionRotate,
  });

  useEffect(() => {
    console.log('FF', reference);
  }, [reference]);

  return (
    <Animated.View
      ref={reference}
      style={{
        ...jumpersStyle,
        transform: [{rotate: spin}],
      }}>
      {children}
    </Animated.View>
  );
};
