import PropTypes from 'prop-types';

export default function Button({ label, handleClick, disabled }) {
	const addHover = !disabled ? 'hover:bg-blue-200' : '';
	return (
		<button className={`p-4 rounded-xl ${addHover}`} onClick={handleClick} disabled={disabled}>
			{label}
		</button>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool
};

Button.defaultProps = {
	disabled: false
};
