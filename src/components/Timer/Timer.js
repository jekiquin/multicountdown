import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import { deleteTimer } from 'reducer/reducer';
import { useTimers } from 'hoc/ContextProvider';
import { timeFormatFromSeconds } from 'utils/timer-format';
import { useRef } from 'react';
import ButtonContainer from 'components/ButtonContainer/ButtonContainer';

const INTERVAL = 1000;
export default function Timer({ timer }) {
	const { dispatch } = useTimers();
	const [currentTime, setCurrentTime] = useState(timer.time);
	const [isActive, setIsActive] = useState(false);

	const timerInterval = useRef();

	useEffect(() => {
		if (isActive) {
			timerInterval.current = setInterval(() => {
				if (currentTime) {
					setCurrentTime((prevTime) => prevTime - 1);
				}
				if (!currentTime) {
					setIsActive(false);
					clearInterval(timerInterval.current);
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

	const playButton = isActive ? 'pause' : 'play';
	const bgColor = isActive ? 'bg-green-100' : 'bg-gray-100';
	const orderStyle = isActive ? { order: currentTime } : null;

	return (
		<div
			className={`p-4 border rounded-xl w-11/12 max-w-2xl container mx-auto flex flex-wrap gap-4 justify-between order-last  order-last ${bgColor}`}
			style={orderStyle}>
			<div>
				<h2>{timer.name}</h2>
				<p>
					{timeFormatFromSeconds(currentTime)} | {timeFormatFromSeconds(timer.time)}
				</p>
			</div>
			<ButtonContainer
				playButton={playButton}
				handlePlay={handlePlay}
				handleReset={handleReset}
				handleDelete={handleDelete}
				disabled={!currentTime}
			/>
		</div>
	);
}

Timer.propTypes = {
	timer: PropTypes.object.isRequired
};
