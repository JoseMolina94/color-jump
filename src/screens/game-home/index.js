import React, {useEffect, useContext} from 'react';
import {View} from 'react-native';
import {ColorJumpers} from '../../components/ColorJumpers';
import {ScreenControls} from '../../components/ScreenControls';
import {Jumper} from '../../components/Jumper';
import {GameContext} from '../../contexts/GameContext';
import {GameOver} from '../../components/GameOver';
import {StartGame} from '../../components/StartGame';
import { Score } from "../../components/Score";

export const GameHome = () => {
  const {loadingGame, directionRotate, setDirectionRotate, game, iteration} =
    useContext(GameContext);

  const validationControl = valueControl => {
    return valueControl !== directionRotate;
  };

  useEffect(() => {
    clearTimeout(window.fnInterval);
    window.fnInterval = setTimeout(function () {
      game();
      clearTimeout(window.fnInterval);
      window.fnInterval = null;
    }, 0);

    return () => {
      clearTimeout(window.fnInterval);
    };
  }, [directionRotate, iteration]);

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
