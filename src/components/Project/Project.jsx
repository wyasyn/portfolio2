import PropTypes from 'prop-types';
import './Project.scss'
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { Link } from 'react-router-dom';

function Project({text, image}) {
  return (
    <div className="project">
        <img src={image} alt="image" />
        <div className="icons">
            <Link> 
                <AiFillEye />
            </Link>
            <p>
                {text}
            </p>
            <Link>
                <AiFillGithub />
            </Link>
        </div>
    </div>
  )
}

Project.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };


export default Project