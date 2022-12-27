import React, {useContext} from 'react';
import {GameContext} from '../../contexts/GameContext';
import {Text} from 'react-native';

export const Score = () => {
  const {score} = useContext(GameContext);

  return (
    <Text
      style={{
        color: 'white',
        fontSize: 30,
        position: 'absolute',
        top: 0,
      }}>
      {score}
    </Text>
  );
};
