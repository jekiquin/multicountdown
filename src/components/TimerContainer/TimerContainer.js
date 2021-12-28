import Timer from 'components/Timer/Timer';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

export default function TimerContainer({ timers }) {
	const displayTimers = timers.map((timer) => <Timer key={uuid()} timer={timer} />);
	return <section>{displayTimers}</section>;
}

TimerContainer.propTypes = {
	timers: PropTypes.array.isRequired
};
