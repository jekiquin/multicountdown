import PropTypes from 'prop-types';
import { timeFormatFromSeconds } from 'utils/timer-format';

export default function Timer({ timer }) {
	return (
		<div className="w-11/12 max-w-2xl container mx-auto flex justify-between ">
			<div>
				<h2>{timer.name}</h2>
				<p>{timeFormatFromSeconds(timer.time)}</p>
			</div>
			<div>
				<button className="border">Play</button>
				<button className="border">Reset</button>
				<button className="border">Delete</button>
			</div>
		</div>
	);
}

Timer.propTypes = {
	timer: PropTypes.object.isRequired
};
