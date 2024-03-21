import PropTypes from 'prop-types';
import { RiPlayFill, RiPauseFill, RiRestartLine } from 'react-icons/ri';

export const TimeButton = ({ isRunning, handleStartAndStop, handleReset }) => {
    return (
        <article className="mt-10 flex gap-5 m-auto justify-center">
            <button
                id="start_stop"
                className={`p-5 ${isRunning ? 'bg-[#d87607]' : 'bg-[#0fa968]'} text-xl rounded-lg`}
                onClick={handleStartAndStop}
            >
                {isRunning ? <RiPauseFill size={35} /> : <RiPlayFill size={35} />}
            </button>
            <button id="reset" className="p-5 bg-[#e41e2d] text-xl rounded-lg" onClick={handleReset}>
                <RiRestartLine size={35} />
            </button>
        </article>
    );
};

TimeButton.propTypes = {
    isRunning: PropTypes.bool.isRequired,
    handleStartAndStop: PropTypes.func.isRequired,
    handleReset: PropTypes.func.handleReset,
};
