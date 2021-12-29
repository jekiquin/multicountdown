import Timer from 'components/Timer/Timer';
import { useTimers } from 'hoc/ContextProvider';

export default function TimerContainer() {
	const { timers } = useTimers();

	const displayTimers = timers.map((timer) => <Timer key={timer.id} timer={timer} />);
	return <section className="timer-container">{displayTimers}</section>;
}
