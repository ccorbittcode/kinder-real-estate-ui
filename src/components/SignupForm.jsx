import React, { useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import './SignupForm.css';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('New passwords do not match');
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                // Redirect the user to the login page, or wherever you want
                window.location.href = '/login';
            } else {
                // Handle signup failure
                alert('Signup failed');
            }
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    return (
        <Box sx={{
            m: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            <form onSubmit={handleSubmit}>
                <Box className="signup-box" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: "500px"
                }}
                >
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide Passwords" : "Show Passwords"}</button>
                    <button type="submit">Sign Up</button>
                </Box>
            </form>
        </Box>
    );
}

export default SignupForm;
