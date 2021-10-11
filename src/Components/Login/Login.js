import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';


const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <h2>Please Log In</h2>
            <button onClick={signInWithGoogle}>Google Sign In</button>
            <br />
            <Link to="/register">Register</Link>
        </div>
    );
};

export default Login; <h2>Please Log In</h2>