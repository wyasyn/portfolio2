import './Service.scss'
import PropTypes from 'prop-types';

function Service({ text, image }) {
  return (
    <div className="service">
        <div className="image">
            <img src={image} alt="image" />
        </div>
        <div className="service-text">
            {text}
        </div>
    </div>
  )
}

Service.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default Service