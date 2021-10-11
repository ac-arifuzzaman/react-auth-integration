import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import './Header.css'
// import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/Placeorder">Placeorder</Link>
            <Link to="/register">Register</Link>
            {/* <Link to="/login">Login</Link> */}
            <span>{user.displayName} </span>
            {/* {user?.email && <button onClick={logOut}>Log out</button>} */}
            {user.email ? <button onClick={logOut}>Log out</button> : <Link to="/login">Login</Link>}
        </div>
    );
};

export default Header;