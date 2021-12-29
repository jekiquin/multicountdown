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
		<div className="relative p-4 border rounded-xl w-11/12 max-w-2xl container mx-auto overflow-hidden order-last flex flex-wrap gap-4 justify-between">
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
