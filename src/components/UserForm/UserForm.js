import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import UserInput from 'components/UserInput/UserInput';
import { ATTRIBUTES } from 'data/user-input-attributes';

export default function UserForm() {
	const [isInputReset, setIsInputReset] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			e.target.timer.value,
			e.target.hours.value,
			e.target.minutes.value,
			e.target.seconds.value
		);
		setIsInputReset(true);
	};

	const displayInputs = ATTRIBUTES.map((data) => (
		<UserInput
			key={uuid()}
			timerAttributes={data}
			isInputReset={isInputReset}
			setIsInputReset={setIsInputReset}
		/>
	));

	return (
		<section>
			<form onSubmit={handleSubmit} autoComplete="false">
				{displayInputs}
				<button type="submit">Set Time</button>
			</form>
		</section>
	);
}
