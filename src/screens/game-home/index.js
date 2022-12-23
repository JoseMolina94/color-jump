import React, {Component, useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ColorJumpers} from '../../components/ColorJumpers';
import {ScreenControls} from '../../components/ScreenControls';
import {Jumper} from '../../components/Jumper';
import {GameContext} from '../../contexts/GameContext';

export const GameHome = () => {
  const {loadingGame, directionRotate, setDirectionRotate} = useContext(GameContext);

  const validationControl = valueControl => {
    return valueControl !== directionRotate;
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
      </View>
    )
  );
};
