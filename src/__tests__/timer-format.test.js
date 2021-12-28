import { convertToSeconds, timeFormatFromSeconds } from '../utils/timer-format';

describe('Testing time converter from time-format.js', () => {
	describe('Testing convertToSeconds', () => {
		test('1 hour, 1 minute, 1 second should return 3661', () => {
			const actual = convertToSeconds('1', '1', '1');
			const expected = 3661;
			expect(actual).toBe(expected);
		});
	});
});
