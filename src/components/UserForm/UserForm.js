import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ATTRIBUTES } from 'data/user-input-attributes';
import { ACTIONS } from 'reducer/reducer';
import UserInput from 'components/UserInput/UserInput';

export default function UserForm({ dispatch }) {
	const [isInputReset, setIsInputReset] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: ACTIONS.ADD_TIMER,
			payload: {
				name: e.target.timer.value,
				hours: e.target.hours.value,
				minutes: e.target.minutes.value,
				seconds: e.target.seconds.value
			}
		});
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
			<form
				className="flex flex-col p-4 md:items-end"
				onSubmit={handleSubmit}
				autoComplete="false">
				<div className="w-full container flex flex-col justify-items-stretch gap-4 md:flex-row">
					{displayInputs}
				</div>
				<button className="w-fit p-4 my-4 border rounded-xl" type="submit">
					Set Time
				</button>
			</form>
		</section>
	);
}
