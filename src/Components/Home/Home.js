import React from 'react';
import useAuth from '../../Context/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>Wellcome home</h2>
            <h5>User: {user.displayName}</h5>
        </div>
    );
};

export default Home;