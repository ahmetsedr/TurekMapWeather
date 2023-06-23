import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';


const AuthLayout = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (user) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default AuthLayout;