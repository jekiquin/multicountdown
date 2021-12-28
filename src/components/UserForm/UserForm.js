import UserInput from 'components/UserInput/UserInput';
import { MAXVALUES } from 'data/max-time-values';
import { v4 as uuid } from 'uuid';

export default function UserForm() {
	const displayInputs = MAXVALUES.map((data) => (
		<UserInput key={uuid()} id={data.id} maxNumber={data.maxValue} />
	));
	return (
		<section>
			<form>
				{displayInputs}
				<button type="submit">Set Time</button>
			</form>
		</section>
	);
}
