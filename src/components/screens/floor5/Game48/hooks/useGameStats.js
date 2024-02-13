import { useState, useCallback } from "react";

const buildGameStats = () => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 1,
  points: 0
});

export const useGameStats = () => {
  const [gameStats, setGameStats] = useState(buildGameStats());

  const addLinesCleared = useCallback((lines) => {
    setGameStats((previous) => {
      const points = previous.points + lines * 100;
      const { linesPerLevel } = previous;
      const linesCompleted = previous.linesCompleted + lines;
      const level = Math.floor(linesCompleted / linesPerLevel) + 1;

      return {
        level,
        linesCompleted,
        linesPerLevel,
        points
      };
    }, []);
  }, []);

  return [gameStats, addLinesCleared];
};
