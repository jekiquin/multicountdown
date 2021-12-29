import { v4 as uuid } from 'uuid';

export const ACTIONS = {
	ADD_TIMER: 'add_timer',
	DELETE_TIMER: 'delete_timer',
	COUNT_DOWN: 'count_down',
	SET_ACTIVE: 'set_active',
	RESET_TIMER: 'reset_timer'
};

export function reducer(timers, action) {
	let timerIndex;
	switch (action.type) {
		case ACTIONS.ADD_TIMER:
			return [...timers, newTimer(action.payload)];
		case ACTIONS.DELETE_TIMER:
			return timers.filter((timer) => timer.id !== action.payload);
		case ACTIONS.COUNT_DOWN:
			timerIndex = timers.findIndex((timer) => timer.id === action.payload);
			timers[timerIndex].currentTime -= 1;
			return timers;
		case ACTIONS.SET_ACTIVE:
			timerIndex = timers.findIndex((timer) => timer.id === action.payload.id);
			timers[timerIndex].isActive = action.payload.isActive;
			return timers;
		case ACTIONS.RESET_TIMER:
			timerIndex = timers.findIndex((timer) => timer.id === action.payload);
			timers[timerIndex].currentTime = timers[timerIndex].time;
			return timers;
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

export function countdown(timerId) {
	return {
		type: ACTIONS.COUNT_DOWN,
		payload: timerId
	};
}

export function setActive(timerId, isActive) {
	return {
		type: ACTIONS.SET_ACTIVE,
		payload: {
			id: timerId,
			isActive
		}
	};
}

export function resetTimer(timerId) {
	return {
		type: ACTIONS.RESET_TIMER,
		payload: timerId
	};
}

function newTimer(inputObj) {
	return {
		id: uuid(),
		isActive: false,
		currentTime: inputObj.time,
		...inputObj
	};
}
