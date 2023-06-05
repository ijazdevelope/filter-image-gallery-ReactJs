import React, { useContext } from 'react';
import { globalState } from '../../App';
import './Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    const { getColor } = useContext(globalState);

    return (
        <>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <Link to='/' className="nav-title">
                        M.Ijaz
                    </Link>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <a>Github</a>
                    <Link to='/header'>Class Component</Link>
                    <Link to='/table'>API Sample</Link>
                    <a>LinkedIn</a>
                    <Link to='/gallery'>Image gallery</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
