import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useOrientation} from '../../hooks/useOrientation';
import {ColorJumpers} from '../../components/ColorJumpers';
import {ScreenControls} from '../../components/ScreenControls';

export const GameHome = props => {
  const {orientation} = useOrientation();
  const [directionRotate, setDirectionRotate] = useState(['0deg', '360deg']);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A202C',
      }}>
      <ColorJumpers directionRotate={directionRotate}>
        <Text
          style={{
            color: 'white',
          }}>
          HI
        </Text>
      </ColorJumpers>
    </View>
  );
};
