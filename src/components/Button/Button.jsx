import PropTypes from 'prop-types';
import './Button.scss';

function Button({text, url}) {
  return (
    <a className='button' href={url} download >
        {text}
    </a>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

export default Button