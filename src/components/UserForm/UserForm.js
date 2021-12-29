import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ATTRIBUTES } from 'data/user-input-attributes';
import { convertToSeconds } from 'utils/timer-format';
import { useTimers } from 'hoc/ContextProvider';
import { addTimer } from 'reducer/reducer';
import UserInput from 'components/UserInput/UserInput';

export default function UserForm() {
	const [isInputReset, setIsInputReset] = useState(false);
	const { dispatch } = useTimers();
	const handleSubmit = (e) => {
		e.preventDefault();
		const time = convertToSeconds(
			e.target.hours.value,
			e.target.minutes.value,
			e.target.seconds.value
		);
		time &&
			dispatch(
				addTimer({
					name: e.target.timer.value,
					time
				})
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
			<form
				className="flex flex-col p-4 max-w-2xl mx-auto md:items-end"
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
