import React from 'react';
import {Text} from 'react-native';

export const Score = ({score}) => {
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
