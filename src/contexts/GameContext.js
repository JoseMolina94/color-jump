import React, {useEffect, useState, createContext} from 'react';
import {useOrientation} from '../hooks/useOrientation';
import {Animated, Dimensions, Easing} from 'react-native';

export const GameContext = createContext();

const GameContextProvider = ({children}) => {
  const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');
  const [isJumping, setIsJumping] = useState(false);
  const COLORS = ['red', 'blue', 'yellow', 'green'];
  const [colorTurn, setColorTurn] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const {orientation} = useOrientation();
  const [jumperPos, setJumperPos] = useState(0);
  const [maxJumpingPos, setMaxJumpingPos] = useState(0);
  const [jumperColorsPos, setJumperColorsPos] = useState(0);
  const [loadingGame, setLoadingGame] = useState(true);
  const [iteration, setIteration] = useState(0);
  const [jumperColorsRotation, setJumperColorsRotation] = useState(0);
  const [directionRotate, setDirectionRotate] = useState('right');
  const [velocity, setVelocity] = useState(3);
  const [animation, setAnimation] = useState(null);
  const PLAYER_SIZES = {
    height: 40,
    width: 40,
  };
  const JUMPERS_SIZES = {
    height: 250,
    width: 250,
  };

  const game = () => {
    if (directionRotate === 'right') {
      if (jumperColorsRotation >= 360) {
        setJumperColorsRotation(() => 0);
      } else {
        setJumperColorsRotation(value => value + velocity);
      }
    }
    if (directionRotate === 'left') {
      if (jumperColorsRotation <= 0) {
        setJumperColorsRotation(() => 360);
      } else {
        setJumperColorsRotation(value => value - velocity);
      }
    }

    if (!isJumping) {
      setJumperPos(value => value + 3);
    } else {
      setJumperPos(value => value - 3);
    }

    if (
      jumperPos + PLAYER_SIZES.height >=
      jumperColorsPos + JUMPERS_SIZES.height
    ) {
      setIsJumping(() => true);
    }
    if (jumperPos <= maxJumpingPos) {
      setIsJumping(() => false);
      setColorTurn(() => setColorRandom());
    }

    setIteration(value => value + 1);
  };

  const resizePos = () => {
    const initJumperPos = parseInt(screenHeight / 2 - PLAYER_SIZES.height / 2);
    const initJumperColorPos = parseInt(
      screenHeight / 2 - JUMPERS_SIZES.height / 2,
    );

    setJumperPos(initJumperPos);
    setMaxJumpingPos(initJumperPos - 50);
    setJumperColorsPos(initJumperColorPos);
    setLoadingGame(false);
  };

  const setColorRandom = () => {
    const color = Math.floor(Math.random() * COLORS.length);
    return COLORS[color];
  };

  useEffect(() => {
    const color = setColorRandom();
    setColorTurn(color);
  }, []);

  useEffect(() => {
    let animationValue = new Animated.Value(0);

    Animated.loop(
      Animated.timing(animationValue, {
        toValue: 2,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    const _animation = animationValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 0.5, 1],
    });

    setAnimation(_animation);
  }, []);

  useEffect(() => {
    resizePos();
  }, [orientation]);

  return (
    <GameContext.Provider
      value={{
        isJumping,
        setIsJumping,
        COLORS,
        colorTurn,
        setColorTurn,
        gameOver,
        setGameOver,
        orientation,
        setColorRandom,
        PLAYER_SIZES,
        JUMPERS_SIZES,
        jumperPos,
        setJumperPos,
        jumperColorsPos,
        screenWidth,
        screenHeight,
        loadingGame,
        setLoadingGame,
        maxJumpingPos,
        directionRotate,
        setDirectionRotate,
        jumperColorsRotation,
        velocity,
        setVelocity,
        animation,
        game,
        iteration
      }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameContextProvider;
