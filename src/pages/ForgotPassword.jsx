import React, { useState } from 'react';
import { TextField, CssBaseline, Button, Box, Link } from '@mui/material';
import { orange } from '@mui/material/colors';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';

const color = orange[800];

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [resetSent, setResetSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setResetSent(true);
            })
            .catch((error) => {
                alert(error.message);
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
                <Button
                    fullWidth
                    margin="normal"
                    variant="contained"
                    sx={{ backgroundColor: color }}
                    type="submit"
                >
                    Reset Password
                </Button>
                {resetSent && (
                    <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                        Password reset email sent. Please check your inbox.
                    </p>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Link href="/" sx={{ margin: '2rem' }}>
                        Sign in
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default ForgotPassword;
