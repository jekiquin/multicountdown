import { createContext, useContext, useReducer } from 'react';
import { reducer } from 'reducer/reducer';

const TimerContext = createContext();
const ArchiveContext = createContext();

export function useTimers() {
	return useContext(TimerContext);
}

export function useArchives() {
	return useContext(ArchiveContext);
}

export default function ContextProvider({ children }) {
	const [timers, dispatch] = useReducer(reducer, []);
	const [archives, archiveDispatch] = useReducer(reducer, []);
	const store = { timers, dispatch };
	const archive = { archives, archiveDispatch };

	return (
		<TimerContext.Provider value={store}>
			<ArchiveContext.Provider value={archive}>{children}</ArchiveContext.Provider>
		</TimerContext.Provider>
	);
}
