import { createContext, useContext, useReducer } from 'react';
import { reducer } from 'reducer/reducer';

const TimerContext = createContext();

export function useTimers() {
	return useContext(TimerContext);
}

export default function ContextProvider({ children }) {
	const [timers, dispatch] = useReducer(reducer, []);
	const store = { timers, dispatch };

	return <TimerContext.Provider value={store}>{children}</TimerContext.Provider>;
}
