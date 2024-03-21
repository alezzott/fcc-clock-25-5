import PropTypes from 'prop-types';
import { RxDoubleArrowDown, RxDoubleArrowUp } from 'react-icons/rx';

export const TimerControl = ({ id, label, value, onIncrement, onDecrement, sessionType }) => {
    const handleDecrement = () => {
        onDecrement(sessionType);
    };

    const handleIncrement = () => {
        onIncrement(sessionType);
    };

    return (
        <section className="mt-10">
            <h1 id={`${id}-label`} className="font-mono text-2xl">
                {label}
            </h1>
            <article className=" mt-5 gap-5 flex justify-center items-center ">
                <button
                    id={`${sessionType}-decrement`}
                    className="p-5 bg-[#7c7c7c] rounded-lg  text-2xl"
                    onClick={handleDecrement}
                >
                    <RxDoubleArrowDown size={35} />
                </button>
                <h2 id={`${id}-length`} className=" font-mono text-2xl w-auto px-3">
                    {value}
                </h2>
                <button
                    id={`${sessionType}-increment`}
                    className="p-5 bg-[#7c7c7c] rounded-lg text-2xl"
                    onClick={handleIncrement}
                >
                    <RxDoubleArrowUp size={35} />
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
