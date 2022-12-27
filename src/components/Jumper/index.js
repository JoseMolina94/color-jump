import React, {useContext} from 'react';
import {Image, Animated} from 'react-native';
import * as JumperAsset from '../../assets/Smile.png';
import * as JumperDead from '../../assets/dead.png';
import {GameContext} from '../../contexts/GameContext';

export const Jumper = props => {
  const {colorTurn, PLAYER_SIZES, jumperPos, animation, gameOver} =
    useContext(GameContext);

  return (
    <Animated.View
      style={{
        height: !gameOver ? PLAYER_SIZES.height : PLAYER_SIZES.height * 0.8,
        width: PLAYER_SIZES.width,
        backgroundColor: colorTurn,
        transform: !gameOver ? [{scaleY: animation}] : [],
        position: 'absolute',
        top: jumperPos,
      }}>
      <Image
        source={!gameOver ? JumperAsset.default : JumperDead.default}
        style={{
          height: !gameOver ? PLAYER_SIZES.height : PLAYER_SIZES.height * 0.8,
          width: PLAYER_SIZES.width,
        }}
      />
    </Animated.View>
  );
};
