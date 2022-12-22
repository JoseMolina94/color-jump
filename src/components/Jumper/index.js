import React, {useState, useEffect, useContext} from 'react';
import {Image, Animated, Easing} from 'react-native';
import * as JumperAsset from '../../assets/Smile.png';
import { GameContext } from "../../contexts/GameContext";

export const Jumper = props => {
  const {
    colorTurn,
    PLAYER_SIZES,
    jumperPos,
    jumperRef
  } = useContext(GameContext);
  let animationValue = new Animated.Value(0);
  
  Animated.loop(
    Animated.timing(animationValue, {
      toValue: 2,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const animation = animationValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0.5, 1],
  });

  return (
    <Animated.View
      ref={jumperRef}
      style={{
        height: PLAYER_SIZES.height,
        width: PLAYER_SIZES.width,
        backgroundColor: colorTurn,
        transform: [{scaleY: animation}],
        position: 'absolute',
        top: jumperPos
      }}>
      <Image
        source={JumperAsset.default}
        style={{
          height: PLAYER_SIZES.height,
          width: PLAYER_SIZES.width,
        }}
      />
    </Animated.View>
  );
};
