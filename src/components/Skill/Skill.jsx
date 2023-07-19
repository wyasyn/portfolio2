import './Skill.scss'
import PropTypes from 'prop-types';


function Skill( { icon, title } ) {
  return (
    <div className="skill">
        <div className="icon">
            <img src={icon} alt="image" />
        </div>
        <div className="title-skill">
            {title}
        </div>
    </div>
  )
}

Skill.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

export default Skill