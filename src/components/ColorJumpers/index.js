import React, {useEffect, useState, useRef} from 'react';
import {View} from 'react-native';
import {jumpersStyle} from './styles';

export const ColorJumpers = props => {
  const {children, directionRotate = 'right', velocity = 1} = props;
  const [rotation, setRotation] = useState(0);
  const [iteration, setIteration] = useState(0);
  const reference = useRef(null);
  let timer = null;

  const spin = () => {
    timer = setTimeout(() => {
      if (directionRotate === 'right') {
        if (rotation >= 360) {
          setRotation(0);
        } else {
          setRotation(rotation + velocity);
        }
      }
      if (directionRotate === 'left') {
        if (rotation <= 0) {
          setRotation(360);
        } else {
          setRotation(rotation - velocity);
        }
      }
      setIteration(iteration + 1);
      clearTimeout(timer);
    }, 0);
  };

  useEffect(() => {
    spin();
  }, [iteration]);

  return (
    <View
      ref={reference}
      style={{
        ...jumpersStyle,
        transform: [{rotate: rotation + 'deg'}],
      }}>
      {children}
    </View>
  );
};
