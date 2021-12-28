import { useReducer } from 'react';
import { reducer } from 'reducer/reducer';
import UserForm from 'components/UserForm/UserForm';

function App() {
	const [timers, dispatch] = useReducer(reducer, []);
	console.log(timers);
	return (
		<div className="App container mx-auto">
			<UserForm dispatch={dispatch} />
		</div>
	);
}

export default App;
