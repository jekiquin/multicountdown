const MIN_TO_SEC = 60;
const HR_TO_SEC = 3600;

export function convertToSeconds(hours = 0, minutes = 0, seconds = 0) {
	return Number(seconds) + Number(minutes) * MIN_TO_SEC + Number(hours) * HR_TO_SEC;
}

export function timeFormatFromSeconds(inputSeconds) {
	const hours = inputSeconds / HR_TO_SEC;
	const minutes = (hours % 1) * 60;
	const seconds = (minutes % 1) * 60;
	return `${formatTime(Math.floor(hours))}:${formatTime(Math.floor(minutes))}:${formatTime(
		Math.round(seconds)
	)}`;
}

function formatTime(input) {
	return input.toString().padStart(2, '0');
}
