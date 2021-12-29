import PropTypes from 'prop-types';
import { timeFormatFromSeconds } from 'utils/timer-format';

export default function TimerCtx({ timerName, totalTime, currentTime }) {
	return (
		<div>
			<h2 className="text-lg font-semibold">{timerName}</h2>
			<p>
				{timeFormatFromSeconds(currentTime)} | {timeFormatFromSeconds(totalTime)}
			</p>
		</div>
	);
}

TimerCtx.propTypes = {
	timerName: PropTypes.string.isRequired,
	totalTime: PropTypes.number.isRequired,
	currentTime: PropTypes.number.isRequired
};
