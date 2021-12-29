import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import { deleteTimer, setActive, resetTimer, countdown } from 'reducer/reducer';
import { useTimers } from 'hoc/ContextProvider';
import { timeFormatFromSeconds } from 'utils/timer-format';

const INTERVAL = 1000;
export default function Timer({ timer }) {
	const { dispatch } = useTimers();
	const [currentTime, setCurrentTime] = useState(timer.currentTime);
	const [isActive, setIsActive] = useState(timer.isActive);

	useEffect(() => {
		let timerInterval;

		timerInterval = setInterval(() => {
			if (!currentTime) {
				clearInterval(timerInterval);
				dispatch(deleteTimer(timer.id));
			}
			if (isActive && currentTime) {
				setCurrentTime((prevTime) => prevTime - 1);
				dispatch(countdown(timer.id));
			}
		}, INTERVAL);

		return () => {
			clearInterval(timerInterval);
		};
	});

	const handlePlay = () => {
		dispatch(setActive(timer.id, !isActive));
		setIsActive((prevIsActive) => !prevIsActive);
	};

	const handleDelete = () => {
		dispatch(deleteTimer(timer.id));
	};

	const handleReset = () => {
		setIsActive(false);
		setCurrentTime(timer.time);
		dispatch(setActive(timer.id, false));
		dispatch(resetTimer(timer.id));
	};

	const playButton = isActive ? 'Pause' : 'Play';
	const bgColor = isActive ? 'bg-green-100' : 'bg-gray-100';

	return (
		<div
			className={`w-11/12 max-w-2xl container mx-auto flex justify-between order-last p-4 border rounded-xl ${bgColor}`}
			style={{ order: currentTime }}>
			<div>
				<h2>{timer.name}</h2>
				<p>{timeFormatFromSeconds(currentTime)}</p>
			</div>
			<div>
				<button className="p-4 hover:bg-blue-200" onClick={handlePlay}>
					{playButton}
				</button>
				<button className="p-4 hover:bg-blue-200" onClick={handleReset}>
					Reset
				</button>
				<button className="p-4 hover:bg-blue-200" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
}

Timer.propTypes = {
	timer: PropTypes.object.isRequired
};
