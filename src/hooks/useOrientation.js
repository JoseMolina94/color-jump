import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export const useOrientation = () => {
  const [orientation, setOrientation] = useState('PORTRAIT');

  const getOrientation = () => {
    const dim = Dimensions.get('screen');
    if (dim.height >= dim.width) {
      setOrientation('PORTRAIT');
    } else if (dim.width >= dim.height) {
      setOrientation('LANDSCAPE');
    }
  };

  useEffect(() => {
    Dimensions.addEventListener('change', () => getOrientation());
  }, []);

  return {
    orientation,
  };
};
