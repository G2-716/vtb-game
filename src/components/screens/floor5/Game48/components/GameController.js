import {useEffect} from "react";

import { Action, actionForKey, actionIsDrop } from "../utils/input";
import { playerController } from "../utils/playerController";

import { useDropTime } from "../hooks/useDropTime";
import { useInterval } from "../hooks/useInterval";

export const GameController = ({
  active,
  children,
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer
}) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStats
  });

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (actionIsDrop(action)) resumeDropTime();
  };

  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);

    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) pauseDropTime();
      if (!dropTime) {
        return;
      }
      handleInput({ action });
    }
  };

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver
    });
  };

  const props = {
    pause: pauseDropTime,
    resume: resumeDropTime,
    input: (action) => handleInput({action})
  }

  useEffect(() => {
    if (active) {
      resumeDropTime()
    } else {
      pauseDropTime()
    }
  }, [active]);

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keyup', onKeyUp)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyUp, onKeyDown]);

  return children(props);
};
