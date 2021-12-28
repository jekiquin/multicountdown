const MIN_TO_SEC = 60;
const HR_TO_SEC = 3600;

export function convertToSeconds(hours = 0, minutes = 0, seconds = 0) {
	return parseInt(seconds) + parseInt(minutes) * MIN_TO_SEC + parseInt(hours) * HR_TO_SEC;
}

export function timeFormatFromSeconds(inputSeconds) {
	const hours = inputSeconds / HR_TO_SEC;
	const minutes = (hours % 1) * 60;
	const seconds = (minutes % 1) * 60;
	return `${Math.floor(hours).padStart('0')}:${Math.floor(minutes).padStart('0')}:${Math.floor(
		seconds
	).padStart('0')}`;
}
