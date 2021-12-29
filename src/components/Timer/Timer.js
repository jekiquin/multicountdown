import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import { deleteTimer } from 'reducer/reducer';
import { useTimers } from 'hoc/ContextProvider';
import { timeFormatFromSeconds } from 'utils/timer-format';
import { useRef } from 'react';
import Button from 'components/Button/Button';

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
					setIsActive(false);
				}
				if (currentTime) {
					setCurrentTime((prevTime) => prevTime - 1);
				}
			}, INTERVAL);
		}
		return () => {
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
	const orderStyle = isActive ? { order: currentTime } : null;
	console.log(currentTime);

	return (
		<div
			className={`w-11/12 max-w-2xl container mx-auto flex justify-between order-last p-4 border rounded-xl order-last ${bgColor}`}
			style={orderStyle}>
			<div>
				<h2>{timer.name}</h2>
				<p>
					{timeFormatFromSeconds(currentTime)} | {timeFormatFromSeconds(timer.time)}
				</p>
			</div>
			<div>
				<Button label={playButton} handleClick={handlePlay} disabled={!currentTime} />
				<Button label="Reset" handleClick={handleReset} />
				<Button label="Delete" handleClick={handleDelete} />
			</div>
		</div>
	);
}

Timer.propTypes = {
	timer: PropTypes.object.isRequired
};
