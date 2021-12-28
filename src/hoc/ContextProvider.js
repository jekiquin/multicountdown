import { createContext, useContext, useReducer } from 'react';
import { reducer } from 'reducer/reducer';

const TimerContext = createContext();
const DispatchContext = createContext();

export function useTimers() {
	return useContext(TimerContext);
}

export function useDispatch() {
	return useContext(DispatchContext);
}

export default function ContextProvider({ children }) {
	const [timers, dispatch] = useReducer(reducer, []);

	return (
		<TimerContext.Provider value={timers}>
			<DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
		</TimerContext.Provider>
	);
}
