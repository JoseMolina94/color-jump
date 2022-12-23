import React, {useState, useEffect, useContext} from 'react';
import {Image, Animated, Easing} from 'react-native';
import * as JumperAsset from '../../assets/Smile.png';
import { GameContext } from "../../contexts/GameContext";

export const Jumper = props => {
  const {
    colorTurn,
    PLAYER_SIZES,
    jumperPos,
    animation
  } = useContext(GameContext);

  return (
    <Animated.View
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
