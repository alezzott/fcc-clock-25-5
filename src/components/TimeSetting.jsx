import PropTypes from 'prop-types';

export const TimerControl = ({ id, label, value, onIncrement, onDecrement, sessionType }) => {
    const handleDecrement = () => {
        onDecrement(sessionType);
    };

    const handleIncrement = () => {
        onIncrement(sessionType);
    };

    return (
        <section className="mt-10">
            <h1 id={`${id}-label`}>{label}</h1>
            <article className="gap-6 flex justify-center items-center mt-5">
                <button
                    id={`${sessionType}-decrement`}
                    className="p-5 bg-slate-500 rounded-lg text-2xl"
                    onClick={handleDecrement}
                >
                    -
                </button>
                <h2 id={`${id}-length`} className="text-2xl w-auto">
                    {value}
                </h2>
                <button
                    id={`${sessionType}-increment`}
                    className="p-5 bg-slate-500 rounded-lg text-2xl"
                    onClick={handleIncrement}
                >
                    +
                </button>
            </article>
        </section>
    );
};

TimerControl.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    sessionType: PropTypes.string.isRequired,
};
