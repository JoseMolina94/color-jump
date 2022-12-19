import React, {useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useOrientation} from '../../hooks/useOrientation';
import {ColorJumpers} from "../../components/ColorJumpers";

export const GameHome = props => {
  const {orientation} = useOrientation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A202C',
      }}
    >
      <Text
        style={{
          color: 'white',
        }}
      >
        <ColorJumpers>
          <Text>HI</Text>
        </ColorJumpers>
      </Text>
    </View>
  );
};
