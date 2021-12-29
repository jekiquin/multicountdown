import PropTypes from 'prop-types';
import { deleteTimer, addTimer } from 'reducer/reducer';
import { useArchives, useTimers } from 'hoc/ContextProvider';
import ButtonContainer from 'components/ButtonContainer/ButtonContainer';
import TimerCtx from 'components/TimerCtx/TimerCtx';

export default function Archive({ timer }) {
	const { archiveDispatch } = useArchives();
	const { dispatch } = useTimers();

	const handleDelete = () => {
		archiveDispatch(deleteTimer(timer.id));
	};

	const handleReset = () => {
		archiveDispatch(deleteTimer(timer.id));
		dispatch(addTimer(timer));
	};

	return (
		<div className="timer">
			<TimerCtx timerName={timer.name} totalTime={timer.time} currentTime={0} />
			<ButtonContainer
				handleReset={handleReset}
				handleDelete={handleDelete}
				disabled={true}
			/>
		</div>
	);
}

Archive.propTypes = {
	timer: PropTypes.object.isRequired
};
