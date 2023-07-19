import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import { MdOutlineComputer } from "react-icons/md"
import { FaCog, FaHome, FaUser, FaBriefcase, FaEnvelope} from "react-icons/fa"
import { NavHashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <>
        <div className="navbar">
            <NavHashLink to='/#hero'  className="icon">
                <FaHome />
            </NavHashLink>
            <NavHashLink to='/#about'  className="icon">
                <FaUser />
            </NavHashLink>
            <NavHashLink to='/#skills' className="icon">
                <MdOutlineComputer />
            </NavHashLink>
            <NavHashLink to='/#services'  className="icon">
                <FaCog />
            </NavHashLink>
            <NavHashLink to='/#works'  className="icon">
                <FaBriefcase />
            </NavHashLink>
            <NavLink to='/contact' className="icon">
                <FaEnvelope />
            </NavLink>
        </div>
    </>
  )
}

export default Navbar