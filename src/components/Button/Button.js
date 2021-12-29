import PropTypes from 'prop-types';

export default function Button({ label, handleClick }) {
	return (
		<button className="p-4 hover:bg-blue-200" onClick={handleClick}>
			{label}
		</button>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired
};
