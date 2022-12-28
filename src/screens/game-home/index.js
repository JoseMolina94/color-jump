import React from 'react';
import {View} from 'react-native';
import {ColorJumpers} from '../../components/ColorJumpers';
import {ScreenControls} from '../../components/ScreenControls';
import {Jumper} from '../../components/Jumper';
import {useGame} from '../../hooks/useGame';
import {GameOver} from '../../components/GameOver';
import {StartGame} from '../../components/StartGame';
import {Score} from '../../components/Score';

export const GameHome = () => {
  const {
    COLORS,
    colorTurn,
    PLAYER_SIZES,
    JUMPERS_SIZES,
    jumperPos,
    jumperColorsPos,
    loadingGame,
    directionRotate,
    setDirectionRotate,
    jumperColorsRotation,
    animation,
    score,
    restartGame,
    gameOver,
    orientation,
    gameStart,
    setGameStart,
  } = useGame();

  const validationControl = valueControl => {
    return valueControl !== directionRotate && gameStart && !gameOver;
  };

  return (
    !loadingGame && (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1A202C',
          position: 'relative',
        }}>
        <ScreenControls
          setState={setDirectionRotate}
          validation={validationControl}
          orientation={orientation}
        />
        <ColorJumpers
          JUMPERS_SIZES={JUMPERS_SIZES}
          COLORS={COLORS}
          jumperColorsPos={jumperColorsPos}
          jumperColorsRotation={jumperColorsRotation}
          directionRotate={directionRotate}
        />
        <Jumper
          colorTurn={colorTurn}
          PLAYER_SIZES={PLAYER_SIZES}
          jumperPos={jumperPos}
          animation={animation}
          gameOver={gameOver}
        />
        <Score score={score} />
        <StartGame gameStart={gameStart} setGameStart={setGameStart} />
        <GameOver gameOver={gameOver} restartGame={restartGame} />
      </View>
    )
  );
};
