import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';

export const ScreenControls = props => {
  const {
    setState = state => {},
    valueLeft = 'left',
    valueRight = 'right',
    validation = valueControl => {},
    orientation = '',
  } = props;
  const [size, setSize] = useState({});

  useEffect(() => {
    const {width, height} = Dimensions.get('screen');
    setSize({
      width: width / 2,
      height,
    });
  }, [orientation]);

  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        flexWrap: 'wrap',
        flexDirection: 'row',
        zIndex: 10,
      }}>
      <TouchableOpacity
        style={{
          height: size.height,
          width: size.width,
        }}
        onPress={() => {
          if (validation(valueLeft)) {
            setState(valueLeft);
          }
        }}
      />
      <TouchableOpacity
        style={{
          height: size.height,
          width: size.width,
        }}
        onPress={() => {
          if (validation(valueRight)) {
            setState(valueRight);
          }
        }}
      />
    </View>
  );
};
