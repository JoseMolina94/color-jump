import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useOrientation} from '../../hooks/useOrientation';
import {ColorJumpers} from '../../components/ColorJumpers';
import {ScreenControls} from '../../components/ScreenControls';

export const GameHome = props => {
  const {orientation} = useOrientation();
  const [directionRotate, setDirectionRotate] = useState(['0deg', '360deg']);

  const validationControl = (valueControl) => {
    return valueControl[0] !== directionRotate[0] && valueControl[1] !== directionRotate[1]
  }
  
  return (
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
        valueRight={['0deg', '360deg']}
        valueLeft={['360deg', '0deg']}
        validation={validationControl}
      />
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
