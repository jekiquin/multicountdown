import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import { deleteTimer, addTimer } from 'reducer/reducer';
import { useArchives, useTimers } from 'hoc/ContextProvider';
import { useRef } from 'react';
import ButtonContainer from 'components/ButtonContainer/ButtonContainer';
import TimerCtx from 'components/TimerCtx/TimerCtx';

const INTERVAL = 1000;
export default function Timer({ timer }) {
	const { dispatch } = useTimers();
	const { archiveDispatch } = useArchives();
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
					archiveDispatch(addTimer(timer));
					dispatch(deleteTimer(timer.id));
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
	const addBg = isActive ? 'bg-green-200' : 'bg-gray-200';
	const orderStyle = isActive ? { order: currentTime } : null;
	const widthStyle = { width: `${(currentTime / timer.time) * 100}%` };

	return (
		<div
			className="relative p-4 border rounded-xl w-11/12 max-w-2xl container mx-auto overflow-hidden order-last flex flex-wrap gap-4 justify-between"
			style={orderStyle}>
			<div className={`absolute top-0 left-0 h-full ${addBg} -z-10`} style={widthStyle}></div>
			<TimerCtx timerName={timer.name} totalTime={timer.time} currentTime={currentTime} />
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
