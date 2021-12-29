import Timer from 'components/Timer/Timer';
import { useTimers } from 'hoc/ContextProvider';
import { v4 as uuid } from 'uuid';

export default function TimerContainer() {
	const { timers } = useTimers();
	console.log(timers);

	const displayTimers = timers.map((timer) => <Timer key={uuid()} timer={timer} />);
	return <section className="flex flex-col">{displayTimers}</section>;
}
