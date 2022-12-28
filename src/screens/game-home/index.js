import React, {useContext} from 'react';
import {View} from 'react-native';
import {ColorJumpers} from '../../components/ColorJumpers';
import {ScreenControls} from '../../components/ScreenControls';
import {Jumper} from '../../components/Jumper';
import {GameContext} from '../../contexts/GameContext';
import {GameOver} from '../../components/GameOver';
import {StartGame} from '../../components/StartGame';
import {Score} from '../../components/Score';

export const GameHome = () => {
  const {
    loadingGame,
    directionRotate,
    setDirectionRotate,
    gameStart,
    gameOver,
  } = useContext(GameContext);

  const validationControl = valueControl => {
    return valueControl !== directionRotate && gameStart && !gameOver;
  };

  return (
    !loadingGame && (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1A202C',
          position: 'relative',
        }}>
        <ScreenControls
          setState={setDirectionRotate}
          validation={validationControl}
        />
        <ColorJumpers directionRotate={directionRotate} />
        <Jumper />
        <Score />
        <StartGame />
        <GameOver />
      </View>
    )
  );
};
