import PropTypes from 'prop-types';
import './Button.scss';

function ButtonB({text, url}) {
  return (
    <a className='button' href={url} >
        {text}
    </a>
  )
}

ButtonB.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

export default ButtonB