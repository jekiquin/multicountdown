import UserForm from 'components/UserForm/UserForm';
import TimerContainer from 'components/TimerContainer/TimerContainer';
import ContextProvider from 'hoc/ContextProvider';

function App() {
	return (
		<div className="App container mx-auto">
			<ContextProvider>
				<UserForm />
				<TimerContainer />
			</ContextProvider>
		</div>
	);
}

export default App;
