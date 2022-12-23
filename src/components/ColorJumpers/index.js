import React, {useContext} from 'react';
import {View} from 'react-native';
import {jumpersStyle} from './styles';
import {GameContext} from '../../contexts/GameContext';

export const ColorJumpers = props => {
  const {children} = props;
  const {
    JUMPERS_SIZES,
    COLORS,
    jumperColorsPos,
    jumperColorsRotation,
  } = useContext(GameContext);

  return (
    <View
      style={{
        ...jumpersStyle({
          sizes: JUMPERS_SIZES,
          colors: COLORS,
          pos: jumperColorsPos,
        }),
        transform: [{rotate: jumperColorsRotation + 'deg'}],
      }}>
      {children}
    </View>
  );
};
