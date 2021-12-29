import UserForm from 'components/UserForm/UserForm';
import TimerContainer from 'components/TimerContainer/TimerContainer';
import ContextProvider from 'hoc/ContextProvider';
import ArchiveContainer from 'components/ArchiveContainer/ArchiveContainer';

function App() {
	return (
		<div className="App container mx-auto">
			<ContextProvider>
				<UserForm />
				<TimerContainer />
				<ArchiveContainer />
			</ContextProvider>
		</div>
	);
}

export default App;
