import PropTypes from 'prop-types';
import { ICONS } from 'data/icons';

export default function Button({ label, handleClick, disabled }) {
	const { src, alt } = ICONS[label];
	let addHover = !disabled ? 'hover:bg-blue-400' : '';
	addHover = label === 'delete' ? 'hover:bg-red-400' : addHover;
	let addBg = !disabled ? 'bg-blue-200' : 'bg-gray-200';
	addBg = label === 'delete' ? 'bg-red-200' : addBg;
	return (
		<button
			className={`p-3 w-10 ${addBg} rounded-xl ${addHover}`}
			onClick={handleClick}
			disabled={disabled}>
			<img className="w-full" src={src} alt={alt} />
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
