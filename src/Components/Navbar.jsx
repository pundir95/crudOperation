import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem('token');
    const logOut = () => {
        localStorage.clear();
        navigate('/logout')
    }
    return (
        <>
            <div className="navBar">
                <ul>
                    {
                        auth ?
                            <>
                                <li><Link to="/logout" onClick={logOut}>logout</Link></li>
                            </> :
                            <>
                                <li><Link to="/login">login</Link></li>
                            </>
                    }

                </ul>
            </div>

        </>
    )
}
export default Navbar;
