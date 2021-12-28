import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function UserInput({ timerAttributes, isInputReset, setIsInputReset }) {
	const { id, type, maxNumber, maxLength, defaultValue } = timerAttributes;
	const [value, setValue] = useState(defaultValue);

	useEffect(() => {
		if (isInputReset) {
			setValue(defaultValue);
			setIsInputReset(false);
		}
	}, [isInputReset, setIsInputReset, defaultValue]);

	const onChangeHandler = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className="flex-grow flex md:flex-col">
			<label className="w-24" htmlFor={id}>
				{id.toUpperCase()}
			</label>
			<input
				className="w-full border rounded-md px-2"
				type={type}
				id={id}
				name={id}
				min={maxNumber ? 0 : null}
				max={maxNumber?.toString()}
				maxLength={maxLength?.toString()}
				step="1"
				value={value}
				onChange={onChangeHandler}
			/>
		</div>
	);
}

UserInput.propTypes = {
	timerAttributes: PropTypes.object.isRequired
};
