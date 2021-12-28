import { convertToSeconds, timeFormatFromSeconds } from '../utils/timer-format';

const TESTCASES = [
	{
		string: ['1', '1', '1'],
		number: 3661
	},
	{
		string: ['1', '59', '50'],
		number: 7190
	},
	{
		string: ['0', '1', '0'],
		number: 60
	},
	{
		string: ['1', '0', '0'],
		number: 3600
	},
	{
		string: ['3', '59', '59'],
		number: 14399
	}
];

describe('Testing time converter from time-format.js', () => {
	describe('Testing convertToSeconds', () => {
		TESTCASES.forEach((testcase) => {
			test(`${testcase.string} to output ${testcase.number}`, () => {
				const actual = convertToSeconds(...testcase.string);
				expect(actual).toBe(testcase.number);
			});
		});
	});

	describe('Testing timeFormatFromSeconds', () => {
		TESTCASES.forEach((testcase) => {
			const output = testcase.string.map((val) => val.padStart(2, '0')).join(':');

			test(`${testcase.number} to output ${output}`, () => {
				const actual = timeFormatFromSeconds(testcase.number);
				expect(actual).toBe(output);
			});
		});
	});
});
