import React, { useState } from 'react';
import { TextField, CssBaseline, Button, Box, Link } from '@mui/material';
import { orange } from '@mui/material/colors';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const color = orange[800];

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setName(user.displayName);
                alert('Giriş Başarılı');
            })
            .catch((error) => {
                alert(error.message + ' : ' + error.code);
            });
    };

    return (
        <>
            <CssBaseline />
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Name"
                    required
                    autoComplete="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

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
                    <Link href="/Signin" sx={{ margin: '2rem' }}>
                        Already have a account?
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default Signup;
