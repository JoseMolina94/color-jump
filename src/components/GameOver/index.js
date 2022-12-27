import React, { useContext } from "react";
import { Text } from "react-native";
import { GameContext } from "../../contexts/GameContext";

export const GameOver = () => {
  const {gameOver, setGameOver} = useContext(GameContext);
  
  return (
    gameOver && (
      <Text
        style={{
          fontSize: 70,
          color: 'white',
        }}>
        Game Over
      </Text>
    )
  )
}
