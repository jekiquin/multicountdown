import { useReducer } from 'react';
import { reducer } from 'reducer/reducer';
import UserForm from 'components/UserForm/UserForm';
import TimerContainer from 'components/TimerContainer/TimerContainer';

function App() {
	const [timers, dispatch] = useReducer(reducer, []);
	console.log(timers);
	return (
		<div className="App container mx-auto">
			<UserForm dispatch={dispatch} />
			<TimerContainer timers={timers} />
		</div>
	);
}

export default App;
