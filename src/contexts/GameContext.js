import React, {useState, createContext} from 'react';
import {useOrientation} from '../hooks/useOrientation';
import {Dimensions} from 'react-native';

export const GameContext = createContext();

const GameContextProvider = ({children}) => {
  const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');
  const [gameOver, setGameOver] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const {orientation} = useOrientation();

  return (
    <GameContext.Provider
      value={{
        gameOver,
        setGameOver,
        orientation,
        screenWidth,
        screenHeight,
        gameStart,
        setGameStart,
      }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameContextProvider;
