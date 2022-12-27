import React, {useContext, useEffect, useState} from 'react';
import {Animated, Easing, TouchableOpacity} from 'react-native';
import {GameContext} from '../../contexts/GameContext';

export const StartGame = () => {
  const {gameStart, setGameStart} = useContext(GameContext);
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
  }, [gameStart]);

  return (
    !gameStart && (
      <TouchableOpacity
        onPress={() => setGameStart(true)}
        style={{
          zIndex: 20,
        }}>
        <Animated.Text
          style={{
            fontSize: 70,
            color: 'white',
            opacity: animation,
          }}>
          Tap to start
        </Animated.Text>
      </TouchableOpacity>
    )
  );
};
