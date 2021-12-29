import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

export default function ButtonContainer(props) {
	const { playButton, handlePlay, handleReset, handleDelete, disabled } = props;

	return (
		<div>
			<Button label={playButton} handleClick={handlePlay} disabled={disabled} />
			<Button label="reset" handleClick={handleReset} />
			<Button label="delete" handleClick={handleDelete} />
		</div>
	);
}

ButtonContainer.propTypes = {
	playButton: PropTypes.string.isRequired,
	disabled: PropTypes.bool.isRequired,
	handlePlay: PropTypes.func.isRequired,
	handleReset: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired
};
