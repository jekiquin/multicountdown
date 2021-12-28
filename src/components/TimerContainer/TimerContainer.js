import Timer from 'components/Timer/Timer';
import { useTimers } from 'hoc/ContextProvider';
import { v4 as uuid } from 'uuid';

export default function TimerContainer() {
	const timers = useTimers();
	const displayTimers = timers.map((timer) => <Timer key={uuid()} timer={timer} />);
	return <section>{displayTimers}</section>;
}
