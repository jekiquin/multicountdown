import PropTypes from 'prop-types';

export default function UserInput({ id, maxNumber }) {
	return (
		<div>
			<label htmlFor={id}>{id.toUpperCase()}</label>
			<input type="number" id={id} name={id} max={maxNumber.toString()} />
		</div>
	);
}

UserInput.propTypes = {
	id: PropTypes.string.isRequired,
	maxNumber: PropTypes.number.isRequired
};
