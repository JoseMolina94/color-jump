import React from 'react';
import {View} from 'react-native';
import {jumpersStyle} from './styles';

export const ColorJumpers = props => {
  const {JUMPERS_SIZES, COLORS, jumperColorsPos, jumperColorsRotation} = props;

  return (
    <View
      style={{
        ...jumpersStyle({
          sizes: JUMPERS_SIZES,
          colors: COLORS,
          pos: jumperColorsPos,
        }),
        transform: [{rotate: jumperColorsRotation + 'deg'}],
      }}
    />
  );
};
