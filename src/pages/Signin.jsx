import React, { useState } from 'react';
import { TextField, CssBaseline, Button, Box, Link } from '@mui/material';
import { orange } from '@mui/material/colors';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const color = orange[800];

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    };

    return (
        <>
            <CssBaseline />
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    fullWidth
                    margin="normal"
                    variant="contained"
                    sx={{ backgroundColor: color }}
                    type="submit"
                >
                    Sign in
                </Button>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Link href="/ForgotPassword" sx={{ margin: '2rem' }}>
                        Forgot Password
                    </Link>
                    <Link href="/Signup" sx={{ margin: '2rem' }}>
                        Create New Account
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default Signin;
