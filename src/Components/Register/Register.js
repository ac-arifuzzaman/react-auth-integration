import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="Email:" /><br />
                <input type="Password" /><br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Register</Link>
        </div>
    );
};

export default Register;