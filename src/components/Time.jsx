import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Time = ({ timerLabel, timeLeft }) => {
    const [remainingTime, setRemainingTime] = useState(timeLeft);

    const formatTimeLeft = (timeLeft) => {
        const minutes = Math.floor(timeLeft / 60)
            .toString()
            .padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const percentage = ((timeLeft - remainingTime) / timeLeft) * 100;

    return (
        <article className="m-auto bg-[#242424] w-auto border p-10 rounded-lg">
            <h1 id="timer-label" className="pb-5 text-3xl font-mono">
                {timerLabel}
            </h1>
            <h1 id="time-left" className="text-3xl font-mono">
                <CircularProgressbar
                    value={percentage}
                    text={formatTimeLeft(timeLeft)}
                    strokeWidth={10}
                    styles={{
                        root: {},
                        path: { stroke: '#4caf50' },
                        trail: { stroke: '#f0f0f0' },
                        text: { fill: '#4caf50', fontSize: '16px' },
                    }}
                />
            </h1>
        </article>
    );
};

Time.propTypes = {
    timerLabel: PropTypes.string.isRequired,
    timeLeft: PropTypes.number.isRequired,
};
