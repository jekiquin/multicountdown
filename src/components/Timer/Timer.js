import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import { deleteTimer } from 'reducer/reducer';
import { useTimers } from 'hoc/ContextProvider';
import { timeFormatFromSeconds } from 'utils/timer-format';
import { useRef } from 'react';

const INTERVAL = 1000;
export default function Timer({ timer }) {
	const { dispatch } = useTimers();
	const [currentTime, setCurrentTime] = useState(timer.time);
	const [isActive, setIsActive] = useState(false);

	const timerInterval = useRef();

	useEffect(() => {
		if (isActive) {
			timerInterval.current = setInterval(() => {
				if (!currentTime) {
					clearInterval(timerInterval.current);
				}
				if (currentTime) {
					setCurrentTime((prevTime) => prevTime - 1);
				}
			}, INTERVAL);
		}
		return () => {
			console.log('cleared');
			clearInterval(timerInterval.current);
		};
	}, [isActive, currentTime]);

	const handlePlay = () => {
		setIsActive((prevState) => !prevState);
	};

	const handleDelete = () => {
		dispatch(deleteTimer(timer.id));
	};

	const handleReset = () => {
		setIsActive(false);
		setCurrentTime(timer.time);
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
