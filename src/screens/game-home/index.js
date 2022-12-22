import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ColorJumpers} from '../../components/ColorJumpers';
import {ScreenControls} from '../../components/ScreenControls';
import { Jumper } from "../../components/Jumper";

export const GameHome = props => {
  const [directionRotate, setDirectionRotate] = useState('right');

  const validationControl = (valueControl) => {
    return valueControl !== directionRotate;
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
        validation={validationControl}
      />
      <ColorJumpers directionRotate={directionRotate}/>
      <Jumper />
    </View>
  );
};
