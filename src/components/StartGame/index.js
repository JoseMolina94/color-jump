import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {GameContext} from '../../contexts/GameContext';

export const StartGame = () => {
  const {gameStart, setGameStart} = useContext(GameContext);

  return (
    !gameStart && (
      <TouchableOpacity
        onPress={() => setGameStart(true)}
        style={{
          zIndex: 20,
        }}>
        <Text
          style={{
            fontSize: 70,
            color: 'white',
          }}>
          Tap to start
        </Text>
      </TouchableOpacity>
    )
  );
};
