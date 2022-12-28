import React, {useEffect, useState, useContext} from 'react';
import {Animated, Easing} from 'react-native';
import {GameContext} from '../contexts/GameContext';

export const useGame = () => {
  const {
    gameOver,
    setGameOver,
    orientation,
    screenHeight,
    gameStart,
    setGameStart,
  } = useContext(GameContext);
  const [isJumping, setIsJumping] = useState(false);
  const COLORS = ['red', 'blue', 'yellow', 'green'];
  const [colorTurn, setColorTurn] = useState('');
  const [jumperPos, setJumperPos] = useState(0);
  const [maxJumpingPos, setMaxJumpingPos] = useState(0);
  const [jumperColorsPos, setJumperColorsPos] = useState(0);
  const [loadingGame, setLoadingGame] = useState(true);
  const [iteration, setIteration] = useState(0);
  const [jumperColorsRotation, setJumperColorsRotation] = useState(0);
  const [directionRotate, setDirectionRotate] = useState('right');
  const [velocity, setVelocity] = useState(4);
  const [animation, setAnimation] = useState(null);
  const [score, setScore] = useState(0);
  const PLAYER_SIZES = {
    height: 40,
    width: 40,
  };
  const JUMPERS_SIZES = {
    height: 250,
    width: 250,
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

  const canJumpAgain = () => {
    if (
      jumperColorsRotation >= 315 ||
      (jumperColorsRotation <= 45 && colorTurn === 'red')
    ) {
      return true;
    } else if (
      jumperColorsRotation >= 45 &&
      jumperColorsRotation <= 135 &&
      colorTurn === 'green'
    ) {
      return true;
    } else if (
      jumperColorsRotation >= 135 &&
      jumperColorsRotation <= 225 &&
      colorTurn === 'blue'
    ) {
      return true;
    } else if (
      jumperColorsRotation >= 225 &&
      jumperColorsRotation <= 315 &&
      colorTurn === 'yellow'
    ) {
      return true;
    }

    return false;
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

    if (!gameOver && gameStart) {
      if (!isJumping) {
        setJumperPos(value => value + velocity / 2);
      } else {
        setJumperPos(value => value - velocity / 2);
      }

      if (
        jumperPos + PLAYER_SIZES.height >=
        jumperColorsPos + JUMPERS_SIZES.height
      ) {
        if (canJumpAgain()) {
          setIsJumping(() => true);
          setScore(value => value + 5);
        } else {
          setGameOver(true);
        }
      }
      if (jumperPos <= maxJumpingPos) {
        setIsJumping(() => false);
        setColorTurn(() => setColorRandom());
      }
    }
  };

  const setColorRandom = (colorArray = COLORS) => {
    const color = Math.floor(Math.random() * colorArray.length);
    return colorArray[color];
  };

  const initAnimation = () => {
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
  };

  const restartGame = () => {
    const color = setColorRandom();
    setColorTurn(color);
    initAnimation();
    setGameStart(false);
    setGameOver(false);
    setJumperPos(maxJumpingPos);
    setScore(0);
  };

  useEffect(() => {
    setGameStart(false);
    setScore(0);
    initAnimation();
    const color = setColorRandom(['red', 'green', 'blue']);
    setColorTurn(color);
  }, []);

  useEffect(() => {
    resizePos();
  }, [orientation]);

  useEffect(() => {
    clearTimeout(window.fnInterval);
    window.fnInterval = setTimeout(function () {
      setIteration(value => value + 1);
      clearTimeout(window.fnInterval);
      window.fnInterval = null;
    }, 0);

    return () => {
      clearTimeout(window.fnInterval);
    };
  }, [window.fnInterval]);

  useEffect(() => {
    game();
  }, [iteration, directionRotate]);

  return {
    isJumping,
    setIsJumping,
    COLORS,
    colorTurn,
    setColorTurn,
    setColorRandom,
    PLAYER_SIZES,
    JUMPERS_SIZES,
    jumperPos,
    setJumperPos,
    jumperColorsPos,
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
    iteration,
    score,
    restartGame,
    gameOver,
    setGameOver,
    orientation,
    screenHeight,
    gameStart,
    setGameStart,
  };
};
