import React, {useEffect, useState, useRef, createContext} from 'react';
import {useOrientation} from '../hooks/useOrientation';
import {Dimensions} from 'react-native';

export const GameContext = createContext();

const GameContextProvider = ({children}) => {
  const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');
  const [isJumping, setIsJumping] = useState(false);
  const jumpersRef = useRef(null);
  const jumperRef = useRef(null);
  const COLORS = ['red', 'blue', 'yellow', 'green'];
  const [colorTurn, setColorTurn] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const {orientation} = useOrientation();
  const [jumperPos, setJumperPos] = useState(0);
  const PLAYER_SIZES = {
    height: 40,
    width: 40,
  };
  const JUMPERS_SIZES = {
    height: 250,
    width: 250,
  };

  useEffect(() => {
    const initPos = parseInt((screenHeight / 2) - (PLAYER_SIZES.height / 2));
    setJumperPos(initPos);
  }, [orientation]);

  const setColorRandom = () => {
    const color = Math.floor(Math.random() * COLORS.length);
    setColorTurn(COLORS[color]);
  };

  useEffect(() => {
    setColorRandom();
  }, []);

  return (
    <GameContext.Provider
      value={{
        isJumping,
        setIsJumping,
        jumpersRef,
        jumperRef,
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
      }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameContextProvider;
