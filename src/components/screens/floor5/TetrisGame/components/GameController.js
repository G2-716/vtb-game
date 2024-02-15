import {useEffect} from "react";

import { Action } from "../utils/input";
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

  return children(props);
};
