import Timer from 'components/Timer/Timer';
import { useTimers } from 'hoc/ContextProvider';

export default function TimerContainer() {
	const { timers } = useTimers();
	console.log(timers);

	const displayTimers = timers.map((timer) => <Timer key={timer.id} timer={timer} />);
	return <section className="flex flex-col gap-6">{displayTimers}</section>;
}
