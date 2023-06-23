import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const SignOut = () => {
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign-out successful.');
            })
            .catch((error) => {
                console.log('An error happened: ' + error.message);
            });
    };

    return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
