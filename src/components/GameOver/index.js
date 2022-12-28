import React, {useEffect, useState} from 'react';
import {Animated, Easing, Text, TouchableOpacity} from 'react-native';

export const GameOver = ({gameOver, restartGame}) => {
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    let animationValue = new Animated.Value(0);

    Animated.loop(
      Animated.timing(animationValue, {
        toValue: 2,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    const _animation = animationValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 0, 1],
    });

    setAnimation(_animation);
  }, [gameOver]);

  return (
    gameOver && (
      <TouchableOpacity
        onPress={() => restartGame()}
        style={{
          zIndex: 20,
        }}
      >
        <Text
          style={{
            fontSize: 70,
            color: 'white',
            textAlign: 'center',
          }}>
          Game Over
        </Text>

        <Animated.Text
          style={{
            fontSize: 15,
            color: 'white',
            textAlign: 'center',
            opacity: animation,
          }}>
          Tap to try again...
        </Animated.Text>
      </TouchableOpacity>
    )
  );
};
