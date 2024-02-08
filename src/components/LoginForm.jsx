import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import './LoginForm.css';
import { UserContext } from './UserContext';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser, showSnackbar } = useContext(UserContext);


    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
                credentials: 'include'
            });

            if (response.ok) {
                setUser(username);
                showSnackbar('Login Successful!');
                navigate('/dashboard');
            } else {
                // Handle login failure
                showSnackbar('Login failed');
                setSnackbarOpen(true);
            }
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    return (
        <Box sx={{
            m: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            <form onSubmit={handleLogin}>
                <Box className="signup-box" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: "500px"
                }}
                >
                    <Typography variant="h4" sx={{ m: 2 }}>
                        Realtor Login
                    </Typography>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <button type="submit">Log In</button>
                </Box>
            </form>
        </Box>
    );
}

export default LoginForm;
