import PropTypes from 'prop-types';

export const Time = ({ timerLabel, timeLeft }) => {
    const formatTimeLeft = (timeLeft) => {
        const minutes = Math.floor(timeLeft / 60)
            .toString()
            .padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <article className="m-auto p-auto w-auto">
            <h1 id="timer-label">{timerLabel}</h1>
            <h1 id="time-left">{formatTimeLeft(timeLeft)}</h1>
        </article>
    );
};

Time.propTypes = {
    timerLabel: PropTypes.string.isRequired,
    timeLeft: PropTypes.number.isRequired,
};
