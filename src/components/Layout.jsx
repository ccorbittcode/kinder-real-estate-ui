import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import Box from '@mui/material/Box';
import { useState, useEffect } from "react";
import { UserProvider } from "./UserContext";
import { Container } from "@mui/material";

export default function Layout() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/check`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.isAuthenticated) {
                        setUser(user.username);
                    } else {
                        setUser(null);
                    }
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Failed to check if user is logged in:', error);
                setUser(null);
            }
        };

        checkUserLoggedIn();
    }, []);

    return (
        <Box sx={{
            m: 0,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '97.5vh'
        }}
        >
            <UserProvider user={user} setUser={setUser}>
                <Navbar />
                <Container maxWidth={false} disableGutters>
                    <Outlet className="outlet" />
                </Container>
            </UserProvider>
            <Footer />
        </Box>
    )
}
