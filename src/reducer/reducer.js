import { v4 as uuid } from 'uuid';

export const ACTIONS = {
	ADD_TIMER: 'add_timer',
	DELETE_TIMER: 'delete_timer'
};

export function reducer(timers, action) {
	switch (action.type) {
		case ACTIONS.ADD_TIMER:
			return [...timers, newTimer(action.payload)];
		case ACTIONS.DELETE_TIMER:
			return timers.filter((timer) => timer.id !== action.payload);
		default:
			return timers;
	}
}

export function addTimer(timerObj) {
	return {
		type: ACTIONS.ADD_TIMER,
		payload: timerObj
	};
}

export function deleteTimer(timerId) {
	return {
		type: ACTIONS.DELETE_TIMER,
		payload: timerId
	};
}

function newTimer(inputObj) {
	return {
		id: uuid(),
		...inputObj
	};
}
