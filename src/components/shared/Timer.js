import { memo, useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const Time = styled.p`
  font-weight: 700;
  font-size: calc(16px * ${({$ratio}) => $ratio});
  color: #4C6FCD;
`;

export const Timer = memo(({ className, isStart, shownTime, onFinish, initialTime = 0 }) => {
    const [time, setTime] = useState(initialTime);
    const ratio = useSizeRatio();
    const $interval = useRef(null);
    const $time = useRef(initialTime);
    const $restart = useRef(false);

    useEffect(() => {
        if (isStart) {
            if ($restart.current) {
                $time.current = initialTime;
                $restart.current = false;
            };

            if ($interval.current) {
                clearInterval($interval.current);
                $interval.current = null;
            }

            $interval.current = setInterval(() => {
                setTime($time.current);

                if ($time.current === 0) {
                    onFinish?.();
                    clearInterval($interval.current);
                    $interval.current = null;

                    return;
                }

                $time.current -= 1;
                
            }, 1000);
        }
        if (!isStart) {
            clearInterval($interval.current);
            $interval.current = null;
            if ($time.current === 0) {
                $restart.current = true;
            };
        }

        return () => {
            if ($interval.current) {
                clearInterval($interval.current);
                $interval.current = null;
            }
        }
    }, [initialTime, isStart, onFinish]);

    const getMinutes = useCallback(() => {
       const minutes = Math.floor(time / 60);
       return minutes > 9 ? minutes : `0${minutes}`;
    }, [time]);

    const getSeconds = useCallback(() => {
        const seconds = Math.floor(time % 60);
        return seconds > 9 ? seconds : `0${seconds}`;
    }, [time]);

    return (
        <TimerWrapper className={className}>
            <Time $ratio={ratio}>{shownTime ?? `${getMinutes()}:${getSeconds()}`}</Time>
        </TimerWrapper>
    );
});