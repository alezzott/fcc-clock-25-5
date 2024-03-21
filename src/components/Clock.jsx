import { useCallback, useEffect, useRef, useState } from 'react';
import alarmSound from '../assets/sounds/alarm.mp3';
import { Time } from './Time';
import { TimerControl } from './TimeSetting';
import { TimeButton } from './TimeButton';

export function Clock() {
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timerLabel, setTimerLabel] = useState('Session');
    const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
    const [isRunning, setIsRunning] = useState(false);
    const audioRef = useRef(null);

    const handleReset = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setSessionLength(25);
        setBreakLength(5);
        setTimerLabel('Session');
        setTimeLeft(25 * 60);
        setIsRunning(false);
    };

    const handleSessionDecrement = (type) => {
        if (!isRunning && (type === 'session' ? sessionLength > 1 : breakLength > 1)) {
            type === 'session' ? setSessionLength(sessionLength - 1) : setBreakLength(breakLength - 1);
            if (timerLabel === 'Session') {
                setTimeLeft((type === 'session' ? sessionLength - 1 : breakLength) * 60);
            }
        }
    };

    const handleSessionIncrement = (type) => {
        if (!isRunning && (type === 'session' ? sessionLength < 60 : breakLength < 60)) {
            type === 'session' ? setSessionLength(sessionLength + 1) : setBreakLength(breakLength + 1);
            if (timerLabel === 'Session') {
                setTimeLeft((type === 'session' ? sessionLength + 1 : breakLength) * 60);
            }
        }
    };

    const handleStartAndStop = () => {
        setIsRunning(!isRunning);
    };

    const updateTime = useCallback(() => {
        if (timeLeft === 0) {
            audioRef.current.play();
            if (timerLabel === 'Session') {
                setTimerLabel('Break');
                setTimeLeft(breakLength * 60);
            } else {
                setTimerLabel('Session');
                setTimeLeft(sessionLength * 60);
            }
        } else {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }
    }, [timeLeft, sessionLength, breakLength, timerLabel, audioRef]);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(updateTime, 1000);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, updateTime]);

    return (
        <section className="max-lg:mb-16  max-w-lg p-6 mt-10  m-auto  border border-gray-200 rounded-lg shadow bg-[#454545] dark:border-gray-70">
            <Time timerLabel={timerLabel} timeLeft={timeLeft} />
            <TimeButton handleReset={handleReset} isRunning={isRunning} handleStartAndStop={handleStartAndStop} />
            <TimerControl
                id="break"
                label="Break Length"
                value={breakLength}
                onDecrement={handleSessionDecrement}
                onIncrement={handleSessionIncrement}
                sessionType="break"
            />
            <TimerControl
                id="session"
                label="Session Length"
                value={sessionLength}
                onDecrement={handleSessionDecrement}
                onIncrement={handleSessionIncrement}
                sessionType="session"
            />

            <audio id="beep" ref={audioRef} src={alarmSound} type="audio/wav" />
        </section>
    );
}
